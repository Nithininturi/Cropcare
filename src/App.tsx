import React from 'react';
import Navbar from './components/Navbar';
import { ArrowRight, Check, Phone, Mail, MapPin, Star, Users, Sprout, Shield, Droplets, Timer, Wifi, Battery, BarChart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-20 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Cropcare
              </h1>
              <p className="text-lg text-gray-600 mb-8">
              CropCare is a forward-thinking venture dedicated to revolutionizing the agriculture industry through innovation, technology, and sustainable practices. We aim to empower farmers with advanced solutions that enhance productivity, improve crop health, and optimize resource management.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Farming"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
            {/* About Section */}
            <section id="about" className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">ABOUT</h2>
            <p className="text-lg text-gray-600">Meet the dedicated leadership team driving CropCare's vision forward.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { name: "Neeraj", role: "CFO" },
              { name: "Nithin", role: "CTO" },
              { name: "Rahul", role: "CEO" },
              { name: "Tarun", role: "CMO" }
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">PRODUCTS</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              
            </p>
          </div>

          {/* Featured Product */}
          <div className="mb-20">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Irrigation System</h3>
                  <p className="text-gray-600 mb-6">
                  Water is one of the most valuable resources in agriculture, and efficient water management is key to sustainable farming. CropCare’s Smart Irrigation System is designed to optimize water usage, reduce waste, and enhance crop health through automated, intelligent irrigation.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span>AI-powered irrigation scheduling</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span>Real-time soil moisture monitoring</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span>Remote control and analytics</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span>Weather-adaptive technology</span>
                    </li>
                  </ul>
                  <a
                    href="#contact"
                    className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors self-start"
                  >
                    Request Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
                <div className="relative">
                  <img
                    src="https://media.istockphoto.com/id/1427564835/photo/automatic-lawn-sprinkler-watering-green-grass-and-icon-of-smart-farming-concept-smart.webp?a=1&b=1&s=612x612&w=0&k=20&c=6v8bnxnYXZFujlnmm_9vp3IEG9ZCGgJGFAdF3WDLSnY="
                    alt="Smart Irrigation System"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Product Features */}
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Droplets className="h-8 w-8 text-green-600" />,
                title: 'Precision Watering',
                description: 'Zone-specific irrigation based on real-time soil conditions'
              },
              {
                icon: <Timer className="h-8 w-8 text-green-600" />,
                title: 'Smart Scheduling',
                description: 'AI-powered timing optimization for maximum efficiency'
              },
              {
                icon: <Wifi className="h-8 w-8 text-green-600" />,
                title: 'Remote Control',
                description: 'Manage your irrigation system from anywhere'
              },
              {
                icon: <BarChart className="h-8 w-8 text-green-600" />,
                title: 'Analytics Dashboard',
                description: 'Comprehensive data insights and usage reports'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">Comprehensive solutions for your agricultural needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Sprout className="h-8 w-8 text-green-600" />,
                title: 'Crop Protection',
                description: 'Advanced solutions to protect your crops from pests and diseases'
              },
              {
                icon: <Shield className="h-8 w-8 text-green-600" />,
                title: 'Soil Management',
                description: 'Expert soil testing and treatment services for optimal growth'
              },
              {
                icon: <Users className="h-8 w-8 text-green-600" />,
                title: 'Consulting Services',
                description: 'Professional guidance for maximizing your agricultural output'
              }
            ].map((service, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">Don't just take our word for it</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "John Smith",
                role: "Farm Owner",
                content: "Cropcare has transformed our farming practices. Their expertise and products have significantly improved our yield.",
                rating: 5
              },
              {
                name: "Sarah Johnson",
                role: "Agricultural Consultant",
                content: "The level of professionalism and knowledge demonstrated by the Cropcare team is outstanding.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600">Get in touch with our experts</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-green-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                  <p className="text-gray-600">+91 9392868270</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-green-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">contact.cropcare@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-green-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Address</h3>
                  <p className="text-gray-600">Madurai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Cropcare</h3>
              <p className="text-gray-400"></p>
              <img src="https://images.unsplash.com/photo-1742795919941-4668c5beb7d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D"  className={'h-40 w-40 text-green-600'} />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Crop Protection</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Soil Management</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Consulting</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Facebook</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">&copy; 2025 Cropcare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;