import axios from "axios";
import { Config } from "../config/config";

export function useFetch(action, args) {
  const response = args || undefined;
  return axios.post("https://"+Config.resName+"/"+action, JSON.stringify(response));
}