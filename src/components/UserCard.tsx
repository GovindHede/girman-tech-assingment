import React from 'react';
import { User, MapPin, Phone } from 'lucide-react';
import type { User as UserType } from '../services/userService';

interface UserCardProps {
  user: UserType;
  onFetchDetails: (user: UserType) => void;
}

export default function UserCard({ user, onFetchDetails }: UserCardProps) {
  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col transform hover:-translate-y-1">
      <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <User className="w-10 h-10 text-blue-600" />
      </div>
      
      <h3 className="text-xl font-semibold text-center text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
        {user.first_name} {user.last_name}
      </h3>
      
      <div className="space-y-3 mb-6 flex-grow">
        <div className="flex items-center space-x-2 text-gray-600 group-hover:text-gray-900 transition-colors">
          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
            <MapPin className="w-4 h-4 text-blue-600" />
          </div>
          <span className="text-sm font-medium">{user.city}</span>
        </div>
        
        <div className="flex items-center space-x-2 text-gray-600 group-hover:text-gray-900 transition-colors">
          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
            <Phone className="w-4 h-4 text-blue-600" />
          </div>
          <span className="text-sm font-medium">{user.contact_number}</span>
        </div>
      </div>
      
      <button
        onClick={() => onFetchDetails(user)}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
      >
        View Details
      </button>
    </div>
  );
}