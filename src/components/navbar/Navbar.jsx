import Item from '../nav-item/Item'
import styled from 'styled-components'
import menu from './menu.json'

export default function Navbar(){
  const Flex = styled.div`
  background: #fff;
  color: #1c1c1c;
  display: flex;
  flex-direction: row;
  gap: 3em;
  
  `


  return(
    <Flex>
      {
        menu.map((item)=>{
          return(
            <Item {...item}/>
          )
        })
      }   
    </Flex>
  )
}