import styled from 'styled-components';

export const Load = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .ring
{
    width: 300px;
    height: 300px;
    border-radius: 50%;
    box-shadow: 0 4px 0 #262626;
    background: transparent;
    animation: animate 1s linear infinite;
}
.text
{
    width: 300px;
    height: 300px;
    border-radius: 50%;
    color: #262626;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    line-height: 300px;
    font-size: 2em;
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


