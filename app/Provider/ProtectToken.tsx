'use client';

import useGetUser from '../Hooks/Auth/useGetUser';

const ProtectToken = ({ children }: any) => {
  const {} = useGetUser();
  return <>{children}</>;
};

export default ProtectToken;
