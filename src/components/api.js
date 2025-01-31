import axios from 'axios';

export function getProductWomensDresses() {
    return axios.get("https://dummyjson.com/products/category/womens-dresses").then(resp => resp.data.products);
}

export function getAllProducts() {
    return axios.get("https://dummyjson.com/products").then(resp => resp.data.products);
}
export function getProductDetails(id) {
    return axios.get(`https://dummyjson.com/product/${id}`).then(resp => resp.data);
}

export function getProductCategoryList() {
    return axios.get("https://dummyjson.com/products/categories").then(resp => resp.data);
}

export function getProductByCategory(category) {
    const normalizedCategory = category.replace(/%20| /g, '-');

    return axios
        .get(`https://dummyjson.com/products/category/${normalizedCategory}`)
        .then((resp) => resp.data.products)
        .catch((error) => {
            console.error("Error fetching category products:", error);
            throw error; // Re-throw the error for further handling if needed
        });
}
