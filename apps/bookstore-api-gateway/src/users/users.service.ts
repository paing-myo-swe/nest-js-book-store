import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UsersService {
  constructor(
    // Inject the client proxy
    @Inject('USERS_CLIENT') private usersClient: ClientProxy,
  ) {}

  findAll() {
    // Send the 'users.findAll' event to the users service
    return this.usersClient.send('users.findAll', {});
  }
}
