import { methods, ServiceMaker } from './index';

const { POST, GET } = methods;

export const createRequest = async data => {
    const result = await ServiceMaker('/v1/api/pg/order/request/quickpay', POST, null, data);
    console.log('got result : ', result);
    const {
        response: {
            redirect: REDIRECT_URL,
            parameters
        }
    } = result;
    return {
        REDIRECT_URL,
        parameters
    }
}

export const getStatus = async id => ServiceMaker(`/v1/api/pg/order/status/${id}`, GET);
