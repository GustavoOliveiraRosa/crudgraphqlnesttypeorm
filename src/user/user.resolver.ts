import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { User } from './user.entity';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver()
export class UserResolver {
constructor(
    private userService: UserService
){}

@Query(() => [User])
async findUsers(): Promise<User[]>{
    const users = await this.userService.findUsers();
    return users;
}

@Query(() => User)
async findUser(
    @Args('id') id: string
): Promise<User>{
    const user = await this.userService.findUserByID(id);
    return user;
}

@Mutation(() => User)
    async updateUser(
        @Args('id') id: string,
        @Args('data') data: UpdateUserInput
    ): Promise<User> {
        const user = this.userService.updateUser(id, data);
        return user;
    }

@Mutation(() => Boolean)
async deleteUser(
    @Args('id') id: string
): Promise<boolean> {
    const deleted = await this.userService.deleteUser(id);
    return deleted;
}

@Mutation(() => User)
async createUser(
    @Args("data") data: CreateUserInput

): Promise<User> {
    const user = await this.userService.createUser(data)
    return user;
}




}
