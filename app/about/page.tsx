"use client";

import Link from 'next/link';
import Image from 'next/image'

interface DataItem {
  id: number;
  title: string;
  src: string;
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
      {data.map((item) => (
        
        <Link href={`/selectedProduct/${item.id}`} key={item.id}>
          <span>ID: {item.id}</span>
          <span>Title: {item.title}</span>
          <Image
            src={item.src}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </Link>
      ))}
    </div>
  );
}