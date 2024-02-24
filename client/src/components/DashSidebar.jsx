
import {Sidebar} from "flowbite-react"
import {
    HiUser,
    HiArrowSmRight,
    HiDocumentText,
    HiOutlineUserGroup,
    HiAnnotation,
    HiChartPie,
  } from 'react-icons/hi';
  
  import { useEffect , useState } from "react";
   import { useLocation ,Link } from "react-router-dom";
   import { useDispatch , useSelector } from 'react-redux';


const DashSidebar = () => {
  const dispatch = useDispatch();
    const location = useLocation();
    const [tab , setTab] = useState("");
   const {currentUser} = useSelector((state)=> state.user)

    useEffect(()=>{
        const urlParams = new URLSearchParams(location.search)
        const tabFromUrl = urlParams.get('tab')
        if(tabFromUrl){
            setTab(tabFromUrl)
        }
    }, [location.search])


  





  return (
    <Sidebar className="w-full md:w-56">
      <Sidebar.Items>
       <Sidebar.ItemGroup className="flex flex-col gap-2">
            
            {currentUser && currentUser.isAdmin && (
              <Link to="/dashboard?tab=dash">
                <Sidebar.Item
                active={tab === 'dash' || !tab }
                icon={HiChartPie}
                as= "div"
                >

                  Dashboard
                  
                </Sidebar.Item>
              </Link>
            ) }



                 <Link to={"/dashboard?tab=profile"}>
                  <Sidebar.Item
                  active={tab === "profile"}
                  icon={HiUser}
                  label={currentUser.isAdmin? 'ADMIN' : 'USER'}
                  
                  >
                    Profile

                  </Sidebar.Item>
                 </Link>

                 {
                  currentUser.isAdmin && (
                    <Link to={"/dashboard?tab=posts"}>
                      <Sidebar.Item
                      as="div"
                      active={tab === "posts"}
                      icon={HiDocumentText}
                      
                      >
                        Posts
                      </Sidebar.Item>
                    </Link>
                  )
                 }
                 {
                  currentUser.isAdmin && (
                    <>
                      <Link to={"/dashboard?tab=users"}>
                      <Sidebar.Item
                      as="div"
                      active={tab === "users"}
                      icon={HiOutlineUserGroup}
                      
                      >
                        Users
                      </Sidebar.Item>
                    </Link>
                    <Link to={"/dashboard?tab=comments"}>
                      <Sidebar.Item
                      as="div"
                      active={tab === "comments"}
                      icon={HiAnnotation}
                      
                      >
                        Comments
                      </Sidebar.Item>
                    </Link>
                    
                    </>
                
                  )
                 }

       </Sidebar.ItemGroup>


      </Sidebar.Items>

    </Sidebar>
  )
}

export default DashSidebar