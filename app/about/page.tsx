"use client";

import Image from 'next/image'
import mercedes from '../../img/mercedes.png'

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
      {data.map((item, index) => (
        <div key={index}>
          <span>ID: {item.id}</span>
          <span>Title: {item.title}</span>
          <Image
            src='https://finder.porsche.com.tr/Assets/img/homeModel__911.png'
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <Image
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7M5v7KGkDwEMzbFcCTggGoi_xvAaSOTfMA_FQKgtTM771mlTXx1OyQAFjGkfJKx0S7DU&usqp=CAU'
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      ))}
    </div>
  );
}