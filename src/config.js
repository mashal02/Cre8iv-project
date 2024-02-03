// src/config.js
const config = {
    development: {
      serviceUrl: 'https://localhost:3001/',
    },
/*     production: {
      serviceUrl: 'https://your-production-backend-url/',
    },
 */  
};
const getCurrentConfig = () => {
  console.log("Hello1")
  console.log(process.env.NODE_ENV);

  return process.env.NODE_ENV === 'production' ? config.production : config.development;
};

export default getCurrentConfig;
