import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import Meeting from 'src/meeting/meeting.entity';
import Nurse from 'src/nurse/nurse.entity';
import Patient from 'src/patient/patient.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'root',
                password: 'root',
                database: 'infirmier',
                entities: [Patient, Nurse, Meeting],
                synchronize: true
            })
    ]
})
export class DatabaseModule {}
