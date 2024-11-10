import React, { useState } from 'react';
import { MapPin, Phone, Send, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

type FormData = {
  studentName: string;
  class: string;
  branch: string;
  phone: string;
  email: string;
};

export default function Admissions() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const branches = [
    {
      location: "Court Center",
      phone: "9490226123",
      image: "https://i.ibb.co/Nx0nvR2/gms-building.jpg",
      description: "Located in the heart of the city"
    },
    {
      location: "Bhagya Nagar",
      phone: "7799587123",
      image: "https://i.ibb.co/rGQQBQ3/Screenshot-2024-11-10-at-8-46-37-AM.png",
      description: "Modern campus in Bhagya Nagar"
    },
    {
      location: "Kurnool Road",
      phone: "7661064123",
      image: "https://i.ibb.co/Xz3dwXh/PHOTO-2024-06-01-18-54-39.jpg",
      description: "Spacious campus on Kurnool Road"
    }
  ];

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      
      const templateParams = {
        to_email: 'admissions@gmsongole.com',
        student_name: data.studentName,
        class: data.class,
        branch: data.branch,
        phone: data.phone,
        email: data.email || 'Not provided'
      };

      await emailjs.send(
        'service_9cjlbbc',
        'template_qpcwcqx',
        templateParams,
        'JYi8NlKp6UccPd_vD'
      );

      alert('Thank you for your enquiry. We will contact you soon!');
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your enquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="admissions" className="py-20 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Admissions Open</h2>
          <p className="text-xl mb-12">Nursery To X Standard</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {branches.map((branch, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <div className="relative h-48">
                  <img 
                    src={branch.image}
                    alt={`${branch.location} Campus`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-purple-200" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{branch.location}</h3>
                  <p className="text-purple-200 mb-4">{branch.description}</p>
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <p>{branch.phone}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6 text-center">Admission Enquiry</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="studentName" className="block text-sm font-medium mb-2">
                  Student Name *
                </label>
                <input
                  {...register("studentName", { required: "Student name is required" })}
                  type="text"
                  id="studentName"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50 text-white placeholder-white/50"
                  placeholder="Enter student name"
                  disabled={isSubmitting}
                />
                {errors.studentName && (
                  <p className="mt-1 text-sm text-red-300">{errors.studentName.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="class" className="block text-sm font-medium mb-2">
                  Class *
                </label>
                <select
                  {...register("class", { required: "Class is required" })}
                  id="class"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50 text-white"
                  disabled={isSubmitting}
                >
                  <option value="">Select class</option>
                  <option value="Nursery">Nursery</option>
                  <option value="LKG">LKG</option>
                  <option value="UKG">UKG</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((grade) => (
                    <option key={grade} value={`Class ${grade}`}>
                      Class {grade}
                    </option>
                  ))}
                </select>
                {errors.class && (
                  <p className="mt-1 text-sm text-red-300">{errors.class.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="branch" className="block text-sm font-medium mb-2">
                  Branch *
                </label>
                <select
                  {...register("branch", { required: "Branch is required" })}
                  id="branch"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50 text-white"
                  disabled={isSubmitting}
                >
                  <option value="">Select branch</option>
                  {branches.map((branch, index) => (
                    <option key={index} value={branch.location}>
                      {branch.location}
                    </option>
                  ))}
                </select>
                {errors.branch && (
                  <p className="mt-1 text-sm text-red-300">{errors.branch.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  {...register("phone", { 
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Please enter a valid 10-digit phone number"
                    }
                  })}
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50 text-white placeholder-white/50"
                  placeholder="Enter 10-digit phone number"
                  disabled={isSubmitting}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-300">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email ID
                </label>
                <input
                  {...register("email", {
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please enter a valid email address"
                    }
                  })}
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50 text-white placeholder-white/50"
                  placeholder="Enter email address"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-300">{errors.email.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-purple-700 py-3 px-6 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Submit Enquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}