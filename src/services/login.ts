export const postLoginWxMinAPI = (data: LoginWxMinParams) => {
  return Promise.resolve({
    name: "测试用户",
    token: "mock_token",
  } as LoginResult);
};

export const postLoginWxMinSimpleAPI = (phoneNumber: string) => {
  return Promise.resolve({
    name: "模拟用户",
    token: "mock_token_simple",
  } as LoginResult);
};

export const postLoginAPI = (data: LoginParams) => {
  return Promise.resolve({
    name: "传统登录用户",
    token: "mock_token_traditional",
  } as LoginResult);
};
