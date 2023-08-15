import {useContext, useEffect, useState} from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { ShopperProducts } from './ShopperProducts';
import { LightTheme } from '../themes/LightTheme';
import store from '../stores/store'
import { BrowserRouter,Route, Routes,Link } from 'react-router-dom';
import ShopperLanding from './ShopperLanding';
import ShopperProductDetails from './ShopperProductDetails';
export  function ShopperIndex()
{
    const userTheme=useContext(ThemeContext);
    const [theme, setTheme]= useState(userTheme)

    function ChangeTheTheme()
    {
        if(theme.themeName==='dark')
        {
           setTheme(LightTheme)
        }else
        {
            setTheme(userTheme);
        }
    }

    //! store fetching data
    const count= store.getState().store.cartItemsCount;

    const[itemsCount, setItemsCount]=useState(count);

    useEffect(()=>{
        setItemsCount(count)
        console.log("items count updated")
    },[count])
    
    return(
        
        <div className="container">
            <BrowserRouter>
            
            <header className={`${theme.background} ${theme.textColor} p-0 sticky-top`}>
                <div className="d-flex justify-content-between p-2 m-2">
                <h2 className='p-2'><Link to="/"> <u> ShopMart <span className="bi bi-cart"> </span></u> </Link></h2>
                <nav className="d-flex justify-content-between gap-3  m-2">
                  <div>
                            <Link to='/home' style={{fontSize:"20px"}}>Home</Link>
                  </div>
                  <div>
                            <Link to='category/electronics' style={{fontSize:"20px"}}>Electronics</Link>
                  </div>
                  <div>
                            <Link to="category/men's clothing" style={{fontSize:"20px"}}>Men's Fashion</Link>
                  </div>
                  <div>
                            <Link to="category/women's clothing" style={{fontSize:"20px"}}>women's Fashion</Link>
                  </div>
                  <div>
                            <Link to='category/jewelery' style={{fontSize:"20px"}}>Jewelery</Link>
                  </div>
                </nav> 
                <div className="d-flex  justify-content-between gap-2">

                <h3 className="btn" onClick={ChangeTheTheme} >
                    <span className={`${theme.btnIcon}`} style={{fontSize:'25px'}}></span>
                </h3>
                <button className="btn btn-danger position-relative ">
                    <span className="bi bi-cart-fill"> </span>
                    Your Cart
                    <span className="badge top-1 start-80 position-absolute bg-warning text-white rounded-pill">{itemsCount}</span>
                </button>
                </div>

                </div>
            </header>
            <div id='banner' className={`m-2 ${theme.banner} p-2 container sticky-top position-relative`} >
                    <marquee behaviour="scroll" direction="left">
                        <span style={{fontSize:"25px"}}>⚡ Independence day sale live 30% <span className='bi bi-tags-fill'></span> OFF ⚡ 
                        </span></marquee>
            </div>
            {/* <section >
                <main className='container text-center shadow-lg m-3 p-5 bg-dark'>
                    <ShooperProducts/>
                </main>
                
            </section> */}
            <div className='' id="Routers">
                <Routes>
                <Route index path='/' element={<ShopperLanding/>} /> 
                <Route  path='/home' element={<ShopperProducts/>} /> 
                <Route  path='category/:catname' element={<ShopperProducts/>} /> 
                <Route  path='products/:id' element={<ShopperProductDetails/>} /> 
                
                </Routes>
            </div>
            </BrowserRouter>
        </div>
    )
}