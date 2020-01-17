import { methods, ServiceMaker } from './index';
import { makeDate } from '../modules/auth/utils';

const { GET, PUT, POST } = methods;

export const getActivePlans = async (id) => {
    const result = await ServiceMaker(`/v1/api/customer/plan/active-plan/${id}`, GET, null);
    const { response: { 'active-plans': activePlans } } = result;
    const uniquePacks = {};
    if(Array.isArray(activePlans)) {
        activePlans.forEach(plan => {
            const {
                end_DATE: endDate,
                plan_CODE: planCode
            } = plan;
            const date = makeDate(endDate);
            if(!(planCode in uniquePacks)) {
                uniquePacks[planCode] = plan;
            }
            else {
                const oldDate = makeDate(uniquePacks[planCode].end_DATE);
                if(oldDate < date) {
                    uniquePacks[planCode] = plan;
                }
            }
        });
        result.response['active-plans'] = Array.from(Object.values(uniquePacks));
    }
    return result;
}

export const getInfo = accountNo => ServiceMaker(`/v1/api/customer/info/${accountNo}`, GET);

export const editInfo = data => ServiceMaker('/v1/api/customer/info', PUT, null, data);
export const changepass = data => ServiceMaker('v1/api/customer/change-password', POST, null, data);