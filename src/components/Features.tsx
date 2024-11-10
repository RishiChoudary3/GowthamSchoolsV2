import React from 'react';
import { BookOpen, Globe, Activity, Monitor, Users, Calendar, Map, MessageSquare } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "21st Century Life Skills",
      description: "Preparing students for the future with modern skills",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "English for Global Citizens",
      description: "Comprehensive English language education",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1000"
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Activity-Based Learning",
      description: "Interactive and engaging learning experiences",
      image: "https://images.unsplash.com/photo-1489945052260-4f21c52268b9?auto=format&fit=crop&q=80&w=1000"
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "A/C Digital Classrooms",
      description: "Modern facilities with digital learning tools",
      image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=1000"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Separate Playschool Floor",
      description: "Dedicated space for early childhood education",
      image: "https://images.unsplash.com/photo-1544237526-cae15a57ed1e?auto=format&fit=crop&q=80&w=1000"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Regular Feedback",
      description: "Continuous assessment and parent communication",
      image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80&w=1000"
    },
    {
      icon: <Map className="h-6 w-6" />,
      title: "Field Trips & Celebrations",
      description: "Experiential learning opportunities",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=1000"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Conceptual Worksheets",
      description: "Comprehensive learning materials",
      image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">
          Integrated Child Development and Learning System
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg inline-block mb-2">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}