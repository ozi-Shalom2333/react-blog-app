import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate newsletter subscription
    console.log('Subscribed with:', email);
    setEmail('');
    alert('Thank you for subscribing!');
  };

  return (
    <section className="py-16 bg-blue-600 dark:bg-blue-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Stay Updated with React Development
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Get the latest tutorials, tips, and React news delivered to your inbox weekly.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 bg-white py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-300"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;