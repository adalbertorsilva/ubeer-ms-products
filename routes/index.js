const requireAll = require('require-all')

module.exports = (app) => {
  const routes = requireAll(__dirname)

  Object.keys(routes).forEach(key => {
    if (key !== 'index') {
      routes[key] = routes[key](app)
    }
  })

  return routes
}