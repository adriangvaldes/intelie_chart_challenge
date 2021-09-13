import { EventDataReal } from "../hooks/useChart"

export const dataSeparatorOsBrowser = (os: string, browser: string, datas: EventDataReal[]) => {
  let dataMinResponseTime: Number[] = [];
  let dataMaxResponseTime: Number[] = [];

  for (const data of datas) {
    if(data.os === os && data.browser === browser) {
      dataMinResponseTime.push(data.min_response_time)
      dataMaxResponseTime.push(data.max_response_time)
    }
  }
  return {
    dataMinResponseTime,
    dataMaxResponseTime,
  }
}