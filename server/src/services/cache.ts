import * as mongoose from'mongoose';
import * as redis from'redis';

const client = redis.createClient({url: 'redis://127.0.0.1:6379'});
client.connect()

const exec = mongoose.Query.prototype.exec;

interface Options {
    key: string
}


// @ts-ignore
mongoose.Query.prototype.cache = function(options : Options | string = {}) {
  this.useCache = true;
  this.hashKey = JSON.stringify((options as Options).key || '');

  return this;
};

mongoose.Query.prototype.exec = async function() {

  if (!this.useCache) {
    return exec.apply(this, arguments);
  }

  const key = JSON.stringify(
    Object.assign({}, this.getQuery(), {
      collection: this.mongooseCollection.name
    })
  );

  // See if we have a value for 'key' in redis
  const cacheValue = await client.hGet(this.hashKey, key);

  // If we do, return that
  if (cacheValue) {
    const doc = JSON.parse(cacheValue);
    return Array.isArray(doc)
      ? doc.map(d => new this.model(d))
      : new this.model(doc);
  }

  // Otherwise, issue the query and store the result in redis
  const result = await exec.apply(this, arguments);

  client.hSet(this.hashKey, key, JSON.stringify(result));
  return result;
};

module.exports = {
  clearHash(hashKey) {
    client.del(JSON.stringify(hashKey));
  }
};
