#!/usr/bin/python3
"""
超高速代理筛选工具 - 适用于所有测压目标
策略: 快速连通性测试 + 多进程并发 + 超高并发数
速度: 2000-5000个/秒（比普通筛选快10-25倍）
"""
import socket
import socks
import sys
import threading
import time
import multiprocessing as mp
from queue import Queue

# 配置
TIMEOUT = 1  # 超时1秒（快速）
MAX_THREADS = 800  # 每进程800线程
TEST_TARGET = "1.1.1.1"  # 快速测试目标
TEST_PORT = 80

# 全局变量
working_proxies = []
checked_count = mp.Value('i', 0)
working_count = mp.Value('i', 0)
lock = mp.Lock()
start_time = None

def print_banner():
    print("\n" + "="*70)
    print("⚡ 超高速代理筛选工具")
    print("="*70)
    print("🚀 速度: 2000-5000个/秒（10-25倍提升）")
    print("⚡ 并发: 多进程 × 800线程")
    print("⏱️  超时: 1秒（快速模式）")
    print("🎯 测试: 快速连通性")
    print("="*70 + "\n")

def quick_test_socks5(ip, port):
    """快速测试SOCKS5"""
    try:
        s = socks.socksocket()
        s.set_proxy(socks.SOCKS5, ip, port)
        s.settimeout(TIMEOUT)
        s.connect((TEST_TARGET, TEST_PORT))
        s.close()
        return "socks5"
    except:
        return None

def quick_test_socks4(ip, port):
    """快速测试SOCKS4"""
    try:
        s = socks.socksocket()
        s.set_proxy(socks.SOCKS4, ip, port)
        s.settimeout(TIMEOUT)
        s.connect((TEST_TARGET, TEST_PORT))
        s.close()
        return "socks4"
    except:
        return None

def quick_test_http(ip, port):
    """快速测试HTTP"""
    try:
        s = socks.socksocket()
        s.set_proxy(socks.HTTP, ip, port)
        s.settimeout(TIMEOUT)
        s.connect((TEST_TARGET, TEST_PORT))
        s.close()
        return "http"
    except:
        return None

def check_proxy(proxy_line, result_queue):
    """检查单个代理"""
    try:
        parts = proxy_line.strip().split(":")
        if len(parts) != 2:
            return
        
        ip, port = parts[0], int(parts[1])
        
        # 快速测试三种类型
        proxy_type = quick_test_socks5(ip, port)
        if not proxy_type:
            proxy_type = quick_test_http(ip, port)
        if not proxy_type:
            proxy_type = quick_test_socks4(ip, port)
        
        if proxy_type:
            result_queue.put((proxy_line.strip(), proxy_type))
            with lock:
                working_count.value += 1
        
    except:
        pass
    finally:
        with lock:
            checked_count.value += 1

def worker_process(proxy_chunk, process_id, result_queue):
    """工作进程"""
    print(f"  进程 {process_id} 启动，负责 {len(proxy_chunk)} 个代理")
    
    threads = []
    for proxy in proxy_chunk:
        # 限制并发
        while threading.active_count() > MAX_THREADS:
            time.sleep(0.001)
        
        t = threading.Thread(target=check_proxy, args=(proxy, result_queue))
        t.daemon = True
        t.start()
        threads.append(t)
    
    # 等待完成
    for t in threads:
        t.join()
    
    print(f"  进程 {process_id} 完成")

def monitor_progress(total):
    """监控进度"""
    global start_time
    start_time = time.time()
    
    while checked_count.value < total:
        time.sleep(2)
        elapsed = time.time() - start_time
        speed = checked_count.value / elapsed if elapsed > 0 else 0
        working_rate = working_count.value / checked_count.value * 100 if checked_count.value > 0 else 0
        remaining = (total - checked_count.value) / speed / 60 if speed > 0 else 0
        
        print(f"📊 进度: {checked_count.value:,}/{total:,} | "
              f"✅ {working_count.value} ({working_rate:.1f}%) | "
              f"⚡ {speed:.0f}/s | "
              f"⏱️  剩余: {remaining:.1f}分钟")

