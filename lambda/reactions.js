/**
 * GET endpoint to retrieve reactions
 */
const Joi = require("joi")
const { hgetallAsync } = require("./helpers/redis")
const { successResponse, errorResponse } = require("./helpers")
const { catchEvents, reportEvent } = require("./helpers/sentry")
const { getKeySchema } = require("./helpers/reactions")

module.exports.handler = catchEvents(async (event, _context, callback) => {
  const schema = Joi.object({
    id: Joi.string().required(),
  })

  try {
    const { id } = await schema.validateAsync(event.queryStringParameters)
    const { like = 0, insightful = 0, curious = 0 } =
      (await hgetallAsync(getKeySchema({ id }))) || {}

    return callback(null, successResponse(200, { like, insightful, curious }))
  } catch (error) {
    await reportEvent(error)
    return callback(null, errorResponse(400))
  }
})
