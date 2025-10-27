#!/bin/bash

# NetStrike Pro - Installation Script
# Professional Network Stress Testing Suite

echo "╔══════════════════════════════════════════════════════════╗"
echo "║                                                          ║"
echo "║              NETSTRIKE PRO - INSTALLER                   ║"
echo "║         Professional Stress Testing Suite                ║"
echo "║                                                          ║"
echo "╚══════════════════════════════════════════════════════════╝"
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Check Python version
echo -e "${CYAN}[1/5]${NC} Checking Python version..."
python_version=$(python3 --version 2>&1 | awk '{print $2}')
required_version="3.8"

if [ "$(printf '%s\n' "$required_version" "$python_version" | sort -V | head -n1)" = "$required_version" ]; then 
    echo -e "${GREEN}✓${NC} Python $python_version detected"
else
    echo -e "${RED}✗${NC} Python 3.8+ required"
    exit 1
fi

# Install dependencies
echo -e "${CYAN}[2/5]${NC} Installing dependencies..."
if pip3 install -r requirements.txt --quiet; then
    echo -e "${GREEN}✓${NC} Dependencies installed"
else
    echo -e "${RED}✗${NC} Failed to install dependencies"
    exit 1
fi

# Create data directories
echo -e "${CYAN}[3/5]${NC} Creating data directories..."
mkdir -p data/proxies
touch data/proxies/free.txt
touch data/proxies/paid.txt
touch data/proxies/tested.txt
echo -e "${GREEN}✓${NC} Directories created"

# Set permissions
echo -e "${CYAN}[4/5]${NC} Setting permissions..."
chmod +x attack.py
chmod +x install.sh
echo -e "${GREEN}✓${NC} Permissions set"

# Run quick test
echo -e "${CYAN}[5/5]${NC} Running quick test..."
if python3 attack.py --version > /dev/null 2>&1; then
    echo -e "${GREEN}✓${NC} Installation successful!"
else
    echo -e "${YELLOW}⚠${NC}  Warning: Test failed, but installation may still work"
fi

echo ""
echo "╔══════════════════════════════════════════════════════════╗"
echo "║                 INSTALLATION COMPLETE                    ║"
echo "╚══════════════════════════════════════════════════════════╝"
echo ""
echo -e "${GREEN}✓ NetStrike Pro is ready to use!${NC}"
echo ""
echo -e "${YELLOW}Quick Start:${NC}"
echo "  python3 attack.py --interactive     # Interactive mode"
echo "  python3 attack.py --help            # Show help"
echo "  python3 attack.py https://target    # Quick attack"
echo ""
echo -e "${RED}⚠️  IMPORTANT: Read LEGAL.md before use!${NC}"
echo ""


