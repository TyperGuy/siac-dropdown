import { useState } from 'react'
import Style from './Item.module.scss'
import {BsChevronRight as Arrow} from 'react-icons/bs'
import {FiArrowUpRight as LinkAerrow} from 'react-icons/fi'


 

export default function Item(props){

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
                      {item.isLink?<LinkAerrow className={Style.arrow}/>:<Arrow className={Style.arrow}/>}
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