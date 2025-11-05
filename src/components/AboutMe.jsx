import { motion } from "framer-motion";

const AboutMe = () => {





  
  return (
    <motion.section id='aboutMe'
    initial={{opacity: 0, color: '#FBFBFB'}}
    animate={{opacity:1}}
    whileHover={{color: '#f8e112', borderColor: '#f8e112', borderWidth: 2, textShadow: "0px 0px 4px rgb(255,255,255)", boxShadow: "0px 0px 8px rgb(255,255,255)"}}
    transition={{duration: 0.5}}
    className=' flex flex-col justify-between items-center gap-4 border-6 p-4 w-3/4 m-auto mt-28   rounded-2xl md:w-2/4 md:mt-32 text-[#FBFBFB] relative ' >
        <img className=" w-40 h-40    md:w-60 md:h-70 md:mb-10 md:mt-3  md:rounded-2xl rounded-full border-4 aspect-square  hover:border-2 border-white" src="./images/pp.jpg" alt="" />
        <h2 className="text-3xl  md:mb-4 text-center">Ben kimim ?</h2>
        <p className="text-center text-[16px] md:text-[20px]">Merhaba, ben <span className="font-semibold ">Berke Tuğcu</span>.
           Kendini geliştirmeye adayan bir frontend geliştiriciyim.
       React, Tailwind ve Redux gibi teknolojilerle projeler geliştiriyor, her satır kodda daha iyisini hedefliyorum.
       Sürekli öğrenmeye, denemeye ve gelişmeye kararlıyım.
        Amacım, zamanla tam donanımlı ve fark yaratan bir geliştirici olmak.</p>
        <motion.button
         initial={{x: 350, scale:1 }}
         animate={{x:0 , rotate:360, scale:1}}
         whileHover={{x:120, rotate:90}}
         transition={{duration:1.5}}
         className=' w-16 h-16 bg-[#FBFBFB] rounded-full text-[#8D5F8C] font-semibold z-50   '>CV</motion.button>
         <a className="text-white absolute md:bottom-10 md:right-112 bottom-9 right-40 hover:underline z-10" href="https://docs.google.com/document/d/1nW5egWV2ZP-UcbbyrLlRjrpKk5gd6K48J8UP9c6PAKQ/edit?usp=sharing">Göz At</a>
    </motion.section>
    
  )
}

export default AboutMe