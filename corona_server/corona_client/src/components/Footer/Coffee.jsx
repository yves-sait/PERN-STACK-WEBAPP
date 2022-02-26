import React from 'react';
import styled from 'styled-components';
import './Coffee.css';

const Button = styled.a`
  line-height: 2;
  height: 5rem;
  text-decoration: none;
  display:inline-flex;
  color: #a4a4a8;
 
  border-radius: 15px;
  border: 1px solid transparent;
  padding: 0.7rem 1rem 0.7rem 1rem;
  font-size: 2rem;
  letter-spacing: 0.6px;
 
  transition: 0.3s all linear;
  font-family: cursive;
  &:hover, &:active, &:focus {
    text-decoration: none;
    box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5);
    opacity: 0.85;
    color:rgba(255,40,0);
  }
`;

const Image = styled.img`
  height: 34px;
  width: 35px;
  margin-bottom: 1px;
  box-shadow: none;
  border: none;
  vertical-align: middle;
`;

const Text = styled.span`
  margin-left: 15px;
  font-size: 2rem;
  vertical-align: middle;
`;

const Coffee=() => {
  return(

    <div style={{textAlign:"center"}}>
    <Button target="_blank" href="https://www.buymeacoffee.com/copycoder">
      <Image src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee." />
      <Text className="coffeetxt">Buy me a coffee?</Text>
    </Button>
    </div>

)

}

export default Coffee;