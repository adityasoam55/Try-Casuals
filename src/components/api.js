import axios from 'axios';

export function getProductByCategory(){
    return axios.get("https://dummyjson.com/products/category/womens-dresses").then(resp => resp.data.products);
}

export function getAllProducts(){
    return axios.get("https://dummyjson.com/products").then(resp => resp.data.products);
}

export function getProductCategoryList(){
    return axios.get("https://dummyjson.com/products/categories").then(resp => resp.data);
}

export function getBeautyProducts(){
    return axios.get("https://dummyjson.com/products/category/beauty").then(resp => resp.data.products);
}