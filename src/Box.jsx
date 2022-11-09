import React from 'react'
import example from './assets/example.png';

const styles = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  cursor: 'move',
  backgroundImage: `url(${example})`,
  backgroundSize: '110px 50px',
  width: '80px',
  height: '40px',
  backgroundRepeat: 'no-repeat',
}
const Box = ({ title, yellow }) => {
  return <div style={{ ...styles }}>{}</div>
}
export default Box
