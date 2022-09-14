import React from 'react'
import './Header.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom'
import{useStateValue} from './Stateprovider'
function Header() {
  const [{basket},dispatch]=useStateValue();
  return (
    <div className='header'>
      <Link to ='/'>
      <img className='header__logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'/></Link>
       
        <div className='header__search'>
        <input className='header__searchInput'type='text'/>
        <SearchIcon className='header__searchIcon' /></div>
        <div className='header__nav'>
          <div className='header__option'>
            <span className='header__OptionLineOne'>Hello Guest</span>
            <span className='header__OptionLineTwo'>Sign</span>
          </div>
          <div className='header__option'>
            <span className='header__OptionLineOne'>Returns</span>
            <span className='header__OptionLineTwo'>&Orders</span>
          </div>
          <div className='header__option'>
            <span className='header__OptionLineOne'>Your</span>
            <span className='header__OptionLineTwo'>Prime</span>
          </div>
          <Link to='/checkout'>
          <div className='header__optionBasket'>
            <ShoppingCartIcon/>
            <span className='header__optionLineTwo header__BasketCount'>{basket?.length}</span>
          </div></Link>
          
        </div>

    </div>
  )
}

export default Header
