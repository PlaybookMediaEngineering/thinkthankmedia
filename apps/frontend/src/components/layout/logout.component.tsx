'use client';

import { useFetch } from '@gitroom/helpers/utils/custom.fetch';
import { deleteDialog } from '@gitroom/react/helpers/delete.dialog';
import { useVariables } from '@gitroom/react/helpers/variable.context';
import { useCallback } from 'react';

export const LogoutComponent = () => {
  const fetch = useFetch();
  const {isGeneral} = useVariables();
  const logout = useCallback(async () => {
    if (await deleteDialog('Are you sure you want to logout?', 'Yes logout')) {
      await fetch('/user/logout', {
        method: 'POST',
      });

      window.location.href = '/';
    }
  }, []);

  return <div className="text-red-400 cursor-pointer" onClick={logout}>Logout from {isGeneral ? 'Instant' : 'Spur'}</div>;
};
