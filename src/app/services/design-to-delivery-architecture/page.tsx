"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, Palette, Home, Lightbulb, Users, Award, ClipboardList } from "lucide-react";
import Contactus from "@/components/Contactus";

const designPhases = [
  {
    title: "From Vision to Reality",
    icon: <Lightbulb className="w-8 h-8" />,
    image: "/images/service1/3.png",
    items: [
      {
        subtitle: "Concept",
        description: "We begin by deeply understanding your needs, preferences, and lifestyle to create a foundation for your perfect space."
      },
      {
        subtitle: "Design",
        description: "Our team of experienced architects and interior designers crafts a bespoke design plan tailored to your vision."
      },
      {
        subtitle: "Execution",
        description: "We collaborate with skilled contractors to bring your vision to life with precision and attention to detail."
      }
    ]
  },
  {
    title: "Architectural Design",
    icon: <Home className="w-8 h-8" />,
    image: "/images/service3/14.png",
    items: [
      {
        subtitle: "Sustainable Design",
        description: "We incorporate eco-friendly materials and energy-efficient technologies to create environmentally conscious spaces."
      },
      {
        subtitle: "Functionality",
        description: "We prioritize flow, accessibility, and maximizing usable space to enhance your daily living experience."
      },
      {
        subtitle: "Aesthetics",
        description: "We create a cohesive and visually stunning architectural experience that stands the test of time."
      }
    ]
  },
  {
    title: "Interior Design",
    icon: <Palette className="w-8 h-8" />,
    image: "/images/interior-resedential/10.jpg",
    items: [
      {
        subtitle: "Color Palette",
        description: "We curate a color scheme that reflects your personality and complements the architectural design, creating harmony throughout your space."
      },
      {
        subtitle: "Furniture Selection",
        description: "We source furniture that is both functional and aesthetically pleasing, blending seamlessly into your space while meeting your needs."
      },
      {
        subtitle: "Finishing Touches",
        description: "We add decorative accents, artwork, and lighting to enhance the ambiance and complete the design to perfection."
      }
    ]
  },
  {
    title: "Building Relationships",
    icon: <Users className="w-8 h-8" />,
    image: "/images/service3/15.png",
    items: [
      {
        subtitle: "Communication",
        description: "We maintain open and transparent communication throughout the entire process, keeping you informed and involved."
      },
      {
        subtitle: "Collaboration",
        description: "We work closely with you at every step, ensuring that your vision is realized exactly as you imagined."
      },
      {
        subtitle: "Trust",
        description: "We build strong relationships based on trust and mutual respect, creating lasting partnerships with our clients."
      }
    ]
  }
];

const achievements = [
  {
    icon: <ClipboardList className="w-6 h-6" />,
    title: "Experience",
    description: "Years of experience in both residential and commercial projects."
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Awards",
    description: "Recognized for our innovative designs and dedication to excellence."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Client Satisfaction",
    description: "We take pride in our high level of client satisfaction and repeat business."
  }
];

const Page = () => {
  return (
    <div className="mx-4 min-h-screen bg-white">
      {/* Hero Section */}
      <div className="rounded-[25px] overflow-hidden md:mt-[5rem]">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative h-[80vh] w-full rounded-[25px]"
        >
          <Image
            src="/images/interior-resedential/1.jpg"
            alt="Design to Delivery"
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
                Crafting Spaces That Reflect You
              </motion.h1>
              <motion.p 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-gray-200 max-w-3xl mb-8"
              >
                Welcome to a world where imagination meets reality. We specialize in creating custom architectural and interior design solutions that perfectly reflect your unique vision.
              </motion.p>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="animate-bounce"
              >
                <ChevronDown className="w-10 h-10 text-white" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Design Phases Section */}
      <div className="container mx-auto px-4 py-16">
        {designPhases.map((phase, index) => (
          <motion.div
            key={phase.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-blue-500 text-white rounded-xl">
                {phase.icon}
              </div>
              <h2 className="text-3xl font-bold">{phase.title}</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <Image
                  src={phase.image}
                  alt={phase.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="space-y-6">
                {phase.items.map((item, i) => (
                  <div key={i} className="p-6 bg-gray-50 rounded-xl">
                    <h3 className="text-xl font-semibold mb-2">{item.subtitle}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Achievements Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            A Legacy of Excellence
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-500 text-white rounded-lg">
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{achievement.title}</h3>
                </div>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Contactus />
    </div>
  );
};

export default Page;