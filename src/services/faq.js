import { methods, ServiceMaker } from './index';

const {
    GET,
    POST,
    PUT,
    DELETE
} = methods;

export const listFAQs = () => ServiceMaker(`/v1/api/fAQs`, GET);

export const createFAQ = data => ServiceMaker(`/v1/api/fAQs/`, POST, null, data);

export const editFAQ = (id, data) => ServiceMaker(`/v1/api/fAQs/${id}`, PUT, null, data);

export const deleteFAQ = id => ServiceMaker(`/v1/api/fAQs/${id}`, DELETE, null);

export const retrack = accountNo => ServiceMaker(`/v1/api/retrack/${accountNo}`, GET);
