const withVideos = require('next-videos');

const config = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
};

module.exports = withVideos(config);
