import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput} from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository : Repository<User>
    ){}

    // Buscando todos os usuarios
    async findUsers() : Promise<User[]> {
        const users = await this.userRepository.find();
        return users;
    }

    // Buscando usuário especifico por id

    async findUserByID(id:string): Promise<User> {
        const user = await this.userRepository.findOne(id);
        if (!user){
            throw new NotFoundException('Usuário não encontrado');
        }
        return user;
    }


    // Update de usuários

    async updateUser(id:string, data:UpdateUserInput): Promise<User>{
        const user = await this.findUserByID(id);
        await this.userRepository.update(user, {...data});
        const userUpdated = this.userRepository.create({...user, ...data});
        return userUpdated;
    }

    // Deletando Usuário por ID
    async deleteUser(id: string): Promise<boolean>{
        const user = await this.findUserByID(id);

        const deleted = await this.userRepository.delete(user);
        if(deleted){
            return true;
        }
        return false
    }



    // Criando usuário
    async createUser(data: CreateUserInput): Promise<User> {
        const user = await this.userRepository.create(data);
        const userSaved = await this.userRepository.save(user);
        if (!userSaved){

            throw new InternalServerErrorException('Problema ao criar usuario')

        }
        return userSaved;

    }




}
