module.exports = {
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/' },
      '/analyse': { page: '/analyse' },
      '/quellen': { page: '/quellen' },
      '/Machine.0': { page: '/Machine.0' },
      '/Machine.1': { page: '/Machine.1' },
      '/Machine.3': { page: '/Machine.3' },
    }
  }
}
