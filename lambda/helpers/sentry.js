const Sentry = require('@sentry/node');
const { SENTRY_DSN } = process.env;

let sentryInitialized = false;

if (SENTRY_DSN) {
  Sentry.init({
    dsn: SENTRY_DSN,
    release: process.env.COMMIT_REF,
    environment: process.env.NODE_ENV,
  });
  sentryInitialized = true;
}

async function reportEvent(msg) {
  if (!sentryInitialized) return;

  if (typeof msg === 'string') {
    Sentry.captureMessage(msg);
  } else {
    Sentry.captureException(msg);
  }

  await Sentry.flush();
}

function catchEvents(handler) {
  return async function(event, context, callback) {
    // Make sure AWS doesn't wait for an empty event loop, as that
    // can break things with Sentry
    if(context) context.callbackWaitsForEmptyEventLoop = false;
    try {
      return await handler.call(this, ...arguments);
    } catch (e) {
      // Catches sync errors & promise rejections, because we're async
      await reportEvent(e, event);
      throw e;
    }
  };
}

module.exports = { catchEvents, reportEvent };
