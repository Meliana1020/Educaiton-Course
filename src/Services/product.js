import axios from "axios";

export const getProduct = () => {
    axios
    .get("https://67070bb5a0e04071d228fc63.mockapi.io/education/course/product")
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })
};

