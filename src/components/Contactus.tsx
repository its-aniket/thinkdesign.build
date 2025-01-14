import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className='mx-4'>
      <span className="left-2 text-neutral-400 uppercase tracking-wider text-sm">contact us</span>
      <div className="mb-4 h-[1px] w-full bg-neutral-300"></div>

      <div className="flex flex-col lg:flex-row gap-6 mb-4">
        {/* Contact Information */}
        <div className="lg:w-1/3 bg-black rounded-[25px] p-8 text-white shadow-2xl">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Email Us</h3>
                <p className="text-neutral-300">info@thinkdesign.build</p>
                <p className="text-neutral-300">support@thinkdesign.build</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Call Us</h3>
                <p className="text-neutral-300">+1 (555) 123-4567</p>
                <p className="text-neutral-300">Mon - Fri: 9:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Visit Us</h3>
                <p className="text-neutral-300">
                  123 Design Street
                  <br />
                  Architecture District
                  <br />
                  City, State 12345
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Business Hours</h3>
                <p className="text-neutral-300">
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: By appointment only
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-2/3 bg-black rounded-[25px] p-8 text-white shadow-2xl">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-lg focus:outline-none focus:border-white transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-lg focus:outline-none focus:border-white transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-lg focus:outline-none focus:border-white transition-colors"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea 
                className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-lg h-32 resize-none focus:outline-none focus:border-white transition-colors"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-neutral-100 transition-colors"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;