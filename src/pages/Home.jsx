import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from '../components/Header';
import Hero from '../components/Hero';
import SearchAndFilter from '../components/SearchAndFilter';
import BlogCard from '../components/BlogCard';
import Newsletter from '../components/NewsLetter';
import Footer from '../components/Footer';
import { blogPosts, categories } from '../data/blogPosts';

const Home = ({ darkMode, setDarkMode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <div data-aos="fade-up">
        <Hero />
      </div>

      <div data-aos="fade-up" data-aos-delay="100">
        <SearchAndFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
        />
      </div>

      {featuredPosts.length > 0 && (
        <section className="py-16" data-aos="fade-up" data-aos-delay="150">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <BlogCard data-aos="zoom-in" data-aos-delay={index * 100} key={post.id} post={post} featured={true} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-gray-50 dark:bg-gray-800" data-aos="fade-up" data-aos-delay="200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
            </h2>
            <span className="text-gray-600 dark:text-gray-400">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
            </span>
          </div>
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <div data-aos="fade-up" data-aos-delay={index * 100} key={post.id}>
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12" data-aos="fade-up">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No articles found matching your search criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      <div data-aos="fade-up" data-aos-delay="250">
        <Newsletter />
      </div>

      <div data-aos="fade-up" data-aos-delay="300">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
