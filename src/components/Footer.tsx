import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Linkedin, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-purple-400" />
                <p>Court Center: 9490226123</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-purple-400" />
                <p>Bhagya Nagar: 7799587123</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-purple-400" />
                <p>Kurnool Road: 7661064123</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Leadership</h3>
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                <p className="font-semibold">M. KONDAIAH Sir</p>
                <p className="text-purple-300">M.A, B.Ed, M.Phil</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                <p className="font-semibold">V. PADMAJA Madam</p>
                <p className="text-purple-300">M.Sc, B.Ed, M.Phil</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
            <div className="grid grid-cols-3 gap-4">
              <a href="https://facebook.com/gmsongole" className="flex items-center justify-center bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com/gms_ongole" className="flex items-center justify-center bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://x.com/gms_ongole" className="flex items-center justify-center bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://youtube.com/gmsongoleap" className="flex items-center justify-center bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/company/gms-ongole" className="flex items-center justify-center bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://whatsapp.com/channel/0029VafO..." className="flex items-center justify-center bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p>© {new Date().getFullYear()} Gowtham Schools. All rights reserved.</p>
          <p className="mt-2 text-purple-300">Sponsored by PADMAJA EDUCATIONAL SOCIETY</p>
        </div>
      </div>
    </footer>
  );
}