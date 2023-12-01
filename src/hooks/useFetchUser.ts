import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';

import { GeneralService } from '../services/general';
import { userActions } from 'store/reducers/user';
import { sharedQueriesProps } from 'utils/apis';
import { UserData } from 'models/user';

export const useFetchUser = () => {
  const dispatch = useDispatch();
  const { isLoading } = useQuery({
    queryFn: () => {
      return GeneralService.getUser();
    },
    queryKey: ['user'],
    onSuccess: (data) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      const res = new UserData(data);
      dispatch(userActions.push(res));
    },
    ...sharedQueriesProps,
  });

  return isLoading;
};
