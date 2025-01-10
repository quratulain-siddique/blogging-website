import PostGrid from "@/components/posts/posts-grid";
import Link from "next/link";
import { useState } from "react";
function AllPosts(props){
    const [selectedValue, setSelectedValue] = useState('All');
    
    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
      };
    
    
    return(
        <section className="bg-gray-100" >
            <title>{`${selectedValue} Posts`}</title>
            <div className="m-2 text-right ">
                <label className="rounded bg-red-200 p-2" for="filtering">Filter Posts</label>
                <select id="filtering"  onChange={handleSelectChange} value={selectedValue}>
                    <option value="All" >All Posts</option>
                    <option value="Featured">Featured Posts</option>
                    <option value="Consonant">Consonant Posts</option>
                    <option value="Vowel">Vowel Posts</option>
                    <option value="xxx">Vxxx Posts</option>
                </select>
            </div>
                <PostGrid posts={props.posts} clasifyType={selectedValue} />
        </section>
       
    );
}

export default AllPosts;