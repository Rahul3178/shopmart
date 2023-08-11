import {useContext, useState} from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
export  function ShopperIndex()
{
    const userTheme=useContext(ThemeContext);
    const [theme, setTheme]= useState(userTheme)
    function ChangeTheTheme()
    {
        if(theme.themeName==='dark')
        {
            setTheme({
                themeName:'light',
                background:'bg-light',
                textColor:'text-black',
                btnIcon:'bi bi-moon-stars-fill',
                banner:'bg-dark text-white'
            })
        }else
        {
            setTheme(userTheme);
        }
    }

    return(
        
        <div className="container-fluid">
            {/*bg-light p-2  text-black sticky-top  */}
            <header className={`${theme.background} ${theme.textColor} p-0`}>
                <div className="d-flex justify-content-between p-2 m-2">
                <h2>ShopMart <span className="bi bi-cart"></span></h2>
                <nav className="d-flex justify-content-between gap-3  m-2">
                  <div>
                     <h6>Home</h6>
                  </div>
                  <div>
                     <h6>Electronics</h6>
                  </div>
                  <div>
                     <h6>Men's Fashion</h6>
                  </div>
                  <div>
                     <h6>women's Fashion</h6>
                  </div>
                </nav> 
                <div className="d-flex  justify-content-between gap-2">

                <h3 className="btn" onClick={ChangeTheTheme}>
                    <span className={`${theme.btnIcon}`}></span>
                </h3>
                <button className="btn btn-danger position-relative rounded-pill">
                    <span className="bi bi-cart-fill"> </span>
                    Your Cart
                    <span className="badge position-absolute bg-warning text-white rounded-pill">10</span>
                </button>
                </div>

                </div>
            </header>
            <div id='banner' className={`m-2 ${theme.banner} p-2`}>
                    <h3> ⚡ Independence day sale live 30% OFF ⚡</h3>
            </div>
            <section >
                <h3>Theme Name: {theme.themeName}</h3>
                <h3>Theme Background {theme.background}</h3>
                <h3>Theme text-color {theme.textColor}</h3>
            </section>
        </div>
    )
}