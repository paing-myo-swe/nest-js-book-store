import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // MessagePattern decorator is used to define the message pattern that the handler should listen to.
  @MessagePattern('users.findAll')
  findAll(): any {
    return this.usersService.findAll();
  }

  @Get()
  getHello(): string {
    return this.usersService.getHello();
  }
}
