import { Link, useParams } from 'react-router-dom';
import { User, Calendar } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const PostPage = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Post Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-4">
          Sorry, the post you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <img src={post.image} alt={post.title} className="w-full h-96 object-cover rounded-xl mb-8" />
      <div className="flex items-center mb-4">
        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
          {post.category}
        </span>
        {post.featured && (
          <span className="ml-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </span>
        )}
      </div>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">{post.title}</h1>
      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-8">
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
      <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
        <p>{post.content}</p>
        {/* Add more content paragraphs or other elements as needed */}
      </div>
      <Link
        to="/"
        className="mt-8 inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
      >
        Back to Articles
      </Link>
    </article>
  );
};

export default PostPage;