const axios = require('axios');
const fs = require('fs');

const Git_HubUrl= [
    "https://openproxylist.xyz/http.txt",
    "https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/http.txt",
    "https://raw.githubusercontent.com/Zaeem20/FREE_PROXIES_LIST/master/http.txt",
    "https://raw.githubusercontent.com/Zaeem20/FREE_PROXIES_LIST/master/https.txt",
    "https://raw.githubusercontent.com/MuRongPIG/Proxy-Master/main/http.txt",
    "https://raw.githubusercontent.com/Anonym0usWork1221/Free-Proxies/main/proxy_files/http_proxies.txt",
    "https://raw.githubusercontent.com/andigwandi/free-proxy/main/proxy_list.txt",
    "https://raw.githubusercontent.com/roosterkid/openproxylist/main/HTTPS_RAW.txt",
    "https://raw.githubusercontent.com/mmpx12/proxy-list/master/https.txt",
    "https://raw.githubusercontent.com/mmpx12/proxy-list/master/http.txt",
    "https://raw.githubusercontent.com/zloi-user/hideip.me/main/connect.txt",
    "https://raw.githubusercontent.com/zloi-user/hideip.me/main/http.txt",
    "https://raw.githubusercontent.com/proxifly/free-proxy-list/main/proxies/protocols/http/data.txt",
    "https://raw.githubusercontent.com/zloi-user/hideip.me/main/https.txt",
    "https://raw.githubusercontent.com/vakhov/fresh-proxy-list/master/http.txt",
    "https://raw.githubusercontent.com/vakhov/fresh-proxy-list/master/https.txt",
    "https://raw.githubusercontent.com/sunny9577/proxy-scraper/master/proxies.txt",
    "https://raw.githubusercontent.com/Master-Mind-007/Auto-Parse-Proxy/main/https.txt",
    "https://raw.githubusercontent.com/im-razvan/proxy_list/main/http.txt",
    "https://raw.githubusercontent.com/ErcinDedeoglu/proxies/main/proxies/http.txt",
    "https://raw.githubusercontent.com/ErcinDedeoglu/proxies/main/proxies/https.txt",
    "https://raw.githubusercontent.com/casals-ar/proxy-list/main/http",
    "https://raw.githubusercontent.com/SevenworksDev/proxy-list/main/proxies/https.txt",
    "https://raw.githubusercontent.com/SevenworksDev/proxy-list/main/proxies/http.txt",
    "https://raw.githubusercontent.com/casals-ar/proxy-list/main/https",
    "https://raw.githubusercontent.com/Tsprnay/Proxy-lists/master/proxies/http.txt",
    "https://raw.githubusercontent.com/Tsprnay/Proxy-lists/master/proxies/https.txt",
    "https://raw.githubusercontent.com/monosans/proxy-list/main/proxies/http.txt",
    "http://proxy1.bf/proxy.txt",
    "https://raw.githubusercontent.com/clarketm/proxy-list/master/proxy-list-raw.txt",
    "https://proxypool.us/api.php?key=7hn6NeIsgvPALdH&extract=http",
    "https://raw.githubusercontent.com/proxy4parsing/proxy-list/main/http.txt",
    "https://raw.githubusercontent.com/ALIILAPRO/Proxy/main/http.txt",
    "https://ab57.ru/downloads/proxylist.txt",
    "https://raw.githubusercontent.com/prxchk/proxy-list/main/http.txt",
    "https://raw.githubusercontent.com/ShiftyTR/Proxy-List/master/http.txt",
    "https://raw.githubusercontent.com/officialputuid/KangProxy/KangProxy/http/http.txt",
    "https://raw.githubusercontent.com/jetkai/proxy-list/main/online-proxies/txt/proxies-http.txt",
    "https://raw.githubusercontent.com/B4RC0DE-TM/proxy-list/main/HTTP.txt",
    "https://api.openproxylist.xyz/http.txt",
    "https://multiproxy.org/txt_all/proxy.txt",
    "http://hack-hack.chat.ru/proxy/p4.txt",
    "https://github.com/themiralay/Proxy-List-World/raw/master/data.txt",
    "https://raw.githubusercontent.com/Tsprnay/Proxy-lists/master/proxies/all.txt",
    "https://github.com/im-razvan/proxy_list/raw/main/http.txt",
    "https://github.com/TuanMinPay/live-proxy/raw/master/all.txt",
    "https://github.com/andigwandi/free-proxy/raw/main/proxy_list.txt",
    "https://github.com/ALIILAPRO/Proxy/raw/main/http.txt",
    "https://github.com/MrMarble/proxy-list/raw/main/all.txt",
    "https://raw.githubusercontent.com/opsxcq/proxy-list/master/list.txt",
    "https://raw.githubusercontent.com/saisuiu/Lionkings-Http-Proxys-Proxies/main/cnfree.txt",
    "https://raw.githubusercontent.com/monosans/proxy-list/main/proxies/socks4.txt",
    "https://raw.githubusercontent.com/monosans/proxy-list/main/proxies_anonymous/socks4.txt",
    "https://raw.githubusercontent.com/jetkai/proxy-list/main/online-proxies/txt/proxies-socks4.txt",
    "https://raw.githubusercontent.com/MuRongPIG/Proxy-Master/main/socks5.txt",
    "https://raw.githubusercontent.com/Zaeem20/FREE_PROXIES_LIST/master/socks5.txt",
    "https://raw.githubusercontent.com/gitrecon1455/ProxyScraper/main/proxies.txt",
    "https://raw.githubusercontent.com/prxchk/proxy-list/main/socks5.txt",
    "https://raw.githubusercontent.com/ALIILAPRO/Proxy/main/socks5.txt",
    "https://spys.me/socks.txt",
    "https://github.com/BreakingTechFr/Proxy_Free/blob/main/proxies/http.txt",
    "https://raw.githubusercontent.com/hookzof/socks5_list/master/proxy.txt",
    "https://raw.githubusercontent.com/notcoderguy/geoproxy-db/main/HTTP.txt",
    "https://raw.githubusercontent.com/zloi-user/hideip.me/main/socks5.txt",
    "https://raw.githubusercontent.com/hookzof/socks5_list/master/proxy.txt",
    "https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/socks5.txt",
    "https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/socks4.txt",
    "https://raw.githubusercontent.com/TheSpeedX/SOCKS-List/master/http.txt",
    "https://raw.githubusercontent.com/saisuiu/Lionkings-Http-Proxys-Proxies/main/free.txt",
    "https://raw.githubusercontent.com/caliphdev/Proxy-List/master/http.txt",
    "https://raw.githubusercontent.com/proxylist-to/proxy-list/main/http.txt",
    "https://raw.githubusercontent.com/tuanminpay/live-proxy/master/http.txt",
    "https://raw.githubusercontent.com/Anonym0usWork1221/Free-Proxies/main/proxy_files/https_proxies.txt",
    "https://raw.githubusercontent.com/ShiftyTR/Proxy-List/master/proxy.txt",
    "http://atomintersoft.com/proxy_list_port_80",
    "http://atomintersoft.com/proxy_list_domain_org",
    "http://atomintersoft.com/proxy_list_port_3128",
    "http://vipprox.blogspot.com/p/blog-page_7.html",
    "http://alexa.lr2b.com/proxylist.txt",
    "http://free-ssh.blogspot.com/feeds/posts/default",
    "http://browse.feedreader.com/c/Proxy_Server_List-1/449196259",
    "http://proxyfirenet.blogspot.com/",
    "https://www.javatpoint.com/proxy-server-list",
    "https://openproxy.space/list/http",
    "http://proxydb.net/",
    "http://olaf4snow.com/public/proxy.txt",
    "http://westdollar.narod.ru/proxy.htm",
    "https://openproxy.space/list/socks4",
    "https://openproxy.space/list/socks5",
    "http://tomoney.narod.ru/help/proxi.htm",
    "http://sergei-m.narod.ru/proxy.htm",
    "http://rammstein.narod.ru/proxy.html",
    "http://greenrain.bos.ru/R_Stuff/Proxy.htm",
    "http://inav.chat.ru/ftp/proxy.txt",
    "http://atomintersoft.com/transparent_proxy_list",
    "http://atomintersoft.com/anonymous_proxy_list",
    "http://atomintersoft.com/high_anonymity_elite_proxy_list",
    "https://raw.githubusercontent.com/yuceltoluyag/GoodProxy/main/raw.txt",
    "https://raw.githubusercontent.com/ShiftyTR/Proxy-List/master/https.txt",
    "https://api.proxyscrape.com/?request=displayproxies&proxytype=http",
    "http://rootjazz.com/proxies/proxies.txt",
    "https://proxy-spider.com/api/proxies.example.txt",
    "https://raw.githubusercontent.com/jetkai/proxy-list/main/online-proxies/txt/proxies.txt",
    "https://api.proxyscrape.com/v2/?request=getproxies&protocol=http&timeout=10000&country=all&ssl=all&anonymity=anonymous",
    "http://worm.rip/http.txt",
    "https://proxyspace.pro/http.txt",
     "https://sunny9577.github.io/proxy-scraper/generated/http_proxies.txt",
    "https://proxyspace.pro/https.txt",
    "https://raw.githubusercontent.com/aslisk/proxyhttps/main/https.txt",
    "https://raw.githubusercontent.com/proxy4parsing/proxy-list/main/http_old.txt",
    "https://www.proxy-list.download/api/v1/get?type=https",
    "https://raw.githubusercontent.com/elliottophellia/yakumo/master/results/http/global/http_checked.txt",
    "https://raw.githubusercontent.com/officialputuid/KangProxy/KangProxy/https/https.txt",
    "https://raw.githubusercontent.com/rdavydov/proxy-list/main/proxies/http.txt",
    "https://raw.githubusercontent.com/rdavydov/proxy-list/main/proxies_anonymous/http.txt",
    "https://raw.githubusercontent.com/zevtyardt/proxy-list/main/http.txt",
    "https://sunny9577.github.io/proxy-scraper/proxies.txt",
    "https://api.openproxylist.xyz/socks4.txt",
    "https://proxyspace.pro/socks4.txt",
    "https://raw.githubusercontent.com/ShiftyTR/Proxy-List/master/socks4.txt",
    "https://raw.githubusercontent.com/roosterkid/openproxylist/main/SOCKS4_RAW.txt",
    "https://raw.githubusercontent.com/mmpx12/proxy-list/master/socks4.txt",
    "https://raw.githubusercontent.com/B4RC0DE-TM/proxy-list/main/SOCKS4.txt",
    "https://raw.githubusercontent.com/rdavydov/proxy-list/main/proxies/socks4.txt",
    "https://raw.githubusercontent.com/rdavydov/proxy-list/main/proxies_anonymous/socks4.txt",
    "https://raw.githubusercontent.com/zevtyardt/proxy-list/main/socks4.txt",
    "https://raw.githubusercontent.com/MuRongPIG/Proxy-Master/main/socks4.txt",
    "https://raw.githubusercontent.com/Zaeem20/FREE_PROXIES_LIST/master/socks4.txt",
    "https://raw.githubusercontent.com/prxchk/proxy-list/main/socks4.txt",
    "https://raw.githubusercontent.com/ALIILAPRO/Proxy/main/socks4.txt",
    "https://raw.githubusercontent.com/zloi-user/hideip.me/main/socks4.txt",
    "https://raw.githubusercontent.com/B4RC0DE-TM/proxy-list/main/SOCKS5.txt",
    "https://raw.githubusercontent.com/mmpx12/proxy-list/master/socks5.txt",
    "https://api.openproxylist.xyz/socks5.txt",
    "https://proxyspace.pro/socks5.txt",
    "https://raw.githubusercontent.com/monosans/proxy-list/main/proxies/socks5.txt",
    "https://raw.githubusercontent.com/monosans/proxy-list/main/proxies_anonymous/socks5.txt",
    "https://raw.githubusercontent.com/ShiftyTR/Proxy-List/master/socks5.txt",
    "https://raw.githubusercontent.com/jetkai/proxy-list/main/online-proxies/txt/proxies-socks5.txt",
    "https://raw.githubusercontent.com/roosterkid/openproxylist/main/SOCKS5_RAW.txt",
    "https://raw.githubusercontent.com/rdavydov/proxy-list/main/proxies/socks5.txt",
    "https://raw.githubusercontent.com/rdavydov/proxy-list/main/proxies_anonymous/socks5.txt",
    "https://raw.githubusercontent.com/zevtyardt/proxy-list/main/socks5.txt",
    "https://raw.githubusercontent.com/zloi-user/hideip.me/main/socks5.txt",
    "https://raw.githubusercontent.com/jetkai/proxy-list/main/online-proxies/txt/proxies-https.txt",
    "https://raw.githubusercontent.com/RealCalumPlays/Proxy-Lists/main/allproxies.txt",
    "https://proxyspace.pro/archive_http.txt",
    "http://magical-goat.glitch.me/proxy.txt",
    "https://raw.githubusercontent.com/Alex877-xmr/PROXY-List/master/http.txt",
    "https://raw.githubusercontent.com/yemixzy/proxy-list/main/proxies/http.txt",
    "https://raw.githubusercontent.com/fahimscirex/proxybd/master/proxylist/http.txt",
    "https://raw.githubusercontent.com/officialputuid/KangProxy/KangProxy/xResults/old-data/Proxies.txt",
    "https://raw.githubusercontent.com/officialputuid/KangProxy/KangProxy/xResults/old-data/RAW.txt",
    "https://raw.githubusercontent.com/shiftytr/proxy-list/master/proxy.txt",
    "https://raw.githubusercontent.com/hendrikbgr/Free-Proxy-Repo/master/proxy_list.txt",
    "https://raw.githubusercontent.com/almroot/proxylist/master/list.txt",
    "https://raw.githubusercontent.com/saisuiu/uiu/main/free.txt",
    "https://www.proxy-list.download/api/v1/get?type=http",
    "https://raw.githubusercontent.com/hookzof/socks5_list/master/proxy.txt",
    "https://raw.githubusercontent.com/ProxyScraper/ProxyScraper/main/http.txt",
    "https://raw.githubusercontent.com/ProxyScraper/ProxyScraper/main/socks4.txt",
    "https://raw.githubusercontent.com/ProxyScraper/ProxyScraper/main/socks5.txt",
    "https://raw.githubusercontent.com/NotUnko/autoproxies/main/proxies/https",
    "https://raw.githubusercontent.com/NotUnko/autoproxies/main/proxies/socks4",
    "https://raw.githubusercontent.com/NotUnko/autoproxies/main/proxies/socks5",
]

