import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBoxProps {
  onSearch: (query: string) => void;
  isSearching: boolean;
}

export default function SearchBox({ onSearch, isSearching }: SearchBoxProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl">
      <div className="relative group">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for users..."
          className="w-full px-6 py-4 text-lg rounded-full border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none pr-14 bg-white/80 backdrop-blur-sm group-hover:border-blue-200"
          disabled={isSearching}
        />
        <button
          type="submit"
          disabled={isSearching}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 text-gray-400 hover:text-blue-600 transition-colors bg-white rounded-full hover:bg-blue-50 disabled:opacity-50"
        >
          <Search className={`w-6 h-6 ${isSearching ? 'animate-spin' : ''}`} />
        </button>
      </div>
    </form>
  );
}