"use client";

interface DataItem {
  id: number;
  title: string;
}

interface DataItems {
  data: DataItem[]
}


import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDatas } from '../redux/testSlice'; 
import { selectAllProducts } from '../redux/testSlice'; 

export default function About() {
  const dispatch = useDispatch();
  const data = useSelector(selectAllProducts);
   
  const product = "laptops"; 
  const dataCount = 3;
  

  useEffect(() => {
    dispatch(fetchDatas({product, dataCount}) as any);
  }, [dispatch]);

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <span>ID: {item.id}</span>
          <span>Title: {item.title}</span>
        </div>
      ))}
    </div>
  );
}