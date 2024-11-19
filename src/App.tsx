import { useState } from 'react';
import Navbar from './components/Navbar';
import SearchBox from './components/SearchBox';
import UserCard from './components/UserCard';
import UserDialog from './components/UserDialog';
import EmptyState from './components/EmptyState';
import { Search } from 'lucide-react';
import { useUserSearch } from './hooks/useUserSearch';
import type { User } from './services/userService';

export default function App() {
  const { searchResults, isSearching, error, handleSearch } = useUserSearch();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {!searchResults && (
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-2 mb-8">
                <Search className="w-12 h-12 text-blue-600" />
                <h1 className="text-4xl font-bold text-gray-900">
                  Girman Technologies
                </h1>
              </div>
            </div>
          )}
          
          <div className="flex justify-center mb-8">
            <SearchBox onSearch={handleSearch} isSearching={isSearching} />
          </div>

          {error && (
            <div className="text-center text-red-600 mb-4">
              {error}
            </div>
          )}
          
          {searchResults && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {searchResults.length > 0 ? (
                searchResults.map((user, index) => (
                  <UserCard
                    key={`${user.first_name}-${user.last_name}-${index}`}
                    user={user}
                    onFetchDetails={setSelectedUser}
                  />
                ))
              ) : (
                <div className="col-span-full">
                  <EmptyState />
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      
      {selectedUser && (
        <UserDialog
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </div>
  );
}