import { Controller, Get, Post } from '@nestjs/common';
import { LatihanService } from './latihan.service';

@Controller('latihan')
export class LatihanController {
  constructor(private readonly appService: LatihanService) {}

  @Get()
  getHello(): string {
    return "Hello";
  }

  @Get('test-route')
  testRoute(): string {
    return "Test Route";
  }
}
