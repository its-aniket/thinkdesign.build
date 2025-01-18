'use client'
import React, { useState } from 'react';
import { ChevronRight, Building, FileText, Home, Trees, PenTool } from 'lucide-react';

const ServiceSelection = () => {
  const [selectedService, setSelectedService] = useState(1);

  const services = [
    {
      id: 1,
      title: 'Construction/Architecture',
      description: 'A building, renovation, or infrastructure project',
      icon: Building
    },
    {
      id: 2,
      title: 'Architecture Development - Feasibility',
      description: 'A Feasibility report',
      icon: FileText
    },
    {
      id: 3,
      title: 'Architecture Development - Turnkey',
      description: 'Comprehensive turnkey solution',
      icon: Home
    },
    {
      id: 4,
      title: 'Interior Design - Fit-out',
      description: 'Fit-out planning',
      icon: Home
    },
    {
      id: 5,
      title: 'Interior Design - Turnkey',
      description: 'Comprehensive turnkey solution',
      icon: Home
    },
    {
      id: 6,
      title: 'Landscape Design',
      description: 'Comprehensive turnkey solution',
      icon: Trees
    },
    {
      id: 7,
      title: 'Drawing Production Service',
      description: 'Comprehensive Revit and BIM services',
      icon: PenTool
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Design Build Services</h1>
        <p className="text-gray-600 text-base md:text-lg">
          Select the service that best matches your project needs. We'll help gather the necessary details to get started.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div 
              key={service.id}
              className={`cursor-pointer transition-all duration-200 hover:shadow-lg rounded-lg border border-gray-200 bg-white ${
                selectedService === service.id ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setSelectedService(service.id)}
            >
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedService && (
        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Additional Information Needed:</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ChevronRight className="w-4 h-4 text-blue-500" />
              <p>Type of project you're planning</p>
            </div>
            <div className="flex items-center space-x-2">
              <ChevronRight className="w-4 h-4 text-blue-500" />
              <p>Your goals or requirements</p>
            </div>
            <div className="flex items-center space-x-2">
              <ChevronRight className="w-4 h-4 text-blue-500" />
              <p>Any specific constraints or preferences</p>
            </div>
            <div className="flex items-center space-x-2">
              <ChevronRight className="w-4 h-4 text-blue-500" />
              <p>The intended timeline or scope</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceSelection;