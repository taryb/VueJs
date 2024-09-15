// functions/src/index.ts

import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";


// Example: Create an HTTP function
export const helloWorld = onRequest((req, res) => {
  logger.info("Hello from Firebase!");
  res.send("Hello from Firebase!");
});
