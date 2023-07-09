const middleware = {}

middleware['analytics'] = require('..\\middleware\\analytics.js')
middleware['analytics'] = middleware['analytics'].default || middleware['analytics']

middleware['auth'] = require('..\\middleware\\auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

export default middleware
