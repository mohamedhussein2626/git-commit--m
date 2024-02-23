

import {Navbar ,Dropdown , Avatar} from "flowbite-react"
import {Link , useLocation} from "react-router-dom"
import {TextInput} from "flowbite-react"
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Button } from "flowbite-react";
import {useSelector} from "react-redux"
import { toggleTheme } from '../redux/theme/themeSlice';
import { signoutSuccess } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { IoIosSearch } from "react-icons/io";




const Header = () => {
    const path = useLocation().pathname;
    const dispatch = useDispatch();
    const {currentUser} = useSelector(state => state.user)
    const { theme } = useSelector((state) => state.theme);
     const dispacth = useDispatch()


     const handleSignout = async()=>{

        try {
          const res = await fetch(`/api/user/signout` , {
            method: "POST",
          });
    
          const data = await res.json();
    
          if(!res.ok){
            console.log(data.message)
          } else {
            dispatch(signoutSuccess());
          }
          
        } catch (error) {
    
          console.log(error.message)
          
        }
    
       }
    






  return (
    <Navbar className="border-b-2 bg-teal-500 ">
        <Link to={"/"}>
          <img
          className="w-[65px] h-[65px] rounded-full"
          
          src="/logo.png" alt="img" />
        </Link>

        <Link to={'/search'}>
        <span className="text-white text-2xl font-semibold lg:hidden " >
        <IoIosSearch className="text-3xl" />
          </span>
        </Link>


        <div className="flex gap-3 md:order-2">
        
              <Button className="w-12 h-10 hidden sm:inline"
                        color='gray'
                        pill
                        onClick={() => dispatch(toggleTheme())}
                      
              >
             {theme === 'light' ? <FaSun /> : <FaMoon />}

            

            </Button>
               {
                currentUser ? (
                    <Dropdown
                
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar
                        alt="user"
                        img={currentUser.profilePicture}
                        rounded
                        
                        />
                    }

                    >

                          <Dropdown.Header>
                            <span className="block text-sm " >@{currentUser.username} </span>
                            <span className="block text-sm font-medium truncate"> {currentUser.email} </span>
                          </Dropdown.Header>
                          <Link to={'/dashboard?tab=profile'}>

                            <Dropdown.Item>
                                Profile
                            </Dropdown.Item>
                           </Link>
                           <Dropdown.Divider />
                           <Dropdown.Item onClick={handleSignout}>Sign Out</Dropdown.Item>
                    </Dropdown>

                    

                ) :
                (
                    <Link to={"/sign-in"}>
                    <Button color="blue">
                            Sign In
                        </Button>
                    </Link>
        
                )

               }
            <Navbar.Toggle />





        </div>


               <Navbar.Collapse >
                <Navbar.Link active={path === "/"} as={"div"} >
                    <Link className="text-white" to={"/"}>Home</Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/search"} as={"div"} >
                    <Link className="text-white" to={"/search"}>Categories</Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/search"} as={"div"} >
                    <Link className="text-white" to={"/search"}>Most popular</Link>
                </Navbar.Link>
              
                <Navbar.Link active={path === "/about"} as={"div"}>
                    <Link className="text-white"  to={"/about"}>About Us</Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/privacy"} as={"div"}>
                    <Link className="text-white"  to={"/privacy"}>Privacy Policy</Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/contact-us"} as={"div"}>
                    <Link className="text-white"  to={"/contact-us"}>Contact Us</Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/terms"} as={"div"}>
                    <Link className="text-white"  to={"/terms"}>Terms & Conditions</Link>
                </Navbar.Link>

                </Navbar.Collapse>


            <Link to={'/search'}>
            <span className="text-white text-2xl font-semibold hidden lg:block" >

            <IoIosSearch />

            </span>

            </Link>




    
    
        
       

    </Navbar>
  )
}

export default Header