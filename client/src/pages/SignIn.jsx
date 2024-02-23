
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInFailure,signInStart,signInSuccess } from '../redux/user/userSlice';
import {useDispatch , useSelector} from "react-redux"
import OAuth from '../components/OAuth';

const SignIn = () => {  
  const [formData , setFormData] = useState({});
  const {loading , error: errorMessage} = useSelector(state => state.user);
  const navigate = useNavigate();
  const dispacth = useDispatch();

  const handleChange =async (e)=>{
    e.preventDefault();
    setFormData({...formData, [e.target.id]: e.target.value.trim()});
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    if( !formData.email || !formData.password){
      return dispacth(signInFailure('PLEASE FILL ALL THE FILDS ...'))
     
    }

    try {

       dispacth(signInStart());

      const res = await fetch('/api/auth/signin' , {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),

      });

      const data = await res.json();

      if(data.success === false){
        dispacth(signInFailure(data.message))
       
      }

   
      if(res.ok){
        dispacth(signInSuccess(data));
         navigate("/");
      }
      
    } catch (error) {

      dispacth(signInFailure(error.message))
    }






  }







  return (
    <div className='min-h-screen mt-20'>
    <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>

      <div className='flex-1'>

        <p className='text-slate-500 font-bold'>
        Welcome To Our community 
        You can sign in with your email and password
          or with Google.
        </p>

      </div>

      <div className='flex-1'>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit} >
          <div>
            <Label value='Your email' />
            <TextInput
              type='email'
              placeholder='name@company.com'
              id='email'
              onChange={handleChange}
            />
          </div>
          <div>
            <Label value='Your password' />
            <TextInput
              type='password'
              placeholder='Password'
              id='password'
              onChange={handleChange}
            />
          </div>
          <Button
            gradientDuoTone='purpleToPink'
            type='submit'
            disabled={loading}
          >
            {loading ? (
              <>
                <Spinner size='sm' />
                <span className='pl-3'>Loading...</span>
              </>
            ) : (
              'Sign In'
            )}
          </Button>
          <OAuth />
        </form>

        <div className='flex gap-2 text-sm mt-5'>
          <span>Dont Have an account ...?</span>
          <Link to='/sign-up' className='text-blue-500'>
            Sign Up
          </Link>
        </div>
        {errorMessage && (
          <Alert className='mt-5' color='failure'>
            {errorMessage}
          </Alert>
        )}



      </div>

    </div>

  </div>


  )
}

export default SignIn