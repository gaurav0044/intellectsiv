import { ApiCaller } from "./api-caller";

export const addAnger = (data:any) => ApiCaller.httpPost(data,"add-anger-limit");

export const getAngerLimit = () => ApiCaller.httpGet("get-anger-limit");