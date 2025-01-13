"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { projects } from '@/constants';

const ProjectGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loadedImages, setLoadedImages] = useState(new Set());

  const categories = ['All', 'Commercial', 'Hotel', 'Institutes', 'Residential', 'Interior design'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  const handleImageLoad = (id: number) => {
    setLoadedImages((prev) => new Set([...prev, id]));
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div
        className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 [column-fill:_balance]"
        style={{ columnFill: 'balance' }}
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: loadedImages.has(project.id) ? 1 : 0 }}
            exit={{ opacity: 0 }}
            className="break-inside-avoid mb-6"
          >
            <div className="relative group rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={500}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  quality={90}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  onLoadingComplete={() => handleImageLoad(project.id)}
                />
                {/* Overlay */}
                <div className="absolute w-full inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end justify-start">
                  <div className="flex w-full items-start flex-col p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                    <h3 className="text-white text-xl font-bold text-left">{project.title}</h3>
                    <p className="text-white/80 text-sm mt-2 text-left">{project.category}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
