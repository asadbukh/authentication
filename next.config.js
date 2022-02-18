/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  // env: {
  //   MONGO_URI:
  //     "mongodb+srv://asadbukhari:syedzada007@cluster0.qsnxm.mongodb.net/asadwebuser?retryWrites=true&w=majority",
  // },
};

module.exports = nextConfig;
