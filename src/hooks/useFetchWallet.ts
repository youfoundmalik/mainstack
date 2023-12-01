import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';

import { WalletData } from 'models/wallet';
import { sharedQueriesProps } from 'utils/apis';
import { GeneralService } from '../services/general';
import { walletActions } from 'store/reducers/wallet';

export const useFetchWallet = () => {
  const dispatch = useDispatch();
  const { isLoading } = useQuery({
    queryFn: () => {
      return GeneralService.getWallet();
    },
    queryKey: ['wallet'],
    onSuccess: (data) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      const res = new WalletData(data);
      dispatch(walletActions.push(res));
    },
    ...sharedQueriesProps,
  });

  return isLoading;
};
