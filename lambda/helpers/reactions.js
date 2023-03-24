exports.reactions = {
  like: 'like',
  insightful: 'insightful',
  curious: 'curious',
};

/**
 * Key schema for storing reactions
 */
exports.getKeySchema = ({ slug }) => `post:${slug}:reactions`;

/**
 * Create data for a reaction
 */
exports.composeData = ({ reaction }) => `${reaction}`;
