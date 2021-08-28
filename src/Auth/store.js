import { createStore } from "redux";
import { authReducer } from "./reducer";

export const store = createStore(authReducer);
