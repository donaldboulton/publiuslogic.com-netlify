import { Redis } from '@upstash/redis'

const redis =
  process.env.UPSTASH_REDIS_REST_TOKEN && process.env.UPSTASH_REDIS_REST_URL && process.env.EMAIL_TO_ID_SECRET
    ? new Redis({
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
        url: process.env.UPSTASH_REDIS_REST_URL,
      })
    : undefined

export default redis
