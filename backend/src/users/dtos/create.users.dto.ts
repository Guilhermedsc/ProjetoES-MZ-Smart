import { IsNumberString, IsString, Length } from "class-validator"

export class CreateUserDTO {
    @IsNumberString()
    @Length(11, 11)
    cpf: string

    @IsString()
    @Length(3, 100)
    name: string

    @IsNumberString({ no_symbols: true })
    @Length(8, 16)
    phone_number: string
}