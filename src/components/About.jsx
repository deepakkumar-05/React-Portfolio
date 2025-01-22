import aboutImg from "../assets/aboutMe.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "motion/react"


const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
       <motion.h2
          whileInView={{opacity:1,y:0}}
          initial={{opacity:0,y:-100}}
          transition={{duration:1.5}}
          className='my-20 text-center text-4xl'>About Me</motion.h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
          whileInView={{opacity:1,y:0}}
          initial={{opacity:0,y:-100}}
          transition={{duration:1}}
           className="flex items-center justify-center">
            <motion.img
            // whileInView={{rotate:20}}
            // animate={{rotate:0}}
            className="rounded-2xl" height="50%" width="50%" src={aboutImg} alt="About Me" />
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2">
            <motion.div
             whileInView={{opacity:1,x:0 }}
             initial={{x:100,opacity:0 }}
             transition={{duration:0.5}}
            className="flex justify-center lg:justify-start">
              <p className="my-2 maxw-xl py-30">{ABOUT_TEXT}</p>
            </motion.div>
          </div>
      </div>
    </div>
  );
};

export default About;
