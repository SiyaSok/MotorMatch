/** @format */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.volkswagen.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "img-ik.cars.co.za",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.toyota.co.za",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.ford.co.za",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "example.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
