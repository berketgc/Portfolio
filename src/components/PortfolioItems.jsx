import React from 'react'
import { motion } from "framer-motion";

const PortfolioItems = ({title,paraf,link ,img}) => {
  return (
    <section className='text-[#FBFBFB]'>
        <motion.div 
       whileHover={{scale:1.2,   color: '#f8e112', borderColor: '#f8e112', borderWidth: 2, textShadow: "0px 0px 4px rgb(255,255,255)", boxShadow: "0px 0px 8px rgb(255,255,255)"}}
        transition={{duration:0.3}}
        className=' flex flex-col justify-center items-center gap-4 border-2 rounded-2xl p-6   text-center     '>
          <img  className='lg:w-96 lg:h-72  h-32 w-44  ' src={img} alt="" />
            <h2 className='md:text-2xl font-semibold font-serif border-b-2 text-center'>{title}</h2>
            <p className='text-center'>
                {paraf}
            </p>
            <a href={link} target="_blank" >Göz atın:  <span className='hover:text-sky-700 hover:underline text-center text-sky-500'>{link}</span> </a>

        </motion.div>

    </section>
  )
}

export default PortfolioItems