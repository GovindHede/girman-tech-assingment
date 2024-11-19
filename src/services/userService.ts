import users from '../data/users.json';

export interface User {
  first_name: string;
  last_name: string;
  city: string;
  contact_number: string;
}

export class UserService {
  private users: User[];

  constructor() {
    this.users = users;
  }

  searchUsers(query: string): User[] {
    const sanitizedQuery = query.trim().toLowerCase();
    
    if (!sanitizedQuery) {
      return [];
    }

    return this.users.filter(user => {
      const searchableFields = [
        user.first_name,
        user.last_name,
        user.city,
        user.contact_number
      ];

      return searchableFields.some(field => 
        field.toLowerCase().includes(sanitizedQuery)
      );
    });
  }
}

export const userService = new UserService();