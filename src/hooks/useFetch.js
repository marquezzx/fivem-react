import { Config } from "../config/config";

export function useFetch(action, payload) {
  const url = `https://${Config.resName}/${action}`
  const requestOptions = {
    method: "POST",
  };
  if (payload) {
    requestOptions.body = JSON.stringify(payload);
  }
  return fetch(url, requestOptions);
}