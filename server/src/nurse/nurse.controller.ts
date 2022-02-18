import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { NurseDto } from './nurse.dto';
import { NurseService } from './nurse.service';

@Controller('nurse')
export class NurseController {
    constructor(private service: NurseService) { }

    @Get()
    async getAll() {
      return await this.service.getAllNurses();
    }
  
    @Get(':id')
  getPostById(@Param('id') id: string) {
    return this.service.getNurse(Number(id));
  }
  @Post()
  async createPatient(@Body() nurse: NurseDto){
      return await this.service.createNurse(nurse);
  }
}
