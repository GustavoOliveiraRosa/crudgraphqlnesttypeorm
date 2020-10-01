import { InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

@InputType()
export class CreateUserInput{

    
    @IsString()
    @IsNotEmpty({message: 'Nao pode estar vazio'})
    name: string;

    @IsEmail()
    @IsNotEmpty({message: 'Nao pode estar vazio'})
    email: string;
    
}

//https://www.youtube.com/watch?v=tVQwV-c19RU