require('dotenv').config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // ← これを追加！
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT,
  },
};

module.exports = nextConfig;
