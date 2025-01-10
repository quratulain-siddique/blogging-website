import Link from "next/link";
import Image from "next/image";
function PostItem(props ){
const {slug, image, title, date, excerpt, clasify} = props.post;
const formatDate = new Date(date).toLocaleDateString('en-US',{
    day:'numeric',
    month:'long',
    year:"numeric"
});

if (clasify === props.clasifyType)
{
  
    return <li className="p-3 ">
    <Link href={`/posts/${slug}`}  >
    
    <div><Image src={`/images/${image}`} alt={title} width={200} height={250} layout="responsive"/></div>
    <div >
    <time className="italic text-right text-green-700 font-extrabold block"> {formatDate}</time>
        <h3 className="font-bold ">{title}:</h3>
        
        <p className="w-72 text-justify ml-10 mr-10" >{excerpt}</p>
    </div>
    </Link>
</li>
}
if (props.clasifyType === 'All')
    {
        
        return <li className="p-3 ">
        <Link href={`/posts/${slug}`}  >
        <div><Image src={`/images/${image}`} alt={title} width={200} height={250} layout="responsive"/></div>
        <div >
        <time className="italic text-right text-green-700 font-extrabold block"> {formatDate}</time>
            <h3 className="font-bold ">{title}:</h3>
            
            <p className="w-72 text-justify ml-10 mr-10" >{excerpt}</p>
        </div>
        </Link>
    </li>
    }   
}
export default PostItem;