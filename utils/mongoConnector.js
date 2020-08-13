const configParser = require('./configParser');
const MongoClient = require('mongodb').MongoClient;

const confPath = '../conf/config.ini';
const purpose = 'database';

const config = configParser(confPath, purpose);

const url = config.url;
const dbName = config.name;

class MongoConnector {
  constructor(url, dbName, MongoClient) {
    this.url = url;
    this.dbName = dbName;
    this.MongoClient = MongoClient;
  }
}

const Connector = new MongoConnector(url, dbName, MongoClient);

module.exports = Connector;
