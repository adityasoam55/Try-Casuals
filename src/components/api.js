import axios from 'axios';

export function getProductWomensDresses(){
    return axios.get("https://dummyjson.com/products/category/womens-dresses").then(resp => resp.data.products);
}

export function getAllProducts(){
    return axios.get("https://dummyjson.com/products").then(resp => resp.data.products);
}

export function getProductCategoryList(){
    return axios.get("https://dummyjson.com/products/categories").then(resp => resp.data);
}

export function getProductByCategory(category) {
    return axios
        .get(`https://dummyjson.com/products/category/${category}`)
        .then((resp) => resp.data.products) // Extract products from response
        .catch((error) => {
            console.error("Error fetching category products:", error);
            throw error; // Re-throw the error for further handling if needed
        });
}
