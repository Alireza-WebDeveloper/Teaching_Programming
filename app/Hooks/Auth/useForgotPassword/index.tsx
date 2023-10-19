import { SignInState } from '@/app/Models/Auth';
import { asyncForgotPasword } from '@/app/StateManagement/Service/Auth';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
const useForgotPassword = () => {
  const { isError, isLoading, mutate, isSuccess } = useMutation({
    mutationFn: ({ email }: { email: string }) => asyncForgotPasword({ email }),
    onSuccess: (values: any) => {
      const { message } = values.data;
      toast.success(`${message}`);
    },
    onError: (error: Error) => {
      toast.error(`${error.message}`);
    },
  });

  return { isError, isLoading, mutate, isSuccess };
};

export default useForgotPassword;
