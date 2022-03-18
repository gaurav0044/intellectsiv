import { ApiCaller } from "./api-caller";

export const addSpending = (data:any) => ApiCaller.httpPost(data,"add-spending-limit");

export const getSpendingLimit = () => ApiCaller.httpGet("get-spending-limit");