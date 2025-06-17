import { Search } from 'lucide-react';

const SearchAndFilter = ({ searchTerm, setSearchTerm, selectedCategory, setSearchSelectedCategory, categories }) => (
  <section className="py-12 bg-gray-50 dark:bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 lg:8">
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSearchSelectedCategory(category)}
                className={`px-4 py-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
      </div>
    </div>
  </section>
);

export default SearchAndFilter;