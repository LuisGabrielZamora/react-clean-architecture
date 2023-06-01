import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../state';

import {
  generalLayoutSlice,
  IGeneralLayoutState,
} from '../state/generalLayoutSlice';

export const useGeneralLayout = () => {
  const dispatch = useAppDispatch();
  const { actions } = generalLayoutSlice;

  const { menuSelectedKeys } = useSelector(
    (state: RootState) => state.generalLayout
  );

  const dispatchSetMenuSelectedKeys = (params: IGeneralLayoutState) => {
    dispatch(actions.setMenuSelectedKeys(params));
  };

  return { menuSelectedKeys, dispatchSetMenuSelectedKeys };
};
