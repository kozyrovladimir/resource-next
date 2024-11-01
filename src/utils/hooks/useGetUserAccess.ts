import {useEffect, useState} from "react";
import {api} from '@/shared';

//no check authorisation
export const useGetUserAccess = () => {
   const [userAccess, setUserAccess] = useState(false);
   const [isLoading, setIsLoading] = useState(true);
   const [isError, setIsError] = useState<boolean>(false);

    const getUserAccessFunc = async () => {
      try {
        setIsLoading(true);
        const response = await api.getUserAccess();
        setUserAccess(response.data.access);
        setIsLoading(false);
      } catch (error: any) {
        setIsError(true);
        setIsLoading(false);
      }
    }

    useEffect(() => {
      void getUserAccessFunc();
    }, []);

    return { userAccess, isLoading, isError };
}
