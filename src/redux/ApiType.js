import apiInstance from "../apiConfig";

import React from "react";
export const Url = apiInstance;

export const SEARCH_STATION = apiInstance + "v1/searchStation";
export const SEARCH_TRAIN = apiInstance + "v1/searchTrain";
export const BETWEEN_TRAIN = apiInstance + "v3/trainBetweenStations";
export const LIVE_STATUS = apiInstance + "v1/liveTrainStatus";
export const LIVE_SCHEDULE = apiInstance + "v1/getTrainSchedule";
export const PNR_STATUS = apiInstance + "v3/getPNRStatus";
export const SEAT_AVAILABILITY = apiInstance + "v1/checkSeatAvailability";

console.log(SEAT_AVAILABILITY);

const ApiType = () => {
  return <div>ApiType</div>;
};

export default ApiType;
