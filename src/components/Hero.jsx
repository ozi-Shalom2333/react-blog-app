const Hero = () => (
  <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
        Master React Development
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
        Join our community of React developers. Learn through tutorials, explore new libraries, 
        and stay updated with the latest trends in React development.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
          Start Learning
        </button>
        <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 font-semibold rounded-lg transition-colors">
          Browse Articles
        </button>
      </div>
    </div>
  </section>
);

export default Hero;