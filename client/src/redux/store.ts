import { createStore } from "redux";
import { countReducer } from "./reducers/count";

export const store = createStore(countReducer);
