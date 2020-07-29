import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled.div`
  background-color: #000030;
  color: #fff;
  opacity: 0.95;
  box-shadow: 0 1px 3px #000060, 0 1px 2px #000060;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    transition: all 400ms;
    background-color: #000020;
    box-shadow: 0 14px 28px #000090, 0 10px 10px #000090,;
    transform: scale(1.1);
  }
  -moz-user-select: none;
  -website-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -o-user-select: none;
`;

export const Sprite = styled.img`
  width: 8em;
  height: 8em;
  display: none;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;


export const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .ring
{
    width: 90px;
    height: 90px;
    border-radius: 50%;
    box-shadow: 0 4px 0 #000010;
    background: transparent;
    margin-top: -20px;
    animation: animate 1s linear infinite;
}
.text
{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    color: #888;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    margin-top: 20px;
    font-size: 13px;
    background: transparent;
    box-shadow: 0 0 5px rgba(0,0,0,.2)
}
@keyframes animate
{
    0%
    {
        transform: rotate(0deg);
    }
    100%
    {
        transform: rotate(360deg);
    }
}

`;




export const PokemonContainer = styled.div`
  background: rgb(26,26,26);
  background: linear-gradient(90deg,  #000020 0%, #000030 35%,  #000020 100%);
  color: #fff;
  margin-top: 140px;
  .card-header {
    background-color: #000010;

  }

  .card {
    transition: 400ms;
  }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 140px;
`;

export const Load = styled.div`
  margin-top: 540px;
`;

export const Fechar = styled.div`
 background-color: #000070;
 width: 40px;
 height: 40px;
 border-radius: 50%;
 float: right;
 text-decoration: none;

 &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  
 p {
   display: flex;
   justify-content: center;
   align-items: center;
  color: #fff;
  font-size: 28px;
 }
`;
