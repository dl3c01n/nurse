import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NurseController } from './nurse.controller';
import Nurse from './nurse.entity';
import { NurseService } from './nurse.service';

@Module({
  imports: [TypeOrmModule.forFeature([Nurse])],
  controllers: [NurseController],
  providers: [NurseService]
})
export class NurseModule {}
