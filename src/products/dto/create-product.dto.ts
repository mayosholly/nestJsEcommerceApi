import { IsArray, IsNotEmpty, IsNumber, IsPositive, IsString, Min } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty({message: 'Title cannot be blank'})
    @IsString({message: 'Title must be a string'})
    title:string;

    @IsNotEmpty({message: 'Description cannot be blank'})
    @IsString({message: 'Description must be a string'})
    description:string;

    @IsNotEmpty({message: 'Price cannot be blank'})
    @IsNumber({maxDecimalPlaces: 2}, {message:'price should be a number and 2 decimal'})
    @IsPositive({message: 'Price should be a positive number'})
    price:number;

    @IsNotEmpty({message: 'Stock should not be empty'})
    @IsNumber({}, {message:' Stock should be a number'})
    @Min(0,{message:'Stock number cannot be negative'})
    stock:number;

    @IsNotEmpty({message: 'images should not be empty'})
    @IsArray({message: 'images should be in array format'})
    images:string[]

    @IsNotEmpty({message: 'category should not be empty'})
    @IsNumber({},{message: 'category id should be a number'})
    categoryId:number;
}
