/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  // 确保正确的基础路径配置
  basePath: '',
  // 禁用输出导出以使用 Vercel 的服务器功能
  // output: 'standalone', // 删除这行
}

module.exports = nextConfig

