import {configureStore} from "@reduxjs/toolkit";
import {esReducer} from "./reducers/esReducer";
import {niftyReducer} from "./reducers/niftyReducer";

const store = configureStore({
reducer: {
    ES: esReducer,
    NIFTY: niftyReducer,
}
})

export {store};
