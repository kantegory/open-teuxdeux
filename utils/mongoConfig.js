const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'open-teuxdeux';

class MongoConfig {
	constructor(url, dbName, MongoClient) {
		this.url = url;
		this.dbName = dbName;
		this.MongoClient = MongoClient;
	}
}

const Config = new MongoConfig(url, dbName, MongoClient);

module.exports = Config;
