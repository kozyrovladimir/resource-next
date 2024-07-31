import {useEffect, useMemo, useState} from 'react';
import {api} from '@/shared';
import {Category} from "@/models/Category";
import {axiosErrorHandler} from "../helpers/axiosErrorHandler";
import {AppDispatch} from "@/store/store";
import {useDispatch} from "react-redux";
import {userSlice} from "@/store/reducers/user-reducer.slice";

export const useFetchCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const dispatch = useDispatch<AppDispatch>();

  const { setUser } = userSlice.actions;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getCategories();
        setCategories(response.data);
        setIsLoading(false);

        const authorized = response.headers.authorized;
        if (authorized === 'false') {
          dispatch(setUser(false));
        } else {
          dispatch(setUser(true));
        }
      } catch (error) {
        // @ts-ignore
        setError(axiosErrorHandler(error));
        setIsLoading(false);
      }
    };

    void fetchData();
  }, []);

  const memoizedState = useMemo(() => {
    return { categories, isLoading, error };
  }, [categories, isLoading, error]);

  return memoizedState;
};

