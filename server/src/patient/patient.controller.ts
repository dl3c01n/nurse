import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PatientDto } from './patient.dto';
import { PatientService } from './patient.service';

@Controller('patient')
export class PatientController {
    constructor(private service: PatientService) { }

  @Get()
  async getAll() {
    return await this.service.getAllPatients();
  }

  @Get(':id')
getPostById(@Param('id') id: string) {
  return this.service.getPatient(Number(id));
}
@Post()
async createPatient(@Body() patient: PatientDto){
    return await this.service.createPatient(patient);
}
}
