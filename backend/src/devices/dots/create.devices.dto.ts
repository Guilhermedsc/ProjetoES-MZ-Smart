import { IsMongoId, IsString, Length, IsNumber, IsOptional} from "class-validator"
import { ObjectId } from "typeorm"

export class CreateDeviceDTO {
    @IsMongoId()
    user_id: ObjectId

    @IsString()
    @Length(3, 100)
    model: string

    @IsString()
    @Length(0, 3000)
    description: string

    @IsOptional()
    IMEI?: string

    @IsOptional()
    password?: string
}