import Eventlytics from "eventlytics";

import { PRODUCTION } from "./constants";

const eventlytics = new Eventlytics(
  process.env.PROJECT_TOKEN ?? "",
  process.env.EVENTLYTICS_API_KEY ?? "",
  process.env.USER_TOKEN ?? ""
);

const track = (eventName, props) => {
  if (process.env.STAGE !== PRODUCTION) return; // tracking only for production
  eventlytics.track(eventName, {
    ...props,
  });
};

export const Analytics = { track };
