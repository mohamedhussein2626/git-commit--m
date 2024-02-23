

import { Link } from 'react-router-dom'
import { Button } from 'flowbite-react';
import { useSelector } from "react-redux"


const HomePostCard = ({post}) => {

  return (
    <div className=' group relative w-full h-[400px] overflow-hidden rounded sm:w-[380px] '>
      <Link to={`/post/${post.slug}`}>
         <img className='h-[230px] w-full object-cover' src={post.image} alt="cover" />

      </Link>

      
      <div className='flex flex-col bg- gap-4 p-2'>
      <p className="text-sm font-bold font-sans line-clamp-2 text-teal-500 text-center    "> {post.title} </p>
              <Link to={'/search'}>
        <Button size={'sm'}    gradientDuoTone='purpleToPink' className='absolute left-2 top-2' >{post.category}</Button>

        </Link>
        <span className='flex flex-row  gap-6 mx-auto'>
                     
      <Link to={`/post/${post.slug}`} >
          <Button size={'xs'}    gradientDuoTone='purpleToPink' >Read More</Button>
          </Link>
          <span className='text-white bg-pink-500 p-1 self-center text-xs rounded'>{post && new Date(post.createdAt).toLocaleDateString()} </span>
           
        </span>

      </div>
        




    </div>
  )
}

export default HomePostCard