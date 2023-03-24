/**
 * POST/PATCH endpoint to save a reaction
 */
const Joi = require("joi")
const { hincrbyAsync, zincrbyAsync } = require("./helpers/redis")
const { successResponse, errorResponse } = require("./helpers")
const { catchEvents, reportEvent } = require("./helpers/sentry")
const { reactions, getKeySchema, composeData } = require("./helpers/reactions")

module.exports.handler = catchEvents(async (event, _context, callback) => {
  const data = JSON.parse(event.body)

  const schema = Joi.object({
    id: Joi.string().required(),
    reaction: Joi.string()
      .valid(reactions.like, reactions.insightful, reactions.curious)
      .required(),
  })

  try {
    const { id, reaction } = await schema.validateAsync(data)
    const [hincrby] = await Promise.all([
      hincrbyAsync(getKeySchema({ id }), composeData({ reaction }), 1),
      // A sorted set to track reactions to posts only to be able to get posts with the most Likes, Insightful and Curious reactions.
      zincrbyAsync(`reaction:${reaction}`, 1, `post:${id}`),
    ])

    return callback(
      null,
      successResponse(200, { [reactions[reaction]]: hincrby })
    )
  } catch (error) {
    await reportEvent(error)
    return callback(null, errorResponse(400))
  }
})
