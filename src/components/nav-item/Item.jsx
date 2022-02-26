import styled from 'styled-components'
import { useState } from 'react'

 

export default function Item(){
  const [visible, setVisible] = useState('none');

  const handleMouseIn = () => {
    setVisible("flex")
  };

  const handleMouseOut = () => {
    setVisible("none")
  };


  const Container = styled.div`
  width:300px;
  position: absolute;
  background: #fff;
  border-radius: 8px;
  color: #1c1c1c;
  padding: 2em 1em;
  display: ${visible};
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  gap: 1em;
  align-items: flex-start;
  z-index:10;
`
const MenuTag = styled.button`
  padding:1em;
  display: flex;
  border:1px solid #000;
  align-items: flex-start;
`
  return(
    <div onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}>
        <MenuTag >Meu Menu</MenuTag>
        <Container>
          <a href="">sssssss rfefeefefefee ff</a>
          <a href="">sssssss</a>
          <a href="">sssssss</a>
          <a href="">sssssss</a>
          <a href="">sssssss</a>
        </Container>
    </div>
  )
}