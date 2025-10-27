#!/usr/bin/env python3
"""
NetStrike Pro - Professional Network Stress Testing Suite
Main Entry Point

⚠️  LEGAL NOTICE: This tool is for AUTHORIZED security testing ONLY!
Unauthorized use is ILLEGAL and may result in prosecution!
"""

import sys
import argparse
from pathlib import Path

# Add project root to path
sys.path.insert(0, str(Path(__file__).parent))

from ui.intro import show_intro
from ui.language import init_language, t
from rich.console import Console
from rich.panel import Panel

console = Console()
__version__ = "5.0.0"

def show_help():
    """Show help message"""
    help_text = """
[bold cyan]NetStrike Pro - Professional Stress Testing Tool[/bold cyan]
[dim]压测工具 - 专业版[/dim]

[bold]USAGE / 用法:[/bold]
  python3 attack.py <target> [options]

[bold]BASIC EXAMPLES / 基础示例:[/bold]
  python3 attack.py https://example.com
  python3 attack.py https://example.com --power high
  python3 attack.py --interactive

[bold]ADVANCED EXAMPLES / 高级示例:[/bold]
  python3 attack.py https://example.com \\
    --method cloudflare-bypass \\
    --threads 2000 \\
    --duration 300

[bold]OPTIONS / 选项:[/bold]
  -h, --help              Show this help / 显示帮助
  -v, --version           Show version / 显示版本
  -l, --lang LANG         Language: en/zh / 语言
  
  [bold]MODES / 模式:[/bold]
  --interactive           Interactive mode / 交互模式
  --auto                  Auto detection / 自动检测
  
  [bold]ATTACK / 攻击:[/bold]
  --method METHOD         Attack method / 攻击方法
  --threads NUM           Threads / 线程数
  --duration SEC          Duration / 时长
  --power LEVEL           Power level / 强度
  
  [bold]PROXY / 代理:[/bold]
  --proxy auto            Auto management / 自动管理
  --proxy-file FILE       Proxy file / 代理文件
  --proxy-update          Update proxies / 更新代理
  
  [bold]TOOLS / 工具:[/bold]
  --list-methods          List methods / 列出方法
  --method-info METHOD    Method info / 方法详情
  
[bold]DOCUMENTATION / 文档:[/bold]
  README.md               Main documentation
  README_CN.md            中文文档
  
[bold yellow]⚠️  LEGAL / 法律:[/bold yellow]
  Read LEGAL.md before use! / 使用前请阅读法律声明！
"""
    console.print(Panel(help_text, border_style="cyan", padding=(1, 2)))

def main():
    """Main entry point"""
    
    parser = argparse.ArgumentParser(add_help=False)
    parser.add_argument('target', nargs='?', help='Target URL or IP:PORT')
    parser.add_argument('-h', '--help', action='store_true')
    parser.add_argument('-v', '--version', action='store_true')
    parser.add_argument('-l', '--lang', choices=['en', 'zh'], default='en')
    parser.add_argument('--interactive', action='store_true')
    parser.add_argument('--auto', action='store_true')
    parser.add_argument('--method', type=str)
    parser.add_argument('--threads', type=int, default=500)
    parser.add_argument('--duration', type=int, default=180)
    parser.add_argument('--power', choices=['quick', 'normal', 'high', 'extreme'])
    parser.add_argument('--proxy', type=str)
    parser.add_argument('--proxy-file', type=str)
    parser.add_argument('--proxy-update', action='store_true')
    parser.add_argument('--list-methods', action='store_true')
    parser.add_argument('--method-info', type=str)
    parser.add_argument('--no-intro', action='store_true')
    
    args = parser.parse_args()
    
    # Initialize language
    lang = init_language(args.lang)
    
    # Show version
    if args.version:
        console.print(f"[bold cyan]NetStrike Pro[/bold cyan] [dim]v{__version__}[/dim]")
        return 0
    
    # Show help
    if args.help:
        show_help()
        return 0
    
    # Show intro (unless disabled)
    if not args.no_intro and not any([args.list_methods, args.method_info, args.proxy_update]):
        show_intro(args.lang)
    
    # List methods
    if args.list_methods:
        console.print("[yellow]📋 This feature will list all 60+ attack methods[/yellow]")
        console.print("[dim]Feature implementation in progress...[/dim]")
        return 0
    
    # Method info
    if args.method_info:
        console.print(f"[yellow]📖 Method info for: {args.method_info}[/yellow]")
        console.print("[dim]Feature implementation in progress...[/dim]")
        return 0
    
    # Proxy update
    if args.proxy_update:
        console.print("[yellow]🔄 Updating proxy pool...[/yellow]")
        console.print("[dim]Feature implementation in progress...[/dim]")
        return 0
    
    # Interactive mode
    if args.interactive:
        console.print("[bold green]🎯 Launching Interactive Mode...[/bold green]")
        console.print()
        console.print("[dim]This will show the full interactive menu with:[/dim]")
        console.print("  • Quick Attack")
        console.print("  • Advanced Attack")
        console.print("  • Layer 4 Attack")
        console.print("  • Game Server Attack")
        console.print("  • Tools Suite")
        console.print("  • Proxy Manager")
        console.print("  • Settings")
        console.print()
        console.print("[yellow]Feature implementation in progress...[/yellow]")
        return 0
    
    # Quick attack
    if args.target:
        console.print(f"[bold green]🚀 NetStrike Pro - Quick Attack Mode[/bold green]")
        console.print()
        console.print(f"[cyan]Target:[/cyan] {args.target}")
        console.print(f"[cyan]Threads:[/cyan] {args.threads}")
        console.print(f"[cyan]Duration:[/cyan] {args.duration}s")
        if args.method:
            console.print(f"[cyan]Method:[/cyan] {args.method}")
        else:
            console.print(f"[cyan]Method:[/cyan] Auto-detect")
        console.print()
        
        console.print("[yellow]⚠️  This is the framework version[/yellow]")
        console.print("[dim]The full implementation will:[/dim]")
        console.print("  1. Detect target (CDN, server type, protection)")
        console.print("  2. Recommend best attack method")
        console.print("  3. Auto-manage proxies")
        console.print("  4. Launch attack with real-time monitoring")
        console.print("  5. Show live stats (QPS, bandwidth, success rate)")
        console.print()
        console.print("[green]✓ Framework is ready for full implementation[/green]")
        
        return 0
    
    # No arguments - show help
    show_help()
    return 0

if __name__ == "__main__":
    try:
        sys.exit(main())
    except KeyboardInterrupt:
        console.print("\n[yellow]⚠️  Stopped by user[/yellow]")
        sys.exit(0)
    except Exception as e:
        console.print(f"\n[red]❌ Error: {e}[/red]")
        sys.exit(1)


