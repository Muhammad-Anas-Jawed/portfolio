/** @type {import('next').NextConfig} */
const nextConfig = {
  // Hosting export ke liye; normal npm run dev/build pehle ki tarah chalte hain.
  output: process.env.PORTFOLIO_STATIC_EXPORT === "1" ? "export" : undefined,
};

export default nextConfig;
