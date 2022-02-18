import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PatientDto } from './patient.dto';
import Patient from './patient.entity';

@Injectable()
export class PatientService {
    constructor(
        @InjectRepository(Patient)
        private patientRepository: Repository<Patient>
      ) {}

    getAllPatients(): Promise<Patient[]>{
        return this.patientRepository.find()
    }

    getPatient(id: number): Promise<Patient>{
        const patient = this.patientRepository.findOne(id)
        if (patient) {
            return patient;
          }
          throw new HttpException('Patient not found', HttpStatus.NOT_FOUND);
    }

    async createPatient(patient: PatientDto) {
        const newPatient = await this.patientRepository.create(patient);
        await this.patientRepository.save(newPatient);
        return newPatient;
      }

      async deletePatient(id: number) {
        const deletedPatient = await this.patientRepository.delete(id);
        if (!deletedPatient.affected) {
          throw new HttpException('Patient not found', HttpStatus.NOT_FOUND);
        }
      }
    
      async updatePatient(id: number, patient: PatientDto) {
        await this.patientRepository.update(id, patient);
        const updatedPatient = await this.patientRepository.findOne(id);
        if (updatedPatient) {
          return updatedPatient
        }
        throw new HttpException('Patient not found', HttpStatus.NOT_FOUND);
      }
}
