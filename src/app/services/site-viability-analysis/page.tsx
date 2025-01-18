"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, Compass, FileSearch, Database, BarChart, Shield } from "lucide-react";
import Contactus from "@/components/Contactus";

const analysisPhases = [
  {
    title: "Site Investigation",
    icon: <Compass className="w-8 h-8" />,
    image: "/images/service2/9.png",
    items: [
      {
        subtitle: "Physical Site Assessment",
        description: "Comprehensive evaluation of site topography, soil conditions, drainage patterns, and existing structures. Detailed documentation of site characteristics and constraints."
      },
      {
        subtitle: "Environmental Analysis",
        description: "Assessment of environmental factors including vegetation, wildlife habitats, and potential contamination. Identification of environmental risks and opportunities."
      }
    ]
  },
  {
    title: "Regulatory Review",
    icon: <FileSearch className="w-8 h-8" />,
    image: "/images/service2/10.png",
    items: [
      {
        subtitle: "Zoning Analysis",
        description: "Detailed review of local zoning ordinances, land use regulations, and development restrictions. Assessment of allowable uses and development potential."
      },
      {
        subtitle: "Code Compliance",
        description: "Evaluation of building codes, safety regulations, and accessibility requirements. Identification of compliance requirements and potential challenges."
      }
    ]
  },
  {
    title: "Infrastructure Assessment",
    icon: <Database className="w-8 h-8" />,
    image: "/images/service2/11.png",
    items: [
      {
        subtitle: "Utility Analysis",
        description: "Assessment of existing utilities including water, sewer, electricity, and telecommunications. Evaluation of capacity and potential upgrade requirements."
      },
      {
        subtitle: "Access & Transportation",
        description: "Analysis of site accessibility, traffic patterns, and transportation infrastructure. Assessment of parking requirements and traffic impact."
      }
    ]
  },
  {
    title: "Market Analysis",
    icon: <BarChart className="w-8 h-8" />,
    image: "/images/service2/12.png",
    items: [
      {
        subtitle: "Demographic Analysis",
        description: "Study of local demographics, market trends, and economic indicators. Assessment of market demand and development opportunities."
      },
      {
        subtitle: "Competition Assessment",
        description: "Analysis of similar developments in the area, market saturation, and competitive advantages. Strategic positioning recommendations."
      }
    ]
  },
  {
    title: "Risk Assessment",
    icon: <Shield className="w-8 h-8" />,
    image: "/images/service2/13.png",
    items: [
      {
        subtitle: "Technical Risks",
        description: "Identification and assessment of technical challenges, construction risks, and mitigation strategies. Development of risk management plans."
      },
      {
        subtitle: "Financial Viability",
        description: "Analysis of development costs, potential returns, and financial feasibility. Assessment of funding options and investment potential."
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
            src="/images/service2/8.png"
            alt="Site Analysis"
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
                Site Viability Analysis
              </motion.h1>
              <motion.p 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-gray-200 max-w-3xl mb-8"
              >
                Comprehensive site assessment services to determine the feasibility and potential of your development project.
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

      {/* Analysis Phases Section */}
      <div className="container mx-auto px-4 py-16">
        {analysisPhases.map((phase, index) => (
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

      <Contactus />
    </div>
  );
};

export default Page;