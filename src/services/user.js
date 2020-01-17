import { methods, ServiceMaker } from './index';

const { GET } = methods;

export const listUsers = async () => {
    const result = await ServiceMaker(`/v1/api/v1/api/users`, GET);
    const { _embedded: { users } } = result;
    return users;
}

export const forgotPassword = contact => ServiceMaker(`/v1/api/customer/forgot-password/${contact}`, GET);