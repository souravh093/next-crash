import { notFound } from 'next/navigation';
import React from 'react'

const BlogDetails = ({params}) => {
    const {id} = params;

    if(id === "3") {
        notFound();
    }
  return (
    <div className='mt-10'>the blog id is {id}</div>
  )
}

export default BlogDetails