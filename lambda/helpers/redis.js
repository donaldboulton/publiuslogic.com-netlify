const { createClient } = require('redis');
const { promisify } = require('util');
const { catchEvents, reportEvent } = require('./sentry');

var client = createClient ({
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_HOST,
    password: process.env.REDIS_PASSWORD,
    tls: {},
});

client.on(
  'ready',
  catchEvents(async () => {
    await reportEvent('Redis client is ready');
  }),
);

client.on(
  'error',
  catchEvents(async error => {
    await reportEvent(error);
  }),
);

// Convert sync commands into async to enable the usage of "await"
// https://github.com/NodeRedis/node-redis#promises

/**
 * GET command
 */
exports.getAsync = promisify(client.get).bind(client);

/**
 * HGETALL command
 */
exports.hgetallAsync = promisify(client.hgetall).bind(client);

/**
 * HINCRBY command
 */
exports.hincrbyAsync = promisify(client.hincrby).bind(client);

/**
 * ZINCRBY command
 */
exports.zincrbyAsync = promisify(client.zincrby).bind(client);

/**
 * ZREVRANGEBYSCORE command
 * 
 * Get, for example, the most liked 5 posts.
 * ZREVRANGEBYSCORE reaction:like +INF -INF withscores LIMIT 0 5
 * await zrevrangebyscoreAsync(`reaction:${reaction}`, '+INF', '-INF', 'withscores', 'LIMIT', 0, 5);
 */
exports.zrevrangebyscoreAsync = promisify(client.zrevrangebyscore).bind(client);

exports.client = client;
