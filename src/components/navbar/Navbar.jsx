import Item from '../nva-item/Item'
import styled from 'styled-components'

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
      <Item/>
      <Item/>
    </Flex>
  )
}