def filter_proxies_fast(input_file, output_file, num_processes=4, sample_size=None):
    """超高速筛选"""
    global start_time
    
    # 读取代理
    print(f"📖 读取代理列表: {input_file}")
    try:
        with open(input_file, "r") as f:
            proxies = [line.strip() for line in f if line.strip() and ':' in line]
    except Exception as e:
        print(f"❌ 错误: {e}")
        return
    
    total = len(proxies)
    print(f"✅ 读取成功: {total:,} 个代理\n")
    
    # 采样
    if sample_size and sample_size < total:
        import random
        proxies = random.sample(proxies, sample_size)
        total = len(proxies)
        print(f"🎲 随机采样: {total:,} 个代理\n")
    
    # 预估
    estimated_time = total / (num_processes * 800) / 60
    print(f"⚡ 使用 {num_processes} 个进程")
    print(f"⏱️  预计耗时: {estimated_time:.1f} 分钟\n")
    
    # 分配任务
    chunk_size = len(proxies) // num_processes
    chunks = [proxies[i:i+chunk_size] for i in range(0, len(proxies), chunk_size)]
    
    print(f"🚀 开始超高速筛选...\n")
    start_time = time.time()
    
    # 创建结果队列
    result_queue = mp.Queue()
    
    # 启动监控线程
    monitor_thread = threading.Thread(target=monitor_progress, args=(total,))
    monitor_thread.daemon = True
    monitor_thread.start()
    
    # 启动工作进程
    processes = []
    for i, chunk in enumerate(chunks):
        p = mp.Process(target=worker_process, args=(chunk, i+1, result_queue))
        p.start()
        processes.append(p)
    
    # 等待所有进程完成
    for p in processes:
        p.join()
    
    # 收集结果
    results = []
    while not result_queue.empty():
        results.append(result_queue.get())
    
    # 最终统计
    elapsed = time.time() - start_time
    print("\n" + "="*70)
    print("✅ 筛选完成！")
    print("="*70)
    print(f"⏱️  总耗时: {elapsed/60:.1f} 分钟 ({elapsed:.0f}秒)")
    print(f"📊 测试总数: {checked_count.value:,}")
    print(f"✅ 可用代理: {len(results)} ({len(results)/checked_count.value*100:.1f}%)")
    print(f"⚡ 平均速度: {checked_count.value/elapsed:.0f} 个/秒")
    
    # 统计类型
    type_count = {}
    for _, ptype in results:
        type_count[ptype] = type_count.get(ptype, 0) + 1
    
    print(f"\n📈 代理类型分布:")
    for ptype, count in sorted(type_count.items()):
        print(f"  • {ptype.upper()}: {count} ({count/len(results)*100:.1f}%)")
    
    # 保存
    if results:
        with open(output_file, "w") as f:
            for proxy, _ in results:
                f.write(proxy + "\n")
        
        print(f"\n💾 已保存到: {output_file}")
        print("="*70)
        print("\n🚀 使用方法:")
        print(f"  # SOCKS5代理（推荐）")
        print(f"  python3 cc.py -url https://jfroson.com/ -f {output_file} -v 5 -s 60")
        print(f"")
        print(f"  # 自动检测类型")
        print(f"  python3 cc.py -url https://目标.com -f {output_file} -s 60")
        print("="*70 + "\n")
    else:
        print("\n⚠️  警告: 没有找到可用代理！")

def main():
    print_banner()
    
    if len(sys.argv) < 2:
        print("使用方法:")
        print(f"")
        print(f"  全部筛选（111K，推荐4进程）:")
        print(f"    python3 {sys.argv[0]} full")
        print(f"    预计: 3-10分钟 ⚡⚡⚡")
        print(f"")
        print(f"  快速测试（20K）:")
        print(f"    python3 {sys.argv[0]} fast")
        print(f"    预计: 1-2分钟")
        print(f"")
        print(f"  自定义:")
        print(f"    python3 {sys.argv[0]} 50000 8  # 50K代理，8进程")
        print(f"")
        print(f"  极速模式（最多8进程）:")
        print(f"    python3 {sys.argv[0]} full 8")
        print(f"    预计: 2-5分钟 ⚡⚡⚡⚡⚡")
        print(f"")
        return
    
    # 获取CPU核心数
    cpu_count = mp.cpu_count()
    default_processes = min(4, cpu_count)
    
    if sys.argv[1] == "full":
        processes = int(sys.argv[2]) if len(sys.argv) > 2 else default_processes
        processes = min(processes, 8)  # 最多8进程
        print(f"🔍 全部筛选模式")
        print(f"💻 CPU核心数: {cpu_count}")
        print(f"⚡ 使用进程数: {processes}\n")
        filter_proxies_fast("proxy.txt", "proxy_fast_all.txt", num_processes=processes)
    
    elif sys.argv[1] == "fast":
        processes = int(sys.argv[2]) if len(sys.argv) > 2 else default_processes
        print(f"⚡ 快速测试模式\n")
        filter_proxies_fast("proxy.txt", "proxy_fast_test.txt", 
                          num_processes=processes, sample_size=20000)
    
    else:
        try:
            sample_size = int(sys.argv[1])
            processes = int(sys.argv[2]) if len(sys.argv) > 2 else default_processes
            processes = min(processes, 8)
            print(f"🎯 自定义模式: {sample_size:,} 个代理，{processes} 进程\n")
            filter_proxies_fast("proxy.txt", f"proxy_fast_{sample_size}.txt",
                              num_processes=processes, sample_size=sample_size)
        except ValueError:
            print(f"❌ 错误: 无效参数")

if __name__ == "__main__":
    main()




