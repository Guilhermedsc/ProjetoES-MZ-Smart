import { Column, Entity, ObjectId, ObjectIdColumn, } from "typeorm"
import { DeviceStatus } from "./dots/update.devices.dto"

@Entity()
export class Devices {
    @ObjectIdColumn()
    _id: ObjectId

    @ObjectIdColumn({ foreignKeyConstraintName: "user_id" })
    user_id: ObjectId

    @Column()
    model: string

    @Column()
    description: string

    @Column()
    registered_at: Date

    @Column()
    status: DeviceStatus

    @Column({ default: 0, type: 'double' })
    value: number

    @Column({ nullable: true })
    IMEI?: string

    @Column({ nullable: true})
    Senha?: string 

    @Column({ nullable: true })
    solution_description?: string

    @Column({ nullable: true })
    solution_at?: Date
}
