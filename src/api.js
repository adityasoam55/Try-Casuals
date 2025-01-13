import axios from 'axios';

export function getProductByCategory(){
    return axios.get("https://dummyjson.com/products/category/womens-dresses").then(resp => resp.data.products);
}