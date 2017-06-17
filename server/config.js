module.exports = {
	db:'localhost',
	clientSecret: process.env.clientSecret || ' 9642b6417f894666a920d6d19a576344',
	tokenSecret: process.env.tokenSecret || 'Aloha'
}

module.exports = {
  db: process.env.db || 'localhost',
  tokenSecret: process.env.tokenSecret || 'pick a hard to guess string'

};