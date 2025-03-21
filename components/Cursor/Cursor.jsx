'use client';
import React, {useState} from 'react'
import './cursor.css'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux';


function Cursor() {
  const cursorVariants = useSelector(state => state.cursor.cursorVariants);

  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
  })


  React.useEffect(() => {
    const mouseMove = e => {
      setCursor({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, []);

  const variants = {
    default: {
      x: cursor.x - 16,
      y: cursor.y - 16,
      backgroundColor: 'green',
    },
    text: {
      width: 40,
      height: 40,
      x: cursor.x - 20,
      y: cursor.y - 20,
      background: 'white',
      mixBlendMode: 'difference',
    },
    BtnClick:{
      width:60,
      height:60,
      x: cursor.x - 30,
      y: cursor.y - 30,
      backgroundColor: 'green',
      mixBlendMode: 'overlay',
    },
    ImgHover:{
      width:60,
      height:60,
      x: cursor.x - 30,
      y: cursor.y - 30,
      backgroundColor: 'transparent'
    }
  }

  return (
    <motion.div className='cursor' variants={variants} animate={cursorVariants}>
    </motion.div>
  )
}


export default Cursor