import { methods, ServiceMaker } from './index';

const { GET, POST } = methods;

export const fetchCategories = () => ServiceMaker('/v1/api/servicerequest/categories', GET, null);

export const fetchSubCategories = (categoryId) => ServiceMaker(`/v1/api/servicerequest/categories/${categoryId}/subcatageories`, GET, null);

export const create = (accountNo, subCategory, data) =>
    ServiceMaker(`/v1/api/servicerequest/users/${accountNo}/${subCategory}/servicerequest`, POST, null, data);

export const getMyRequests = (accountNo) =>
    ServiceMaker(`/v1/api/servicerequest/users/${accountNo}/servicerequests`, GET, null)