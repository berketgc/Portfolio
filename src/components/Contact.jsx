import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section 
    whileHover={{
    boxShadow: "0 0 36px rgb(205, 150, 210)",  
    color: "#8D5F8C",
     rotateY:10
  
  }}
    
    id='contact' className='md:mt-40 mt-10 p-6 m-4  rounded-b-full bg-[#FBFBFB]' > 
        <motion.h2 
        whileHover={{color: '#8D5F8C',textShadow: "0px 0px 4px rgb(255,255,255)"   }}
        className='text-center text-4xl text-[#8D5F8C] mb-8 font-serif'>İletişim</motion.h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  '> 
        <div className='flex flex-col justify-center items-center gap-4 m-6'>
            <img className='size-10 md:size-12 lg:size-14  hover:rotate-45 duration-300  hover:translate-x-4 ' src="./images/gmail.png" alt="" />
            <a className="text-[#8D5F8C] hover:underline font-semibold" href="https://berketugcu1999@gmail.com" target="_blank">berketugcu1999@gmail.com</a>
        </div>
        <div className='flex flex-col justify-center items-center gap-4 m-6'>
            <img className='size-10 md:size-12 lg:size-14  hover:rotate-45 duration-300  hover:translate-x-4' src="./images/github.png" alt="" />
            <a className="text-[#8D5F8C] hover:underline font-semibold" href="https://github.com/berketgc" target="_blank">https://github.com/berketgc</a>
        </div>
        <div className='flex flex-col justify-center items-center gap-4 m-6'>
            <img className='size-10 md:size-12 lg:size-14 hover:rotate-45 duration-300  hover:translate-x-4' src="./images/mobile.png" alt="" />
            <a className="text-[#8D5F8C] font-semibold hover:underline" href="#">0531 246 01 32</a>
        </div>
     </div> 

    </motion.section>
  )
}

export default Contact