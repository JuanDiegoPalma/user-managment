import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity'


@Injectable()
export class UsersService {
  private users: User[] = [];

  create(userDto: CreateUserDto) {
    const newUser: User = { id: Date.now(), ...userDto };
    this.users.push(newUser);
    return newUser;
  }

  findAll() {
    return this.users;
  }

  remove(id: string) {
    const userId = Number(id);
    const prevLength = this.users.length;
    this.users = this.users.filter(user => user.id !== userId);
    return { deleted: prevLength !== this.users.length };
  }
}