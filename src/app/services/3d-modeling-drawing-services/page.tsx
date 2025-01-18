"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, Pen, Layout, Box, Monitor } from "lucide-react";
import Contactus from "@/components/Contactus";

const servicePhases = [
  {
    title: "Architectural Visualization",
    icon: <Box className="w-8 h-8" />,
    image: "/images/service1/1.png",
    items: [
      {
        subtitle: "Exterior Rendering",
        description: "Photorealistic 3D visualization of building exteriors, showcasing architectural design, materials, and landscaping with stunning detail and accuracy."
      },
      {
        subtitle: "Interior Visualization",
        description: "Detailed 3D renderings of interior spaces, highlighting spatial layouts, lighting, materials, and furnishings for immersive client presentations."
      }
    ]
  },
  {
    title: "Technical Documentation",
    icon: <Pen className="w-8 h-8" />,
    image: "/images/service6/22.png",
    items: [
      {
        subtitle: "Construction Drawings",
        description: "Precise technical drawings including floor plans, elevations, sections, and construction details for building permit applications and construction."
      },
      {
        subtitle: "Shop Drawings",
        description: "Detailed manufacturing and assembly drawings for custom elements, ensuring accurate fabrication and installation of components."
      }
    ]
  },
  {
    title: "BIM Modeling",
    icon: <Layout className="w-8 h-8" />,
    image: "/images/service6/23.png",
    items: [
      {
        subtitle: "3D BIM Development",
        description: "Creation of comprehensive Building Information Models incorporating architectural, structural, and MEP systems for improved coordination."
      },
      {
        subtitle: "4D Scheduling",
        description: "Integration of construction schedules with 3D models to visualize project phasing and optimize construction sequences."
      }
    ]
  },
  {
    title: "Product Modeling",
    icon: <Box className="w-8 h-8" />,
    image: "/images/service6/24.png",
    items: [
      {
        subtitle: "Product Design",
        description: "Detailed 3D modeling of products and prototypes with precise specifications for manufacturing and presentation purposes."
      },
      {
        subtitle: "Assembly Modeling",
        description: "Creation of detailed assembly models showing component relationships, movement mechanics, and installation sequences."
      }
    ]
  },
  {
    title: "Animation & Walkthrough",
    icon: <Monitor className="w-8 h-8" />,
    image: "/images/service6/25.png",
    items: [
      {
        subtitle: "Virtual Tours",
        description: "Interactive 3D walkthroughs allowing clients to explore spaces virtually and experience the design before construction."
      },
      {
        subtitle: "Marketing Animations",
        description: "Dynamic 3D animations showcasing project features, design concepts, and construction sequences for promotional materials."
      }
    ]
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
            src= "/images/service1/7.png"
            alt="3D Modeling Services"
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
                3D Modeling & Drawing Services
              </motion.h1>
              <motion.p 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-gray-200 max-w-3xl mb-8"
              >
                Transform your ideas into stunning 3D visualizations with our comprehensive modeling and technical drawing services.
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

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        {servicePhases.map((phase, index) => (
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
                  <motion.div 
                    key={i} 
                    className="p-6 bg-gray-50 rounded-xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-xl font-semibold mb-2">{item.subtitle}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Contactus />
    </div>
  );
};

export default Page;