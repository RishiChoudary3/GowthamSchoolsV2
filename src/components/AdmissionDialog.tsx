import React from 'react';
import { X, Send, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

type FormData = {
  studentName: string;
  class: string;
  branch: string;
  phone: string;
  email: string;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AdmissionDialog({ isOpen, onClose }: Props) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const branches = [
    { location: "Court Center", phone: "9490226123" },
    { location: "Bhagya Nagar", phone: "7799587123" },
    { location: "Kurnool Road", phone: "7661064123" }
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
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your enquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg relative animate-fade-in">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-purple-800 mb-6">Admission Enquiry</h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-1">
                Student Name *
              </label>
              <input
                {...register("studentName", { required: "Student name is required" })}
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200"
                placeholder="Enter student name"
                disabled={isSubmitting}
              />
              {errors.studentName && (
                <p className="mt-1 text-sm text-red-600">{errors.studentName.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="class" className="block text-sm font-medium text-gray-700 mb-1">
                Class *
              </label>
              <select
                {...register("class", { required: "Class is required" })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200"
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
                <p className="mt-1 text-sm text-red-600">{errors.class.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="branch" className="block text-sm font-medium text-gray-700 mb-1">
                Branch *
              </label>
              <select
                {...register("branch", { required: "Branch is required" })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200"
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
                <p className="mt-1 text-sm text-red-600">{errors.branch.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
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
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200"
                placeholder="Enter 10-digit phone number"
                disabled={isSubmitting}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
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
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200"
                placeholder="Enter email address"
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
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
  );
}