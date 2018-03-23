exports.DATABASE_URL = 
	process.env.DATABASE_URL ||
	'mongodb://localhost/words-app'
exports.PORT = process.env.port || 8080
exports.JWT_SECRET = process.env.JWT_SECRET
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '7d'
exports.TEST_DATABASE_URL = 'mongodb://localhost/test-words-app'