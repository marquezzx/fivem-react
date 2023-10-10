import { Config } from "../config/config";

export async function useFetch(action, payload, awaitResponse) {
  const url = `https://${Config.resName}/${action}`;
  const requestOptions = {
    method: "POST",
  };
  if (payload) {
    requestOptions.body = JSON.stringify(payload);
  }
  if (awaitResponse) {
    const resp = await fetch(url, requestOptions);
    return resp.json();
  } else {
    return fetch(url, requestOptions)
  }
}
