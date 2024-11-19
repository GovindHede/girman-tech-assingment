import { useState } from 'react';
import { User, userService } from '../services/userService';

export function useUserSearch() {
  const [searchResults, setSearchResults] = useState<User[] | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = (query: string) => {
    setIsSearching(true);
    setError(null);

    try {
      if (!query.trim()) {
        setSearchResults(null);
        return;
      }

      const results = userService.searchUsers(query);
      setSearchResults(results);
    } catch (err) {
      setError('An error occurred while searching. Please try again.');
      setSearchResults(null);
    } finally {
      setIsSearching(false);
    }
  };

  return {
    searchResults,
    isSearching,
    error,
    handleSearch
  };
}