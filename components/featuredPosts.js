import PostGrid from "./posts/posts-grid";


function FeaturedPosts(){
   
    return(
        <section className="bg-gray-100" >
           
            <PostGrid  clasifyType="Featured" />
            
        </section>
       
    );
    
}
export default FeaturedPosts;