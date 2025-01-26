import axios from 'axios';

export function getProductByCategory(){
    return axios.get("https://dummyjson.com/products/category/womens-dresses").then(resp => resp.data.products);
}

export function getAllProducts(){
    return axios.get("https://dummyjson.com/products").then(resp => resp.data.products);
}

export function getProductCategoryList(){
    return axios.get("https://dummyjson.com/products/category-list").then(resp => resp.data);
}