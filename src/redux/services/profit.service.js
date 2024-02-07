import axios from 'axios';

const getProfitService = () => {
    return axios
        .get('http://localhost:3000/profit')
        .then((res) => {
            console.log(res);
            return (res);
        })
};

export { getProfitService };