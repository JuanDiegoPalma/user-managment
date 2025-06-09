import { Injectable } from '@nestjs/common';
import { User } from './users/user.entity'; 
import { CreateUserDto } from './users/dto/create-user.dto';

@Injectable()
export class AppService {
  private users: User[] = [];

  createUser(createUserDto: CreateUserDto): User {
    const newUser = { id: Date.now(), ...createUserDto }; 
    this.users.push(newUser);
    return newUser;
  }

  getUsers(): User[] {
    return this.users;
  }

  deleteUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }
}