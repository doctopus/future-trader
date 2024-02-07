import {getProfitService} from "../services/profit.service";

const profitCompute = (price) => {
    return async (dispatch) => {
        const profit = await getProfitService (price)
        dispatch({type:"xxx", data: profit})
    }
};
 export { profitCompute }
