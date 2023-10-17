import { SignInState } from '@/app/Models/Auth';
import { asyncForgotPasword } from '@/app/StateManagement/Service/Auth';
import { useMutation } from '@tanstack/react-query';
const useForgotPassword = () => {
  const { isError, isLoading, mutate } = useMutation({
    mutationFn: ({ email }: { email: string }) => asyncForgotPasword({ email }),
    onSuccess: (values: any) => {
      console.log('Success Send');
    },
    onError: (error: Error) => {
      console.log(`Email`);
    },
  });

  return { isError, isLoading, mutate };
};

export default useForgotPassword;
