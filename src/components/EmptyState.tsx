import React from 'react';
import { SearchX } from 'lucide-react';

export default function EmptyState() {
  return (
    <div className="text-center py-16">
      <div className="w-24 h-24 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl mx-auto mb-6 flex items-center justify-center animate-pulse">
        <SearchX className="w-12 h-12 text-blue-600" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">No Results Found</h3>
      <p className="text-gray-600 max-w-md mx-auto">
        We couldn't find any users matching your search criteria.
        <br />
        Try adjusting your search terms or try a different query.
      </p>
    </div>
  );
}