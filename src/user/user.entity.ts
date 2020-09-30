import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class User{

    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: string;

    @Field(type => String)
    @Column()
    name: string;

    
    @Field(type => String)
    @Column()
    email: string;

}