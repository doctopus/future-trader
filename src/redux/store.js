import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
reducer: {
    ES: esReducer,
    NIFTY: niftyReducer,
}
})

export {store};
