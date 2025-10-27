"""
NetStrike Pro - Introduction Page with Rich UI
"""

from rich.console import Console
from rich.panel import Panel
from rich.text import Text
from rich.align import Align
from . import language

console = Console()

def show_logo():
    """Display NetStrike Pro ASCII logo with gradient colors"""
    
    logo = """
    ███╗   ██╗███████╗████████╗███████╗████████╗██████╗ ██╗██╗  ██╗███████╗
    ████╗  ██║██╔════╝╚══██╔══╝██╔════╝╚══██╔══╝██╔══██╗██║██║ ██╔╝██╔════╝
    ██╔██╗ ██║█████╗     ██║   ███████╗   ██║   ██████╔╝██║█████╔╝ █████╗  
    ██║╚██╗██║██╔══╝     ██║   ╚════██║   ██║   ██╔══██╗██║██╔═██╗ ██╔══╝  
    ██║ ╚████║███████╗   ██║   ███████║   ██║   ██║  ██║██║██║  ██╗███████╗
    ╚═╝  ╚═══╝╚══════╝   ╚═╝   ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝╚══════╝
                                                                              
    ██████╗ ██████╗  ██████╗                                                
    ██╔══██╗██╔══██╗██╔═══██╗                                               
    ██████╔╝██████╔╝██║   ██║                                               
    ██╔═══╝ ██╔══██╗██║   ██║                                               
    ██║     ██║  ██║╚██████╔╝                                               
    ╚═╝     ╚═╝  ╚═╝ ╚═════╝                                                
    """
    
    # Create gradient text
    text = Text()
    lines = logo.strip().split('\n')
    
    for i, line in enumerate(lines):
        if i < 6:
            # Logo gradient: cyan to blue
            text.append(line + '\n', style="cyan bold")
        else:
            # PRO gradient: blue to magenta
            text.append(line + '\n', style="blue bold")
    
    console.print(Align.center(text))

def show_intro(lang_code: str = "en"):
    """Show introduction page"""
    
    lang = language.init_language(lang_code)
    
    console.clear()
    console.print()
    
    # Show logo
    show_logo()
    
    # Show tagline
    tagline = Text()
    tagline.append(lang.get('brand.tagline'), style="bold white")
    tagline.append(" • ", style="dim")
    tagline.append(lang.get('brand.version'), style="cyan")
    console.print(Align.center(tagline))
    console.print()
    
    # Legal notice
    legal_panel = Panel(
        f"""[bold yellow]{lang.get('legal.title')}[/bold yellow]

[bold red]{lang.get('legal.warning_line1')}[/bold red]
[bold red]{lang.get('legal.warning_line2')}[/bold red]

[bold yellow]{lang.get('legal.requirements_title')}[/bold yellow]
  [green]{lang.get('legal.req1')}[/green]
  [green]{lang.get('legal.req2')}[/green]
  [green]{lang.get('legal.req3')}[/green]

[dim]{lang.get('legal.footer')}[/dim]""",
        border_style="red",
        padding=(1, 2)
    )
    console.print(legal_panel)
    console.print()
    
    # Features
    features_text = f"""[bold cyan]{lang.get('features.title')}[/bold cyan]
  [green]✓[/green] {lang.get('features.f1')}
  [green]✓[/green] {lang.get('features.f2')}
  [green]✓[/green] {lang.get('features.f3')}
  [green]✓[/green] {lang.get('features.f4')}
  [green]✓[/green] {lang.get('features.f5')}
  [green]✓[/green] {lang.get('features.f6')}
  [green]✓[/green] {lang.get('features.f7')}
  [green]✓[/green] {lang.get('features.f8')}"""
    
    console.print(Panel(features_text, border_style="cyan"))
    console.print()
    
    # Press enter to continue
    input(f"[dim]{lang.get('prompts.press_enter')}[/dim]")

if __name__ == "__main__":
    show_intro("en")


