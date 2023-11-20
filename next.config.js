/** @type {import('next').NextConfig} */
module.exports = {
    images: {
      remotePatterns: [
       
        {
          protocol: 'http',
          hostname:  "res.cloudinary.com",
          port: '',
          pathname: '/dpavzzjnv/**',
        }
      ],
    },
   
    eslint: {
      // this allows production builds to successfully complete even with es lint errors
      ignoreDuringBuilds: true
    }
  }
