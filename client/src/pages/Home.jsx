

import { useEffect, useState } from 'react';
import HomePostCard from '../components/HomePostCard';
import { AiOutlineSearch } from 'react-icons/ai';
import { useLocation , useNavigate } from 'react-router-dom';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import PostCard from '../components/PostCard';
import { Footer } from 'flowbite-react';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';



const Home = () => {
  const [posts , setPosts ] = useState([])
  const [recentPosts, setRecentPosts] = useState(null);


  useEffect(()=>{

    const fetchPosts = async()=>{
      const res = await fetch(`/api/post/getposts?limit=30`);
      const data = await res.json();

      setPosts(data.posts);
    }


    fetchPosts();

  } , [])



  
  useEffect(() => {
    try {
      const fetchRecentPosts = async () => {
        const res = await fetch(`/api/post/getposts?limit=18`);
        const data = await res.json();
        if (res.ok) {
          setRecentPosts(data.posts);
        }
      };
      fetchRecentPosts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);









  return (

    <div className='flex flex-col p-4 gap-8 '>

      <div className='my-16'>
            <Banner />
      </div>


          <div className='flex flex-col sm:flex-row gap-4 my-16 max-w-7xl p-3'>

              <div className='flex w-full flex-col gap-4'>
         <p className='text-slate-500  text-center my-4 font-bold '>LATEST POSTS</p>

         <div className='flex flex-wrap gap-4'>
         {posts.map((post)=>(

<HomePostCard key={post._id} post={post} />

))}

         </div>
         <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>



          </div>

              <div className='w-[300px] md:min-h-screen  '>
              <p className='text-slate-500 mx-8 text-center my-4 font-bold '>POPULAR POSTS</p>

              <span className='hidden sm:block'>
                <img className='my-6' src="/ads.jpg" alt="" />
              </span>

              <div className='flex flex-col gap-4 items-center'>
              {recentPosts &&
            recentPosts.map((post) => <PostCard key={post._id} post={post} />)}
              </div>
                 <span className='hidden sm:block'>
                <img className='my-6' src="/ads.jpg" alt="" />
                <img className='my-6' src="/ads.jpg" alt="" />
              </span>
                <span className='flex flex-wrap mx-4 gap-2 my-8 '>
                  <p className='text-slate-500 font-normal'>Tags:</p>
                  <Link className='text-red-500 font-normal' to={'/search'}>Travel</Link>
                  <Link className='text-red-500 font-normal' to={'/search'}>Movies</Link>
                  <Link className='text-red-500 font-normal' to={'/search'}>Health</Link>
                  <Link className='text-red-500 font-normal' to={'/search'}>Photography</Link>
                  <Link className='text-red-500 font-normal' to={'/search'}>Fashion</Link>
                  <Link className='text-red-500 font-normal' to={'/search'}>entertainment</Link>
                  <Link className='text-red-500 font-normal' to={'/search'}>Technology</Link>
                </span>
                <span className='flex flex-col gap-4'>
                  <p className='text-pink-500 font-bold text-md'>follow us on our social media platforms:</p>
                   <span className='flex gap-4'>
                   <Footer.Icon href='#' icon={BsFacebook}/>
            <Footer.Icon href='#' icon={BsInstagram}/>
            <Footer.Icon href='#' icon={BsTwitter}/>
            <Footer.Icon href='#' icon={BsDribbble}/>


                   </span>
                                   <img className='my-6' src="/ads.jpg" alt="" />

                </span>
              </div>
            <div>

            </div>
          </div>
          </div>

          

  )
}

export default Home