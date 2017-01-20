import { default as GoogleAnalytics } from 'react-ga';
import { GOOGLE_ANALYTICS_TRACKING_ID, GOOGLE_ANALYTICS_COOKIE_DOMAIN } from './constants.js';

// https://github.com/react-ga/react-ga
//
// The cookie domain is so in development the code runs (and we can test it),
// but nothing gets logged.
//
// CHANGE to https://developers.google.com/analytics/devguides/collection/analyticsjs/debugging - sendHitTask
GoogleAnalytics.initialize(GOOGLE_ANALYTICS_TRACKING_ID, {
  gaOptions: {cookieDomain: GOOGLE_ANALYTICS_COOKIE_DOMAIN}
});

export default GoogleAnalytics;
