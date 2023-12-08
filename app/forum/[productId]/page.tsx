interface Props {
  params: {
    productId: any;
  };
}

export default function ForumId({ params }: Props) {
  return (
    <>
     <h1>forum stranica</h1>
     <p>{params.productId}</p>
    </>
  )
}