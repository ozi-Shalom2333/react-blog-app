import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from '../components/Header';
import Footer from '../components/Footer';

const About = ({ darkMode, setDarkMode }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero Section */}
      <section
        className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-20"
        data-aos="fade-down"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Behind React Dev Journal
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Built with vision, passion, and code — this space is for aspiring developers who want to grow, build, and leave a mark.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
              My Mission
            </button>
            <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 font-semibold rounded-lg transition-colors">
              My Journey
            </button>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
            data-aos="fade-up"
          >
            Who I Am
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div
              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              data-aos="fade-right"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                My Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                I’m Ozioma — a self-taught frontend developer and creative thinker with a passion for building in public, sharing my growth, and making React accessible for learners everywhere.
                <br /><br />
                I created React Dev Journal to simplify the learning journey for aspiring developers who, like me, are navigating the tech world with limited resources but unlimited ambition. This space is all about real learning, real impact, and real growth.
              </p>
            </div>

            <div
              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              data-aos="fade-left"
              data-aos-delay="150"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                About Me
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                I’m 18, purpose-driven, and determined to become one of the leading minds in frontend development and design. I don’t come from privilege — but I do come with hunger, resilience, and vision.
                <br /><br />
                I believe in staying curious, building things that matter, and helping others along the way. Whether you're here to learn, find inspiration, or connect with someone who’s walking the same path — you’re in the right place.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Join the Journey
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              React Dev Journal is more than just tutorials — it’s a story in motion. Follow the journey, grow with the content, and connect with a young dev who’s chasing greatness one line of code at a time.
            </p>
            <div className="flex justify-center space-x-6" data-aos="zoom-in" data-aos-delay="300">
              {/* Twitter */}
              <a href="#" className="text-gray-400 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <span className="sr-only">Twitter</span>
                 <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>

              {/* GitHub */}
              <a href="#" className="text-gray-400 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <span className="sr-only">GitHub</span>
              <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.602-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.647.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.446-1.268.097-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.543 1.379.2 2.394.097 2.647.64.698 1.03 1.591 1.03 2.682 0 3.841-2.337 4.687-4.565 4.934.359.308.678.916.678 1.847 0 1.332-.012 2.405-.012 2.732 0 .267.18.577.688.479C19.137 20.166 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#" className="text-gray-400 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.255-2.391-1.875-2.391-1.879 0-2.125 1.391-2.125 2.391v5.604h-3v-11h3v1.542c.501-.942 1.316-1.542 2.25-1.542 1.664 0 2.75 1.312 2.75 3.75v6.25z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div data-aos="fade-up" data-aos-delay="400">
        <Footer />
      </div>
    </div>
  );
};

export default About;
