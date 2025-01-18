"use client";
import React from "react";
import { Building2, Heart, Globe, Users, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Contactus from "@/components/Contactus";
interface TeamMemberProps {
  image: string;
  name: string;
  achievements: string[];
}
const AboutUs = () => {
  // Animation for image
  React.useEffect(() => {
    gsap.fromTo(
      ".about-image",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 2, ease: "power4.out" }
    );
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-6 mt-[5rem]">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-16">
        <div className="space-y-6 lg:w-1/2">
          <motion.h1
            className="text-4xl lg:text-5xl font-bold text-neutral-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Crafting Exceptional Spaces
          </motion.h1>
          <motion.p
            className="text-lg text-neutral-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Our journey blends creativity and functionality to build innovative
            spaces that inspire. With over 15 years of expertise in design and
            architecture, we bring your visions to life with precision and care.
          </motion.p>
          <div className="flex gap-4">
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <Heart className="w-6 h-6 text-emerald-600" />
              <span className="text-sm">Driven by Passion</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <Users className="w-6 h-6 text-emerald-600" />
              <span className="text-sm">Collaborative Approach</span>
            </motion.div>
          </div>
        </div>
        <motion.div
          className="about-image rounded-2xl overflow-hidden shadow-xl w-full lg:w-1/2 h-[400px] relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        >
          <img
            src="/images/img1.jpg"
            alt="Creative Architecture"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>

      {/* Mission, Vision, Values Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <motion.div
          className="bg-neutral-50 p-8 rounded-xl border border-neutral-200 shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="w-6 h-6 text-emerald-600" />
            <h3 className="text-xl font-semibold">Our Mission</h3>
          </div>
          <p className="text-neutral-600">
            To design exceptional spaces that integrate creativity,
            sustainability, and purpose. Our mission is to bring your dreams to
            life through innovative design solutions.
          </p>
        </motion.div>

        <motion.div
          className="bg-neutral-50 p-8 rounded-xl border border-neutral-200 shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-6 h-6 text-emerald-600" />
            <h3 className="text-xl font-semibold">Our Vision</h3>
          </div>
          <p className="text-neutral-600">
            To be the leading force in architectural and design innovation. We
            aim to set new standards in sustainable, impactful design that
            shapes communities for the better.
          </p>
        </motion.div>

        <motion.div
          className="bg-neutral-50 p-8 rounded-xl border border-neutral-200 shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-6 h-6 text-emerald-600" />
            <h3 className="text-xl font-semibold">Our Values</h3>
          </div>
          <ul className="text-neutral-600 space-y-2">
            <li>Excellence in design and execution</li>
            <li>Sustainability at every step</li>
            <li>Commitment to collaboration</li>
            <li>Innovation and creativity in all projects</li>
          </ul>
        </motion.div>
      </div>

      {/* Core Services */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <motion.div
          className="p-8 bg-neutral-50 rounded-xl border border-neutral-200 shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9 }}
        >
          <Building2 className="w-8 h-8 text-emerald-600 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Architectural Design</h3>
          <p className="text-neutral-600 mb-4">
            We specialize in creating spaces that blend innovation,
            functionality, and aesthetics. Our team crafts designs that are
            timeless and sustainable, elevating the human experience.
          </p>
        </motion.div>

        <motion.div
          className="p-8 bg-neutral-50 rounded-xl border border-neutral-200 shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1 }}
        >
          <Heart className="w-8 h-8 text-emerald-600 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Interior Design</h3>
          <p className="text-neutral-600 mb-4">
            Our interior designs are aimed at crafting environments that are not
            only beautiful but functional. From layout planning to selecting
            materials, we create spaces that resonate with personality and
            style.
          </p>
        </motion.div>
      </div>

      {/* Team Section */}
      <div className="bg-neutral-50 p-12 rounded-3xl shadow-2xl mb-[25px]">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.3 }}
          >
            Meet Our Team
          </motion.h2>
          <motion.p
            className="text-neutral-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            Our team consists of industry leaders with years of expertise. We
            work together to create exceptional spaces that reflect our shared
            values and passion for design.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            className="shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.7 }}
          >
           
              
                <TeamMember
                  image="/images/principle_arch.png"
                  name="Principal Architect"
                  achievements={[
                    "15+ years of architectural experience",
                    "Award-winning design portfolio",
                    "Sustainable design specialist",
                  ]}
                />
            
            
          </motion.div>

          <motion.div
            className="shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.9 }}
          >
            
                <TeamMember
                  image="/images/interior_designer.jpg"
                  name="Interior Design Lead"
                  achievements={[
                    "Extensive commercial project experience",
                    "Custom furniture design expert",
                    "Space optimization specialist",
                  ]}
                />
          </motion.div>
        </div>
      </div>
      <Contactus />
    </div>
  );
};

const TeamMember: React.FC<TeamMemberProps> = ({
  image,
  name,
  achievements,
}) => (
  <div className="bg-white p-6 rounded-xl border border-neutral-200">
    <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
      <img src={image} alt={name} className="object-cover w-full h-full" />
    </div>
    <h4 className="text-xl font-semibold text-center mb-4">{name}</h4>
    <div className="space-y-2">
      {achievements.map((achievement, index) => (
        <div key={index} className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <span className="text-sm text-neutral-600">{achievement}</span>
        </div>
      ))}
    </div>
  </div>
);
export default AboutUs;
