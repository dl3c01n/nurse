import Nurse from 'src/nurse/nurse.entity';
import Patient from 'src/patient/patient.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
class Meeting {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public data: Date;
    
    @OneToOne(() => Patient, patient => patient.id)
    @JoinColumn()
    public patient: Patient;

    @OneToOne(() => Nurse, nurse => nurse.id)
    @JoinColumn()
    public nurse: Nurse;
}

export default Meeting;