'use client'
import React from 'react'
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Productgallery from '@/components/Productgallery';
import Image from 'next/image';
import Contactus from '@/components/Contactus';
const index = () => {
  return (
    <div className=" mx-4 mt-[5rem]">
      <div className="rounded-[25px] overflow-hidden md:mt-[5rem]">

<motion.div 
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  className="relative h-[80vh] w-full rounded-[25px]"
>
  <Image
    src="/images/service1/1.png"
    alt="architecture"
    layout="fill"
    objectFit="cover"
    priority={true}
    className="brightness-75"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
    <div className="container mx-auto h-full flex flex-col justify-end p-8">
      <motion.h1 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold text-white mb-4"
      >
        Work that speaks beyond words
      </motion.h1>
      <motion.p 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-xl text-gray-200 max-w-3xl mb-8"
        >
       Discover our portfolio of innovative projects, where creativity meets functionality. Explore how we transform ideas into exceptional designs!
      </motion.p>
      
    </div>
  </div>
</motion.div>
</div>
      <Productgallery/>
      <Contactus />
    </div>
  )
}

export default index