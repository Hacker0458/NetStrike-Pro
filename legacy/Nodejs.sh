#!/bin/bash

# 设置所有文件为可执行权限
chmod 777 *

# 自动接受所有 apt 操作，避免弹窗
export DEBIAN_FRONTEND=noninteractive

# 更新并安装常用软件包，避免任何交互
apt update -y
apt-get install -y -q \
    ca-certificates \
    curl \
    gnupg \
    wget \
    tar \
    xvfb \
    unzip \
    snapd \
    screen \
    git \

# 添加 Nodesource 的 Node.js v20 源
mkdir -p /etc/apt/keyrings
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x nodistro main" > /etc/apt/sources.list.d/nodesource.list
apt-get update -y
apt-get install -y -q nodejs

# 安装最新版 Go（通过 snap）
snap install go --classic

# 安装 Node.js 项目依赖（建议在含 package.json 的目录下执行）
npm install --save \
    net fs url hpack path colors child_process playwright-core playwright-extra \
    http2 random-referer request axios tls crypto header-generator user-agents \
    cluster fake-useragent randomstring string-random
