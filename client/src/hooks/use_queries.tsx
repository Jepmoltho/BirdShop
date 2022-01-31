import { useState, useEffect } from "react";
import { IProduct, IBasket, IUser, ICategory } from "../types/types";
import axios from "axios";

export const useGetProducts = () => {
  //The fetcher component for products
  const [data, setData] = useState<IProduct[]>([]);

  const getData = async () => {
    const response = await axios.get("http://localhost:9000/products");
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return data;
};

export const useGetCategories = () => {
  const [data, setData] = useState<ICategory[]>([]);

  const getData = async () => {
    const response = await axios.get("http://localhost:9000/category");
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return data;
};

export const useGetUsers = () => {
  const [data, setUsers] = useState<IUser[]>();

  const getUsers = async () => {
    const response = await axios.get("http://localhost:9000/user/");
    setUsers(response.data);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return data;
};
export const useGetBasket = (id: number) => {
  const [data, setBasket] = useState<IBasket>({ id, products: [] });

  const getBasket = async () => {
    const response = await axios.get("http://localhost:9000/baskets/" + id);
    setBasket(response.data);
  };

  useEffect(() => {
    getBasket();
  }, []);
  return data;
};

export const useGetBaskets = () => {
  const [data, setBasket] = useState<IBasket[]>();

  const getBasket = async () => {
    const response = await axios.get("http://localhost:9000/baskets/");
    setBasket(response.data);
  };

  useEffect(() => {
    getBasket();
  }, []);
  return data;
};

export const useGetProduct = (id: string) => {
  const [data, setProduct] = useState<IProduct>({});

  const getProduct = async () => {
    const response = await axios.get("http://localhost:9000/products/" + id);
    setProduct(response.data);
  };

  useEffect(() => {
    getProduct();
  }, []);
  return data;
};
