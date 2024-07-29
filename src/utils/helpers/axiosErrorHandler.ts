import { AxiosError } from 'axios';

export const axiosErrorHandler = (error: any): string => {
  if (error instanceof AxiosError) {
    return error.response?.data?.message || error.message;
  } else {
    return 'Unknown error';
  }
};
