import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from './StateProvider'
import { auth } from './firebase';
function Header() {
    const [{basket,user}]=useStateValue();
   const login=()=>{
       if(user){
           auth.signOut();
       }
   }
    return (
        <nav className="header">
            {/* a-href causes page to refresh and Link does not */}
            <Link to="/">
        <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>
        </Link>
        <div className="search_div">
        <input className="header_searchInput" type="text" placeholder="Search"></input>
        <SearchIcon className="header_searchIcon"/>
        </div>
        <div className="header_nav">
         <Link to={!user && "/login"} className="header_link">
         <div onClick={login} className="header_options">
         <span className="header_optionLineOne">Hello {user?.email}</span>
         <span className="header_optionLineTwo">{user ?'Sign-Out':'Sign-In'}</span>
         </div>
         </Link>
         <Link to="/" className="header_link">
         <div className="header_options">
         <span className="header_optionLineOne">Returns</span>
         <span className="header_optionLineTwo">Orders</span>
         </div>
         </Link>
         <Link to="/" className="header_link">
         <div className="header_options">
         <span className="header_optionLineOne">Your</span>
         <span className="header_optionLineTwo">Prime</span>
         </div>
         </Link>
         <Link to='/checkout' className="header_link">
             <div className="header_basketOption">
                 <ShoppingBasketIcon/>
                 <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
             </div>
         </Link>
        </div>
        </nav>
            
        
    )
}

export default Header
