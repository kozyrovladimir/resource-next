import {useEffect, useMemo, useState} from 'react';
import {api} from '@/shared';
import {axiosErrorHandler} from "../helpers/axiosErrorHandler";

export const useSuccessTeacherTrainingCoursePayment = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await api.successTeacherTrainingCoursePayment();
        setIsLoading(false);
      } catch (error) {
        // @ts-ignore
        setError(axiosErrorHandler(error));
        setIsLoading(false);
      }
    };

    void fetchData();
  }, []);

  return useMemo(() => {
    return {isLoading, error};
  }, [isLoading, error]);
};
