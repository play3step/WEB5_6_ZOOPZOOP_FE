import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: __dirname
  },
  images: {
    domains: ['k.kakaocdn.net']
  }
}

export default nextConfig
