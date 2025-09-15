module.exports = {
  reactStrictMode: false,
  images: {
    domains: [],
    unoptimized: true
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]'
      }
    });
    return config;
  },
}
