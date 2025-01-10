import { Fragment } from "react";
import { useRouter} from 'next/router';
import Image from "next/image";

import {dummyData} from '@/components/posts/posts-grid';

function PostDetailPage(){
    const router = useRouter();
    const { slug } = router.query;

    // Find the post by slug
    const post = dummyData.find((post) => post.slug === slug);

   
    if(!post)
    {
        return <p>No Posts Found</p>;
    }
    const formatDate = new Date(post.date).toLocaleDateString('en-US',{
        day:'numeric',
        month:'long',
        year:"numeric"
    });
    return <Fragment >
        <title>{post.title}</title>
        <div className='flex flex-col justify-center items-center p-10'>
          <h1 className="font-extrabold text-3xl p-3">{post.title}</h1>
          <div className="w-96 h-96">
          <Image
                src={`/images/${post.image}`}
                alt={post.title}
                width={250}
                height={250}
                layout="responsive"
                className="justify-center"
            />
          </div>
            
            <p className="italic text-green-700 font-extrabold ">{formatDate}</p>
            <p className="p-3 text-justify text-xl">{post.excerpt}</p>
            </div>
    </Fragment>
}
export default PostDetailPage;