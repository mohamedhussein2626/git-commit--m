

import { Link } from "react-router-dom"
import { Button } from 'flowbite-react';


const PostCard = ({post}) => {

  return (
    <div className=' group relative w-full h-[250px] overflow-hidden rounded sm:w-[180px] '>
      <Link to={`/post/${post.slug}`}>
         <img className='h-[150px] w-full object-cover' src={post.image} alt="cover" />

      </Link>

      
      <div className='flex flex-col bg- gap-4 p-2'>
      <p className="text-sm font-normal font-sans line-clamp-2 text-teal-500 text-center"> {post.title} </p>
              <Link to={'/search'}>
        <Button size={'xs'}    gradientDuoTone='purpleToPink' className='absolute left-0 top-2' >{post.category}</Button>

        </Link>
      </div>
      
    </div>
  )
}

export default PostCard