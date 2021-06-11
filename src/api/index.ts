import axios, { AxiosResponse } from 'axios';
import CONSTANTS from 'src/config';
import NAMES from 'src/routes/names';
import { cache } from 'swr';

const { LH_TOKEN_NAME } = CONSTANTS;

const delay = (amount: number) =>
  new Promise((resolve) => setTimeout(resolve, amount));

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

api.interceptors.response.use(async (request) => {
  if (['development', 'test'].some((elem) => elem === process.env.NODE_ENV)) {
    await delay(Number(process.env.REACT_APP_API_DELAY));
  }
  return request;
});

// Interceptors para o caso de usuário não autorizado
api.interceptors.response.use(undefined, (err: AxiosResponse) => {
  if (err.status === 401) {
    // --> limpar o cache (limpando tudo)
    cache.clear();
    // --> Remove a token do local storage
    localStorage.removeItem(LH_TOKEN_NAME);
    // --> Remove authorization do header
    api.defaults.headers.authorization = undefined;
    // --> redireciona para o login
    window.location.replace(NAMES.LOGIN);
  }
  return Promise.reject(err);
});

export default api;
