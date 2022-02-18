import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
class Nurse {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public firstName: string;

    @Column()
    public lastName: string;
}

export default Nurse;