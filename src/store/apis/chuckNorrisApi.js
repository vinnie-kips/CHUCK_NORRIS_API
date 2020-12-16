import axios from "axios";

const apiInstance = axios.create({
  baseURL: "https://api.chucknorris.io/jokes"
});

export const categories = async () => await apiInstance.get(`/categories`);

export const joke = async category =>
  await apiInstance.get(`/random?category=${category}`);
