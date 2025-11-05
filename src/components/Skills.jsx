import { motion } from "framer-motion";


const Skills = () => {
  return (
    <section className='mt-44'>
        <h2 className='text-3xl font-serif text-center text-white mb-10'>Yeneteklerim</h2>
 <div  className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 w-11/12 m-auto bg-[#FBFBFB] p-4 rounded-4xl '>
        <motion.div 
         animate={{ x: [0, 20, -20, 0] }} 
      transition={{ 
        duration: 4,   
        repeat: Infinity, 
        repeatType: "loop", 
     
      }}
        
        className='flex flex-col justify-center items-center gap-2 m-4 '>
            <img className='size-24' src="./images/html.png" alt="" />
            <h4 className='text-[#8D5F8C] text-2xl'>HTML</h4>
        </motion.div>
          <motion.div
           animate={{ x: [0, 20, -20, 0] }} 
      transition={{ 
        duration: 4,   
        repeat: Infinity, 
        repeatType: "loop", 
      
      }}
           className='flex flex-col justify-center items-center gap-2 m-4 '>
            <img className='size-24' src="./images/css-3.png" alt="" />
            <h4 className='text-[#8D5F8C] text-2xl'>CSS</h4>
        </motion.div>
          <motion.div
           animate={{ x: [0, 20, -20, 0] }} 
      transition={{ 
        duration: 4,   
        repeat: Infinity, 
        repeatType: "loop", 
      
      }}
          className='flex flex-col justify-center items-center gap-2 m-4 '>
            <img className='size-24' src="./images/Tailwind CSS.png" alt="" />
            <h4 className='text-[#8D5F8C] text-2xl'>Tailwind</h4>
        </motion.div>
          <motion.div 
           animate={{ x: [0, 20, -20, 0] }} 
      transition={{ 
        duration: 4,   
        repeat: Infinity, 
        repeatType: "loop", 
       
      }}
          className='flex flex-col justify-center items-center gap-2 m-4 '>
            <img className='size-24' src="./images/js.png" alt="" />
            <h4 className='text-[#8D5F8C] text-2xl'>JavaScript</h4>
        </motion.div>
          <motion.div
          
           animate={{ x: [0, 20, -20, 0] }} 
      transition={{ 
        duration: 4,   
        repeat: Infinity, 
        repeatType: "loop", 
    
      }}className='flex flex-col justify-center items-center gap-2 m-4 '>
            <img className='size-24' src="./images/atom.png" alt="" />
            <h4 className='text-[#8D5F8C] text-2xl'>React</h4>
        </motion.div>
          <motion.div 
           animate={{ x: [0, 20, -20, 0] }} 
      transition={{ 
        duration: 4,   
        repeat: Infinity, 
        repeatType: "loop", 
     
      }}
          className='flex flex-col justify-center items-center gap-2 m-4 '>
            <img className='size-24' src="./images/Redux.png" alt="" />
            <h4 className='text-[#8D5F8C] text-2xl'>Redux</h4>
        </motion.div>
         <motion.div
          animate={{ x: [0, 20, -20, 0] }} 
      transition={{ 
        duration: 4,   
        repeat: Infinity, 
        repeatType: "loop", 
   
      }}
         className='flex flex-col justify-center items-center gap-2 m-4 '>
            <img className='size-24' src="./images/c-sharp.png" alt="" />
            <h4 className='text-[#8D5F8C] text-2xl'>C#</h4>
        </motion.div>
</div>

    </section>
  )
}

export default Skills