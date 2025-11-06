
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.section
    initial={{y: '-100vw'}}
    animate={{y: 0, }}
     whileHover={{
    boxShadow: "0 0 36px rgb(205, 150, 210)",  
    color: "#8D5F8C"  }}
     transition={{duration:0.5, type:"spring", stiffness:50 }}
     className="flex justify-between items-center bg-[#FBFBFB] 
      p-6 md:w-2/3 md:rounded-2xl md:mt-12 md:m-auto lg:p-8 h-24 lg:h-28">
      
      <div
      
      className="lg:ml-10 lg:text-2xl ">
        <h2 className=" text-[14px]  md:text-2xl  ">Berke <span className="font-bold text-[14px] md:text-2xl">Tuğcu</span></h2>
        <motion.p
        whileHover={{ y: 10, rotate: 4, 
          transition: { duration: 0.3, type: "spring", stiffness: 200 },}}
        className="text-[10px] md:text-[16px] border-t-2 mr-2  ">Junior Web Developer</motion.p>
      </div>

      <div className="flex gap-1 md:gap-4 lg:gap-14 lg:mr-10">
        <motion.a 
        whileTap={{   x: [0, -5, 5, -5, 5, 0]}}
        className=" border-2 border-[#8D5F8C] rounded-2xl p-1 lg:p-2 lg:rounded-3xl hover:scale-110 duration-300 " href="#aboutMe">Hakkımda</motion.a>
        <motion.a
        whileTap={{   x: [0, -5, 5, -5, 5, 0]}}
       className=" border-2 border-[#8D5F8C] rounded-2xl p-1 lg:p-2 lg:rounded-3xl hover:scale-110 duration-300  " href="#portfolio">Projeler</motion.a>
        <motion.a
        whileTap={{   x: [0, -5, 5, -5, 5, 0]}}
         className=" border-2 border-[#8D5F8C] rounded-2xl p-1  lg:p-2 lg:rounded-3xl  hover:scale-110 duration-300  " href="#contact">İletişim</motion.a>
      </div>
    </motion.section>
  );
};

export default Navbar;
