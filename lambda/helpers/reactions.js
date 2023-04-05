exports.reactions = {
  like: 'like',
  insightful: 'insightful',
  curious: 'curious',
};

/**
 * Key schema for storing reactions
 */
exports.getKeySchema = ({ id }) => `post:${id}:reactions`;

/**
 * Create data for a reaction
 */
exports.composeData = ({ reaction }) => `${reaction}`;
