import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { PatientModule } from './patient/patient.module';
import { NurseModule } from './nurse/nurse.module';
import { MeetingModule } from './meeting/meeting.module';
@Module({
  imports: [DatabaseModule, PatientModule, NurseModule, MeetingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
