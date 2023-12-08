/*import { NextResponse } from "next/server";
import { posts } from "./posts";

export async function GET(req: Request) {
  let currentPosts = posts;
  const { searchParams } = new URL(req.url);
  const categoryName = searchParams.get('category');
  
  if (categoryName) {
    const categoryBlock = currentPosts.find((post: any) => categoryName in post);

    if (categoryBlock) {
      for (const key in categoryBlock) {
        const selectedCategory = categoryBlock[key as keyof typeof categoryBlock];
        return NextResponse.json(selectedCategory);
      }
    }
  }

 // return NextResponse.error(new Error('Category or data not found'));
}*/



import { NextResponse } from "next/server";
import { posts } from "./posts";

export async function GET(req: Request) {
  let currentPosts = posts;
  const { searchParams } = new URL(req.url);
  const categoryName = searchParams.get('category');
  const dataCount = searchParams.get('dataCount');
 
  
  if (categoryName) {
    const categoryBlock = currentPosts.find((post: any) => categoryName in post);
    for (const key in categoryBlock) {
      const selectedCategory = categoryBlock[key as keyof typeof categoryBlock]?.slice(0, dataCount as any);
      return NextResponse.json(selectedCategory);
    }
  }
}

