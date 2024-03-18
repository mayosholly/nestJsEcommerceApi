import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto{

    @IsNotEmpty({message: 'Please Provide a valid title'})
    @IsString({message: 'Title should be a string'})
    title: string;

    @IsNotEmpty({message: 'Description should not be empty'})    
    @IsString({message: 'Description should be a string'})    
    description: string;
}