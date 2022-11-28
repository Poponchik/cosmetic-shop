import * as redis from "redis";

const client = redis.createClient({ url: "redis://127.0.0.1:10001" });


client.connect();

export async function cache(query, userId = "") {
  const hashKey = JSON.stringify(userId);

  const key = JSON.stringify(
    Object.assign({}, query.getQuery(), {
      collection: query.mongooseCollection.name,
    })
  );

  const cacheValue = await client.hGet(hashKey, key);
  if (cacheValue) {
    const doc = JSON.parse(cacheValue);
    return Array.isArray(doc)
      ? doc.map((d) => new query.model(d))
      : new query.model(doc);
  }

  const result = await query.exec();
  client.hSet(hashKey, key, JSON.stringify(result));
  return result;
}

export function clearHash(hashKey, authorized = true) {
  if (!authorized) {
    hashKey = "";
  }
  client.del(JSON.stringify(hashKey));
}
