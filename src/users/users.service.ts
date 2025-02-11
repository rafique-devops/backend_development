import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            id: 1,
            username: 'john',
            email: 'john@email.com'
        },
        {
            id: 2,
            username: 'chris',
            email: 'chris@email.com'
        }
    ];

    findAll() {
        return this.users;
    }

    findOne(id: number) {
        return this.users.find(user => user.id === id);
    }
}
