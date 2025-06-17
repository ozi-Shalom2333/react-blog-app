import { Link } from 'react-router-dom';
import { User, Calendar, ArrowRight } from 'lucide-react';

const BlogCard = ({ post, featured = false }) => (
  <article
    className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
      featured ? 'md:col-span-2' : ''
    }`}
  >
    <div className={`${featured ? 'md:flex' : ''}`}>
      <div className={`${featured ? 'md:w-1/2' : ''}`}>
        <img src={post.image} alt={post.title} className="w-full h-48 md:h-full object-cover" />
      </div>
      <div className={`p-6 ${featured ? 'md:w-1/2 md:flex md:flex-col md:justify-center' : ''}`}>
        <div className="flex items-center mb-3">
          <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
            {post.category}
          </span>
          {featured && (
            <span className="ml-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-medium">
              Featured
            </span>
          )}
        </div>
        <Link to={`/post/${post.id}`}>
          <h2
            className={`font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer ${
              featured ? 'text-2xl' : 'text-xl'
            }`}
          >
            {post.title}
          </h2>
        </Link>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(post.date).toLocaleDateString()}
            </div>
          </div>
          <span>{post.readTime}</span>
        </div>
        <Link
          to={`/post/${post.id}`}
          className="mt-4 flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
        >
          Read More
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  </article>
);

export default BlogCard;