import {Action} from "redux";

export interface IAction extends Action {
  payload: any;
}

export interface IAPIResponse<T> {
  data: T;
}
