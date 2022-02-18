import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MeetingDto } from './meeting.dto';
import Meeting from './meeting.entity';

@Injectable()
export class MeetingService {
    constructor(
        @InjectRepository(Meeting)
        private meetingRepository: Repository<Meeting>
      ) {}

    geteAllMeetings(): Promise<Meeting[]>{
        return this.meetingRepository.find()
    }

    getMeeting(id: number): Promise<Meeting>{
        const meeting = this.meetingRepository.findOne(id)
        if (meeting) {
            return meeting;
          }
          throw new HttpException('Meeting not found', HttpStatus.NOT_FOUND);
    }

    async createMeeting(meeting: MeetingDto) {
        const newMeeting = await this.meetingRepository.create(meeting);
        await this.meetingRepository.save(newMeeting);
        return newMeeting;
      }

      async deleteMeeting(id: number) {
        const deletedMeeting = await this.meetingRepository.delete(id);
        if (!deletedMeeting.affected) {
          throw new HttpException('Meeting not found', HttpStatus.NOT_FOUND);
        }
      }
    
      async updateMeeting(id: number, meeting: MeetingDto) {
        await this.meetingRepository.update(id, meeting);
        const updatedMeeting = await this.meetingRepository.findOne(id);
        if (updatedMeeting) {
          return updatedMeeting
        }
        throw new HttpException('Meeting not found', HttpStatus.NOT_FOUND);
      }
}
