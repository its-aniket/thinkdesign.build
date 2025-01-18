"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, Sofa, Palette, Ruler, Layers, Lamp, Home, Briefcase, Heart } from "lucide-react";
import Contactus from "@/components/Contactus";

const interiorServices = [
  {
    title: "Residential Interiors",
    icon: <Home className="w-8 h-8" />,
    image: "/images/interior-resedential/1.jpg",
    items: [
      {
        subtitle: "Living Spaces",
        description: "Create warm and inviting living rooms that balance comfort with style. Custom furniture layouts and decor solutions that reflect your lifestyle."
      },
      {
        subtitle: "Bedrooms & Personal Spaces",
        description: "Design peaceful retreats with carefully selected color palettes, lighting, and furnishings that promote relaxation and rejuvenation."
      },
      {
        subtitle: "Kitchens & Bathrooms",
        description: "Functional and beautiful designs for your most-used spaces, incorporating modern amenities and timeless aesthetics."
      }
    ]
  },
  {
    title: "Commercial Interiors",
    icon: <Briefcase className="w-8 h-8" />,
    image: "/images/interior-office/5.jpg",
    items: [
      {
        subtitle: "Office Spaces",
        description: "Create productive work environments that inspire creativity and collaboration. Space planning that maximizes efficiency and employee comfort."
      },
      {
        subtitle: "Retail Spaces",
        description: "Design engaging retail environments that enhance customer experience and showcase products effectively."
      },
      {
        subtitle: "Hospitality Interiors",
        description: "Develop unique atmospheres for hotels, restaurants, and entertainment venues that leave lasting impressions on guests."
      }
    ]
  },
  {
    title: "Design & Planning",
    icon: <Ruler className="w-8 h-8" />,
    image: "/images/service4/16.png",
    items: [
      {
        subtitle: "Space Planning",
        description: "Optimize layout and flow through expert space planning and furniture arrangement. Create functional zones that enhance daily activities."
      },
      {
        subtitle: "Color Consultation",
        description: "Develop harmonious color schemes that set the right mood and complement your existing elements."
      },
      {
        subtitle: "3D Visualization",
        description: "Experience your space before implementation through detailed 3D renderings and virtual walkthroughs."
      }
    ]
  },
  {
    title: "Custom Solutions",
    icon: <Heart className="w-8 h-8" />,
    image: "/images/service4/17.png",
    items: [
      {
        subtitle: "Custom Furniture",
        description: "Design and create bespoke furniture pieces that perfectly fit your space and style requirements."
      },
      {
        subtitle: "Storage Solutions",
        description: "Develop clever storage solutions that maximize space while maintaining aesthetic appeal."
      },
      {
        subtitle: "Lighting Design",
        description: "Create layered lighting plans that enhance ambiance and functionality through carefully selected fixtures and placements."
      }
    ]
  }
];

const specialties = [
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Material Selection",
    description: "Expert guidance in choosing materials that balance aesthetics, durability, and sustainability."
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Color Psychology",
    description: "Strategic use of color to influence mood and behavior in each space."
  },
  {
    icon: <Lamp className="w-6 h-6" />,
    title: "Lighting Design",
    description: "Comprehensive lighting solutions that enhance both function and atmosphere."
  },
  {
    icon: <Sofa className="w-6 h-6" />,
    title: "Furniture Curation",
    description: "Thoughtful selection and arrangement of furniture pieces that complement your space."
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
            src="/images/interior-resedential/3.jpg"
            alt="Interior Solutions"
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
                Complete Interior Solutions
              </motion.h1>
              <motion.p 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-gray-200 max-w-3xl mb-8"
              >
                Transform your space with our comprehensive interior design services, where functionality meets aesthetic excellence.
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
        {interiorServices.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-blue-500 text-white rounded-xl">
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

      {/* Specialties Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Design Specialties
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-500 text-white rounded-lg">
                    {specialty.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{specialty.title}</h3>
                </div>
                <p className="text-gray-600">{specialty.description}</p>
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