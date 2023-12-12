import React from 'react'
import "./ProductBar.css"
import LEFT from "../../assets/LEFT.png"
import RIGHT from "../../assets/RIGHT.png"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const ProductBar = () => {
  return (
   <nav className="bar">
    <h2 className='Products'>Products</h2>
    <div className='navigate'>
    <img src={LEFT} className='left' />
    <span><p className='text'>Selected category</p><p className='all'>All <ArrowDropDownIcon/></p></span>
    <span><img src={RIGHT} className='right' /></span>
    </div>
    <input placeholder='Search Here' className='searchBar'></input>
   </nav>
  )
}

export default ProductBar
