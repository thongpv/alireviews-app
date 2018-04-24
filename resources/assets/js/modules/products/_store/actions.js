import api from "../_api";

const getProducts = context => {
    api.fetchProducts
        .then(response => {
            context.commit("PRODUCTS_UPDATED", response);
            console.log(response);
        })
        .catch(errors => console.log(errors));
};

export default {
    getProducts
};
