/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // 如果不需要特定域名，可以清空数组
    unoptimized: false // 建议设置为 false 以优化图像
  },
  // 确保正确的基础路径配置
  basePath: '',
  // 禁用输出导出以使用 Vercel 的服务器功能
  // output: 'standalone', // 删除这行
}

module.exports = nextConfig;