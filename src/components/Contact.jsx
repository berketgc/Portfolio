import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section 
    whileHover={{
    boxShadow: "0 0 36px rgb(205, 150, 210)",  
    color: "#8D5F8C",
     rotateY:10
  
  }}
     
    id='contact' className=' mt-40 p-6 m-4 md:p-10 md:m-0 lg:mt-60 rounded-b-full bg-[#FBFBFB] relative' > 
    
    <div><img className="size-14 rotate-45 z-10 absolute -top-28 left-14" src="./images/santa-hat.png" alt="" /></div>
    <div className="border-2 bg-white absolute -top-10 left-16 size-12 rounded-2xl  "></div>
    <div className="border-2 bg-white absolute -top-20 left-16  rounded-full  "><img className="size-12 " src="./images/smile.png" alt="" /></div>
    <div className="border-2 bg-white absolute -top-9 left-15 h-12 w-2 rotate-12 rounded-2xl   "></div>
     <div className="border-2 bg-white absolute -top-10 left-25 h-2 w-12 -rotate-45 rounded-2xl   "></div>
     <div className="border-2 bg-white absolute -top-28 left-32 rounded-l-full rounded-bl-4xl rounded-b-full rounded-r-full rounded-t-3xl h-14 flex justify-center items-center   "><div className="p-4">" Hello ! Contact with me"</div></div>
       
      
       
       
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
        <div className='flex flex-col justify-center items-center gap-4 m-6 '>
            <img className='size-10 md:size-12 lg:size-14 hover:rotate-45 duration-300  hover:translate-x-4' src="./images/mobile.png" alt="" />
            <a className="text-[#8D5F8C] font-semibold hover:underline" href="#">0531 246 01 32</a>
        </div>
     </div> 

    </motion.section>
  )
}

export default Contact