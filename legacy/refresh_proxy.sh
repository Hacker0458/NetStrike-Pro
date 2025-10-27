#!/bin/bash
# 刷新付费代理工具

echo "========================================"
echo "🔄 刷新付费代理"
echo "========================================"

# 订单号
ORDER_NO="f73f103664b56829ee82fc5087472665"

# 提取数量
QTY=1000

# API地址
API_URL="http://zhuoyuekeji.zhuoyuejituan.com:66/ProxyiPAPI.aspx?action=GetIP&ordernumber=${ORDER_NO}&qty=${QTY}&format=txt"

echo ""
echo "📥 正在从API提取最新代理..."
echo "提取数量: ${QTY}"

# 提取代理
curl -s "${API_URL}" > proxy_paid.txt

# 检查是否成功
if [ $? -eq 0 ]; then
    COUNT=$(wc -l < proxy_paid.txt | tr -d ' ')
    echo "✅ 提取成功！"
    echo ""
    echo "📊 代理统计:"
    echo "  • 提取数量: ${COUNT} 个"
    
    # 复制到cc目录
    cp proxy_paid.txt cc/proxy_paid.txt
    echo "  • 已同步到 cc/ 目录"
    
    echo ""
    echo "📝 前5个代理:"
    head -5 proxy_paid.txt
    
    echo ""
    echo "========================================"
    echo "✅ 代理已更新完成！"
    echo "========================================"
    echo ""
    echo "💡 使用方法:"
    echo "  python3 cc.py -url <授权目标> -f proxy_paid.txt -v 0 -s 60"
    echo ""
else
    echo "❌ 提取失败！请检查网络连接"
    exit 1
fi