function parseProxies(proxies) {
    const proxyPattern = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}:\d{1,5}/g;
    const proxyList = proxies.match(proxyPattern) || [];
    return proxyList ;
}

function deleteDuplicateProxies(proxies) {
    const keys = {};
    const list = [];
    proxies.forEach(entry => {
        if (!keys[entry]) {
            keys[entry] = true;
            list.push(entry );
        }
    });
    return list;
}


const WaitCheck_Url = [];


Git_HubUrl.forEach(async url => {
    const headers = {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'User-Agent':'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36',
        'Priority': 'u=0, i',
        'Sec-Ch-Ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
        'Sec-Ch-Ua-Mobile': '?1',
        'Sec-Ch-Ua-Platform':'"Android"',
        'Sec-Fetch-Dest' :'document',
        'Sec-Fetch-Mode':'navigate',
        'Sec-Fetch-Site': ' none',
        'Sec-Fetch-User': '?1',
        'Upgrade-Insecure-Requests':'1',
    };

    try {
        const response = await axios.get(url, {

            headers: headers,  
            timeout: 10000  // 设置超时时间为10秒
        });
        console.log(`Status code for ${url}: ${response.status}`);
        if (response.status === 200) {
            const proxies = response.data; // Assuming the proxies are in the response data
            let foundProxies = parseProxies(proxies);
            foundProxies.map(proxy => {
                return proxy ;
            }).forEach(proxy => {
                if (proxy) {
                    WaitCheck_Url.push({ proxies: proxy });
                }
            });
        }

    } catch (error) {
         // console.error(`Error while making request to ${url}`);
    }

    const uniqueProxies = deleteDuplicateProxies(WaitCheck_Url.map(entry => entry.proxies));
    // Save to a local txt file
    fs.writeFileSync('proxy.txt', uniqueProxies.join('\n'));
});

