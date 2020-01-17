import { methods, ServiceMaker } from './index';

const { GET, POST } = methods;

export const register = data => ServiceMaker('/v1/api/auth/signup', POST, null, data);

export const verifySTB = data => ServiceMaker('/v1/api/auth/verify', POST, null, data);

export const verifyOTP = data => ServiceMaker('/v1/api/auth/verifyOTP', POST, null, data);

export const login = data => ServiceMaker('/v1/api/auth/signin', POST, null, data);

export const getBalance = accountNo => ServiceMaker(`/v1/api/customer/walletBalance/${accountNo}`, GET);

export const resentOTP = mobile => ServiceMaker(`/v1/api/auth/resend-otp/${mobile}`, GET);
