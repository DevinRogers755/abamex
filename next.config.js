/** @type {import('next').NextConfig} */
const nextConfig = {output: 'export', basePath: '/abamex', images: {
    loader: "akamai",
    path: "/",
  },
}

module.exports = nextConfig
