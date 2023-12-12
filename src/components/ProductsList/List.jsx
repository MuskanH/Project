import React from 'react'
import "./List.css"
import Img1 from "../../assets/Rectangle 1.png"
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';


const List = () => {
  return (
    <div className='container'>
        <div>
      <h3 className='productName'>Durga Mata Marble Statues</h3>
      <img src={Img1} className='productImg'></img>
      </div>
      <div className='productIcons'>
      <AddBoxOutlinedIcon/>
      <ShareOutlinedIcon/>
      </div>
    </div>
  )
}

export default List
