"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, Trees, Flower2, Cloud, Shovel, Droplets, Sun } from "lucide-react";
import Contactus from "@/components/Contactus";

const landscapeServices = [
  {
    title: "Garden Design",
    icon: <Flower2 className="w-8 h-8" />,
    image: "/images/service5/19.png",
    items: [
      {
        subtitle: "Custom Garden Planning",
        description: "Create beautiful, sustainable gardens tailored to your space and lifestyle. Expert plant selection and arrangement for year-round appeal."
      },
      {
        subtitle: "Hardscape Integration",
        description: "Design and installation of pathways, patios, and decorative elements that complement your garden space."
      }
    ]
  },
  {
    title: "Sustainable Landscaping",
    icon: <Trees className="w-8 h-8" />,
    image: "/images/service5/20.png",
    items: [
      {
        subtitle: "Native Plant Design",
        description: "Incorporate local plant species that thrive naturally in your climate while supporting local ecosystem."
      },
      {
        subtitle: "Water Conservation",
        description: "Smart irrigation systems and water-efficient landscape design to minimize environmental impact."
      }
    ]
  },
  {
    title: "Maintenance Services",
    icon: <Shovel className="w-8 h-8" />,
    image: "/images/service5/21.png",
    items: [
      {
        subtitle: "Regular Maintenance",
        description: "Comprehensive care programs including pruning, mowing, and seasonal clean-up to keep your landscape beautiful."
      },
      {
        subtitle: "Health Monitoring",
        description: "Regular assessment of plant health and early detection of potential issues to maintain landscape vitality."
      }
    ]
  }
];

const features = [
  {
    icon: <Sun className="w-6 h-6" />,
    title: "Climate-Adapted Design",
    description: "Designs optimized for local weather conditions"
  },
  {
    icon: <Droplets className="w-6 h-6" />,
    title: "Smart Irrigation",
    description: "Efficient watering systems for optimal plant health"
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Eco-Friendly Solutions",
    description: "Sustainable practices and materials"
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
            src="/images/service5/18.png"
            alt="Landscape Excellence"
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
                Landscape Excellence Services
              </motion.h1>
              <motion.p 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-gray-200 max-w-3xl mb-8"
              >
                Creating sustainable, beautiful outdoor spaces that harmonize with nature and enhance your lifestyle.
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
        {landscapeServices.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-green-600 text-white rounded-xl">
                {service.icon}
              </div>
              <h2 className="text-3xl font-bold">{service.title}</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="space-y-6">
                {service.items.map((item, i) => (
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

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-green-600 text-white rounded-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
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