"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, Building2,  PencilRuler, HardHat, ClipboardCheck, Cpu, Leaf } from "lucide-react";
import Contactus from "@/components/Contactus";

const phases = [
  {
    title: "Project Initiation",
    icon: <Building2 className="w-8 h-8" />,
    image: "/images/service1/2.png",
    items: [
      {
        subtitle: "Client Brief & Needs Assessment",
        description: "Thorough understanding of the client's vision, project scope, budget, timeline, and desired aesthetics. Comprehensive needs assessment to ensure all requirements are captured."
      },
      {
        subtitle: "Site Analysis & Feasibility Study",
        description: "Evaluation of the site's environmental, regulatory, and physical characteristics. Feasibility assessment to determine project viability, including cost estimates and potential challenges."
      }
    ]
  },
  {
    title: "Design Development",
    icon: <PencilRuler className="w-8 h-8" />,
    image: "/images/service1/3.png",
    items: [
      {
        subtitle: "Conceptual Design",
        description: "Initial sketches and schematic plans to establish the project's overall form, style, and functionality. Presentation of various design options for client feedback."
      },
      {
        subtitle: "Detailed Design",
        description: "Development of detailed plans, elevations, and sections, incorporating client feedback and refining architectural elements."
      },
      {
        subtitle: "Building Information Modeling (BIM)",
        description: "Creation of a 3D digital model of the project, facilitating visualization, coordination, and analysis across disciplines."
      }
    ]
  },
  {
    title: "Construction Documentation",
    icon: <HardHat className="w-8 h-8" />,
    image: "/images/service1/4.png", // Add the image for this phase
    items: [
      {
        subtitle: "Construction Drawings",
        description: "Production of comprehensive construction plans, elevations, sections, and details for all building components. Clear and concise drawings to guide construction teams."
      },
      {
        subtitle: "Specifications & Technical Details",
        description: "Detailed specifications for materials, finishes, systems, and construction methods. Ensuring consistency and quality throughout the project."
      },
      {
        subtitle: "Shop Drawings & Submittal Review",
        description: "Collaboration with contractors and suppliers to ensure accurate fabrication and installation of building elements."
      }
    ]
  },
  {
    title: "Construction Administration",
    icon: <ClipboardCheck className="w-8 h-8" />,
    image: "/images/service1/5.png", // Add the image for this phase
    items: [
      {
        subtitle: "Regular Site Visits",
        description: "Regular site visits to monitor construction progress, ensure compliance with drawings and specifications, and address any issues that may arise."
      },
      {
        subtitle: "Collaboration with Contractors & Consultants",
        description: "Collaboration with contractors, engineers, and other consultants to resolve design and construction challenges, maintain schedule, and manage budget."
      },
      {
        subtitle: "Review & Approval of Shop Drawings",
        description: "Review and approval of shop drawings, material selections, and construction methods to ensure project quality and adherence to design intent."
      }
    ]
  }
,{
    title: "Project Closeout",
    icon: <HardHat className="w-8 h-8" />,
    image: "/images/service1/6.png", // Add the image for this phase
    items: [
      {
        subtitle: "Punch List",
        description: "Final inspection of the project to identify and address any remaining deficiencies or defects before final acceptance."
      },
      {
        subtitle: "Project Completion & Handover",
        description: "Formal handover of the project to the client, including final documentation, warranties, and operational manuals."
      },
      {
        subtitle: "Building Permits & Certifications",
        description: "Ensuring the project meets all applicable building codes and regulations. Obtaining necessary permits and certifications."
      }
    ]
  }
    ,
    {
        title: "Technology Integration",
        icon: <Cpu className="w-8 h-8" />,
        image: "/images/service1/7.png", // Add the image for this phase
        items: [
          {
            subtitle: "BIM Modeling",
            description: "Utilize Building Information Modeling for collaborative design, construction, and project management, ensuring accurate and integrated data."
          },
          {
            subtitle: "Cloud-Based Collaboration",
            description: "Streamline communication and data sharing among project stakeholders through cloud-based platforms, facilitating seamless workflows."
          },
          {
            subtitle: "Virtual Reality & Augmented Reality",
            description: "Offer immersive experiences for clients and stakeholders, visualizing the project's design and potential, fostering better communication and understanding."
          }
        ]
      }
,{
    title: "Sustainable Design Considerations",
    icon: <Leaf className="w-8 h-8" />,
    image: "/images/Project_5/cii-godrej-gbc-new-building1.JPG", // Add the image for this phase
    items: [
      {
        subtitle: "Energy Efficiency",
        description: "Incorporate energy-saving features such as high-performance insulation, efficient lighting, and renewable energy sources."
      },
      {
        subtitle: "Water Conservation",
        description: "Implement water-efficient fixtures, rainwater harvesting systems, and landscaping that minimizes water consumption."
      },
      {
        subtitle: "Material Selection",
        description: "Prioritize sustainable materials with low environmental impact, recycled content, and responsible sourcing practices."
      },
      {
        subtitle: "Indoor Environmental Quality",
        description: "Optimize natural light and ventilation, create healthy indoor environments, and reduce air pollution through careful material selection and building design."
      }
    ]
  }
        
  
  // Add other phases similarly...
];

const Page = () => {
  return (
    <div className=" mx-4 min-h-screen bg-white">
      {/* Hero Section */}
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
              Comprehensive Architectural Project Solution
            </motion.h1>
            <motion.p 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-200 max-w-3xl mb-8"
              >
              detailed roadmap for a successful architectural project, covering each stage of the development process from initial conception to project completion.
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

      {/* Phases Section */}
      <div className="container mx-auto px-4 py-16">
        {phases.map((phase, index) => (
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

      {/* Technology & Sustainability Section */}
      <div className="bg-gray-50 py-16">

        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <Cpu className="w-8 h-8 text-blue-500" />
                <h2 className="text-3xl font-bold">Technology Integration</h2>
              </div>
              {/* Add technology content here */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <Leaf className="w-8 h-8 text-green-500" />
                <h2 className="text-3xl font-bold">Sustainable Design</h2>
              </div>
              {/* Add sustainability content here */}
            </motion.div>
          </div>
        </div>
      </div>
      <Contactus />
    </div>
  );
};

export default Page;