import { IsOptional, IsString, Length, IsNumberString } from "class-validator";

export class UpdateUserDTO {
    @IsOptional()
    @IsString()
    @Length(3, 100)
    name?: string

    @IsOptional()
    @IsNumberString({ no_symbols: true })
    @Length(8, 16)
    phone_number?: string
}
