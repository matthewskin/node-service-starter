import axios from 'axios';
import logger from '../logging/winston-logger';
import UserList from '../models/UserListModel';
import { get } from '../utils/requestUtils';

const serviceOneMethod = (): string => {
    return 'Value from serviceOneMethod';
};

const serviceTwoMethod = async (): Promise<UserList> => {
    const userList: UserList = await get('https://reqres.in/api/users?page=2');

    userList.data.forEach(user => {
        logger.info(`${user.first_name} ${user.last_name}`);
    });

    return userList;
};

export { serviceOneMethod, serviceTwoMethod }