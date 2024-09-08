import { Column, Entity, ObjectId, ObjectIdColumn, } from "typeorm"

@Entity()
export class Users {
    @ObjectIdColumn()
    _id: ObjectId

    @Column({ unique: true })
    cpf: string

    @Column()
    name: string

    @Column()
    phone_number: string
}