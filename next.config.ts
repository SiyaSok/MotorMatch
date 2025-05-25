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
      {
        protocol: "https",
        hostname: "www.ferrari.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.tesla.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.hyundai.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.porsche.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "image.blob.ix.co.za",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
