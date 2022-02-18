import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NurseDto } from './nurse.dto';
import Nurse from './nurse.entity';


@Injectable()
export class NurseService {
    constructor(
        @InjectRepository(Nurse)
        private nurseRepository: Repository<Nurse>
      ) {}

    getAllNurses(): Promise<Nurse[]>{
        return this.nurseRepository.find()
    }

    getNurse(id: number): Promise<Nurse>{
        const nurse = this.nurseRepository.findOne(id)
        if (nurse) {
            return nurse;
          }
          throw new HttpException('Nurse not found', HttpStatus.NOT_FOUND);
    }

    async createNurse(nurse: NurseDto) {
        const newNurse = await this.nurseRepository.create(nurse);
        await this.nurseRepository.save(newNurse);
        return newNurse;
      }

      async deleteNurse(id: number) {
        const deletedNurse = await this.nurseRepository.delete(id);
        if (!deletedNurse.affected) {
          throw new HttpException('Nurse not found', HttpStatus.NOT_FOUND);
        }
      }
    
      async updateNurse(id: number, nurse: NurseDto) {
        await this.nurseRepository.update(id, nurse);
        const updatedNurse = await this.nurseRepository.findOne(id);
        if (updatedNurse) {
          return updatedNurse
        }
        throw new HttpException('Nurse not found', HttpStatus.NOT_FOUND);
      }
}
