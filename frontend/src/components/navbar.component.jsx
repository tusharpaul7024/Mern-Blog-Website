import { useState } from 'react'
import logo from '../images/logo.png'
import {Link, Outlet} from 'react-router-dom' 
import { useDispatch, useSelector } from 'react-redux'
import { setMode } from '../redux/features/slices/theme.slice.js'


function Navbar () {

    const [searchBoxVisiblity, setSearchBoxVisiblity] = useState(false)
    const dispatch = useDispatch()
    const currentTheme = useSelector(state => state.theme.mode)
    
    
    function lightDarkModeIcons(){

        if(currentTheme === "light"){
            
           return <i className='fi fi-sr-brightness text-2xl leading-none'></i>
        }
        else{
            return <i className='fi fi-sr-moon-stars text-xl'></i>
        }
    }





  return (
    <>
    <nav  className='navbar'>
        
       
        <Link to='/' className='flex-none w-10'>
            <img src={logo} className='w-full' alt='blog logo' />
        </Link>
        
        <div className={`absolute bg-white w-full left-0 top-full mt-0.5 border-b border-grey py-4 px-[5vw] 
            md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto md:show `+(searchBoxVisiblity?'show':'hide') }>
            <input type='text' placeholder='Search' className='w-full md:w-auto bg-grey p-4 pl-6 pr-[12%] md:pr-6 rounded-full
            placeholder:text-dark-grey md:pl-12'/>
            <i className='fi fi-rr-search absolute right-[10%] md:pointer-event-none md:left-5 top-1/2 -translate-y-1/2 text-xl text-dark-grey' ></i>
        </div>

        <div className='flex items-center gap-3 md:gap-5 ml-auto'>

            <div className='flex gap-3 w-full'>
                <button className='md:hidden bg-grey w-12 h-12 rounded-full flex items-center justify-center'
                        onClick={() => setSearchBoxVisiblity(prev => !prev)}>
                    <i className="fi fi-rr-search text-xl"></i>
                </button>
            
          
                <Link to='/editor' className='hidden md:flex gap-2 link rounded-full '>
                    <i className="fi fi-rr-file-edit"></i>
                    <p>Write</p>
                </Link>
            
                <button className=' bg-grey w-12 h-12 rounded-full flex items-center justify-center'
                    onClick={() => dispatch(setMode(currentTheme === "light" ? "dark" : "light"))}>
                {lightDarkModeIcons()} 
                </button>
                
            </div>
           

            <Link className='btn-dark py-2' to='/signin'>
                Sign In            
            </Link>
            <Link className='btn-light  py-2 hidden md:block' to='/signup'>
                Sign Up
            </Link>
        </div>

    </nav>
    <Outlet/> 
    </>

)

}

export default Navbar 


