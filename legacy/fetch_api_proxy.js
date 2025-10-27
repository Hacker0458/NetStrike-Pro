#!/usr/bin/env node

/**
 * NetStrike Pro - 免费代理 API 获取工具
 * 
 * 功能：从免费代理 API 获取最新代理列表
 * 
 * ⚠️ 法律声明：本工具仅供合法的安全测试使用
 */

const axios = require('axios');
const fs = require('fs');

// 免费代理 API 列表
const API_SOURCES = [
    {
        name: 'ZenPing 免费代理',
        url: 'http://zenping.nttwl.cn/index.php?api',
        note: '注意：此 API 可能不长期有效，请定期检查'
    },
    // 可以在这里添加更多免费代理 API
];

console.log('🚀 NetStrike Pro - 免费代理 API 获取工具\n');

async function fetchProxiesFromAPI() {
    let allProxies = [];
    
    for (const source of API_SOURCES) {
        try {
            console.log(`📥 正在从 ${source.name} 获取代理...`);
            console.log(`   URL: ${source.url}`);
            
            const response = await axios.get(source.url, {
                timeout: 10000,
                headers: {
                    'User-Agent': 'NetStrike-Pro/2.0'
                }
            });
            
            if (response.data) {
                const proxies = response.data
                    .split('\n')
                    .map(line => line.trim())
                    .filter(line => line && line.match(/^\d+\.\d+\.\d+\.\d+:\d+$/));
                
                allProxies = allProxies.concat(proxies);
                console.log(`   ✅ 成功获取 ${proxies.length} 个代理`);
                
                if (source.note) {
                    console.log(`   ⚠️  ${source.note}`);
                }
            }
        } catch (error) {
            console.log(`   ❌ 获取失败: ${error.message}`);
        }
        
        console.log('');
    }
    
    // 去重
    allProxies = [...new Set(allProxies)];
    
    // 保存到文件
    const filename = 'proxies_api.txt';
    fs.writeFileSync(filename, allProxies.join('\n'));
    
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`✅ 总计获取 ${allProxies.length} 个唯一代理`);
    console.log(`✅ 已保存到: ${filename}`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('');
    console.log('💡 使用提示:');
    console.log('   - API 代理可能不稳定，建议使用前筛选');
    console.log('   - 可以使用 超高速筛选.py 进行筛选');
    console.log('   - 建议定期重新获取最新代理');
    console.log('');
    console.log('📝 使用示例:');
    console.log('   node floodernew.js GET "https://target.com" 120 16 90 proxies_api.txt');
}

// 执行
fetchProxiesFromAPI().catch(err => {
    console.error('❌ 发生错误:', err.message);
    process.exit(1);
});

