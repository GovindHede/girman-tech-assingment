import React from 'react';
import { X, User, Phone, MapPin, Mail, Building } from 'lucide-react';
import type { User as UserType } from '../services/userService';

interface UserDialogProps {
  user: UserType;
  onClose: () => void;
}

export default function UserDialog({ user, onClose }: UserDialogProps) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl animate-in zoom-in-95 duration-300">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            User Details
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>
        
        <div className="p-8 space-y-8">
          <div className="flex items-center space-x-6">
            <div className="w-28 h-28 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center">
              <User className="w-14 h-14 text-blue-600" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {user.first_name} {user.last_name}
              </h3>
              <div className="flex items-center space-x-2 text-gray-600">
                <Building className="w-4 h-4" />
                <span className="font-medium">{user.city}</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-4 flex items-center space-x-4 hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-semibold text-gray-900">{user.city}</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-4 flex items-center space-x-4 hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-semibold text-gray-900">{user.contact_number}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-gray-50 rounded-b-2xl">
          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}