import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRef, useEffect } from 'react';

const Contact = ({ darkMode, setDarkMode }) => {
  const form = useRef();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_wixbt1q',
        'template_gn0zt5g',
        form.current,
        'o83y8yMpC3qQD8OjL'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Thank you for your message! I will get back to you soon.');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Oops! Something went wrong. Please try again.');
        }
      );
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero Section */}
      <section
        className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-20"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            data-aos="zoom-in"
          >
            Contact Me
          </h1>
          <p
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            data-aos="fade-up"
          >
            Have a question, suggestion, or collaboration idea? Feel free to reach out to me directly!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
              Send a Message
            </button>
            <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 font-semibold rounded-lg transition-colors">
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
            data-aos="zoom-in"
          >
            Get in Touch
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div
              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              data-aos="fade-right"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit} ref={form} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    required
                    placeholder="Your name"
                    className="mt-1 block w-full p-3.5 rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    required
                    placeholder="Your email"
                    className="mt-1 block w-full p-3.5 rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    placeholder="Your message"
                    className="mt-1 block w-full rounded-md border-gray-300 p-4 dark:border-gray-600 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div
              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              data-aos="fade-left"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Contact Details
              </h3>
              <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                  <span>Email: okaozisol45@gmail.com</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                  <span>Phone: +2347025687867</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                  <span>Location: Apapa, Lagos</span>
                </li>
              </ul>
              <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                I’m available to respond to your messages during standard working hours (9 AM - 5 PM
                WAT). Looking forward to hearing from you!
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
