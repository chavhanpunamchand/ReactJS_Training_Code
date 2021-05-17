import {createStore} from "redux";
import rootReducer from "./reducer/index"
// import changeTheNumber from "./reducer/updown";

const store= createStore(rootReducer);

export default store;