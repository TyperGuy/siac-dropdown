import { useState } from 'react'
import Style from './Item.module.scss'
import {BsChevronRight as Arrow} from 'react-icons/bs'


 

export default function Item(props){
  const [visible, setVisible] = useState('none');

  return(
    <>
        <div className={Style.dropdown}>
          <button className={Style.dropbtn}>{props.title}</button>
          {
            props.isIterable&&
            <div className={Style.dropdownContent}>
              <div className={Style.marker}></div>
              {
                props.menu.map((item)=>{
                  return(
                    <div className={Style.linkContainer}>
                      <div className={Style.link} >
                        <a href={item.to}>{item.title}</a>
                        <span>{item.desc}</span>
                      </div> 
                      <Arrow className={Style.arrow}/>
                    </div>
                  )
                })
              }
            </div>  
          }   
        </div> 
    </>
  )
}