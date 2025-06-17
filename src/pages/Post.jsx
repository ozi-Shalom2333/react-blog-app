import Header from '../components/Header';
import Footer from '../components/Footer';
import PostPage from '../components/PostPage';

const Post = ({ darkMode, setDarkMode }) => (
  <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
    <Header darkMode={darkMode} setDarkMode={setDarkMode} />
    <PostPage />
    <Footer />
  </div>
);

export default Post;