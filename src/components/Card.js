import React from 'react'
import styled from 'styled-components'

const El = styled.button`
  border: 0;
  background: transparent;
  outline: none;
  cursor: pointer;

  font-family: inherit;
  color: inherit;

  font-size: 60px;
  line-height: 60px;
  letter-spacing: -1px;

  padding: 20px 40px;
  margin-bottom: 200px;

  background-image: url('/static/matte-sm.png');
  background-repeat: no-repeat;

  width: 542px;
  height: 358px;
`

const Smile = styled.strong`
  white-space: nowrap;
`

const Card = ({ children, onClick }) => (
  <El onClick={onClick}>
    {children} <Smile>:(</Smile>
  </El>
)

export default Card
