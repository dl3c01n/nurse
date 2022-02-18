import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
class Patient {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public firstName: string;

    @Column()
    public lastName: string;

    @Column()
    public age: number;

    @Column()
    public city: string;
}

export default Patient;