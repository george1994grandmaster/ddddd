import { useDispatch, useSelector } from 'react-redux';


interface Props {
  params: {
    productId: any;
  };
}

export default function Product({ params }: Props) {
  return (
    <>
     <h1>product stranica</h1>
     <p>{params.productId}</p>
    </>
  )
}