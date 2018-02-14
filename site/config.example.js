const commonConfig = {
  isProduction: false,
  port: 3000,
  apiPath: 'http://localhost:8080',
};

const environmentConfig = {
  development: {},
  staging: {
    isProduction: true,
    port: 20000,
    apiPath: '___________________________',
  },
  production: {
    isProduction: true,
    port: 20000,
    apiPath: '___________________________',
  }
};

module.exports = Object.assign(
  commonConfig,
  environmentConfig[process.env.ENV || process.env.NODE_ENV || 'development']
);