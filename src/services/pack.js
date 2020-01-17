import { methods, ServiceMaker } from './index';

const { GET, POST } = methods;

export const getBasePlansByRegion = (region, dp = 0) =>
    ServiceMaker(`/v1/api/customer/plan/base-package/by?region=${region}&dp=${dp}`, GET);

export const getAlaCarteByRegion = (region, dp = 0) =>
    ServiceMaker(`/v1/api/customer/plan/channel-package/by?region=${region}&dp=${dp}`, GET);

export const getIndigitalPlansByRegion = (region, dp = 0) =>
    ServiceMaker(`/v1/api/customer/plan/indigital-package/by?region=${region}&dp=${dp}`, GET);

export const getBroadcasterPlansByRegion = (region, dp = 0) =>
    ServiceMaker(`/v1/api/customer/plan/broadcaster-package/by?region=${region}&dp=${dp}`, GET);

export const addPlan = (accountNo, data) =>
    ServiceMaker(`/v1/api/customer/plan/add/${accountNo}`, POST, null, data);

export const renewPlan = async (accountNo, data) => {
    const renewResult = await ServiceMaker(`/v1/api/customer/plan/renew/${accountNo}`, POST, null, data);
    const { response: { result: statuses } } = renewResult;
    return statuses;
}
