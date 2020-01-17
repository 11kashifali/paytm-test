import { methods, ServiceMaker } from './index';

const { POST } = methods;

export const fetchAdd = data => ServiceMaker(`/v1/api/report/add-plan`, POST, null, data);

export const fetchPayments = data => ServiceMaker(`/v1/api/report/payment`, POST, null, data);

export const fetchRenew = data => ServiceMaker(`/v1/api/report/renew-plan`, POST, null, data);
