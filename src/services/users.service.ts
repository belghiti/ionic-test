import { User } from '../models/user';

export class UsersService {

    public userIsConnected: boolean = false;

    public static usersList: User[] = [
        {
            fullname: 'arjani fouad',
            username: 'admin',
            password: 'admin',
            email: 'Adam@myapp.fr',
            telephone: '0606060606'
        },
        {
            fullname: 'madani omar',
            username: 'user1',
            password: 'user1',
            email: 'Issame@myapp.fr',
            telephone: '0606060606'
        },
        {
            fullname: 'amrani houda',
            username: 'user2',
            password: 'user2',
            email: 'Houda@myapp.fr',
            telephone: '0606060606'
        },
        {
            fullname: 'alaoui karim',
            username: 'user3',
            password: 'user3',
            email: 'Alaoui@myapp.fr',
            telephone: '0606060606'
        }
    ];

}