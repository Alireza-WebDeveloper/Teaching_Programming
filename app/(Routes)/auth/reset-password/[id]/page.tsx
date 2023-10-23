'use client';
import useGetUser from '@/app/Hooks/Auth/useGetUser';
import {
  asyncCheckCodeResetPassword,
  asyncCheckTokenResetPassword,
} from '@/app/StateManagement/Service/Auth';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import useResetPassword from '@/app/Hooks/Auth/useResetPassword';
import CodePassword from '@/app/Components/Form/CodePassword';
import ResetPassword from '@/app/Components/Form/ResetPassword';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { CodeResetPasswordState, ResetPasswordState } from '@/app/Models/Auth';

const Page = () => {
  const { data: user, isLoading } = useGetUser();
  const router = useRouter();
  const { id } = useParams();
  // Of Request 1
  const [checkTokenResetPassword, setCheckTokenResetPassword] = useState(false);
  const [timeOut, setTimeOut] = useState<any>(null);
  // Of Request 2
  const [checkCodeResetPassword, setCheckCodeResetPassword] = useState(false);
  const [code, SetCode] = useState<any>(null);
  // Of Request 3
  const { mutate } = useResetPassword();
  // 1 ) Check Token On URl(Id)
  useEffect(() => {
    if (!isLoading && !user) {
      asyncCheckTokenResetPassword(id)
        .then((res: any) => {
          setCheckTokenResetPassword(true);
          setTimeOut(res.data.timeOut);
        })
        .catch((err: any) => {
          toast.error(`${err.message}`);
          router.push('/');
        });
    }
  }, [user, isLoading]);

  useEffect(() => {
    if (timeOut) {
      const timer = setInterval(() => {
        if (timeOut > 0) {
          setTimeOut(timeOut - 1);
        }
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [timeOut, router]);
  if (timeOut === 0) {
    return router.push('/auth/signin');
  }

  // 2 ) Request Send Check Code Of Email
  const handleCheckCodeToken = async (values: CodeResetPasswordState) => {
    const newData = { id, code: values.code };
    asyncCheckCodeResetPassword(newData)
      .then((res: any) => {
        setCheckCodeResetPassword(true);
        SetCode(values.code);

        toast.success(res.data.message);
      })
      .catch((err: any) => {
        toast.error(`${err.message}`);
      });
  };

  // 3 ) Send Request Reset Password
  const handleResetPassword = async (values: ResetPasswordState) => {
    const newData: any = {
      password: values.password,
      passwordConfirm: values.passwordConfirm,
      id,
      code,
    };
    mutate(newData);
  };

  return (
    <div className="grid place-items-center grid-cols-1 gap-10">
      {isLoading ? (
        ''
      ) : !user ? (
        <>
          {checkTokenResetPassword && !checkCodeResetPassword ? (
            <>
              <section className="relative">
                <h1 className="text-4xl font-semibold">reset password</h1>
                <span className="absolute -bottom-2.5 w-[50%] h-1 bg-purple-800 dark:bg-purple-300 rounded"></span>
              </section>
              <p className="text-center text-lg">
                please confirm code of email
              </p>
              <p className="text-sm">
                Time remaining:{' '}
                <span className="font-bold text-blue-600 dark:text-blue-400">
                  {timeOut}
                </span>{' '}
                seconds
              </p>
              <CodePassword handleCheckCodeToken={handleCheckCodeToken} />
            </>
          ) : checkCodeResetPassword && checkTokenResetPassword ? (
            <>
              <section className="relative">
                <h1 className="text-4xl font-semibold">reset password</h1>
                <span className="absolute -bottom-2.5 w-[50%] h-1 bg-purple-800 dark:bg-purple-300 rounded"></span>
              </section>
              <p className="text-center text-lg">please confirm new Password</p>
              <p className="text-sm">
                Time remaining:{' '}
                <span className="font-bold text-blue-600 dark:text-blue-400">
                  {timeOut}
                </span>{' '}
                seconds
              </p>
              <ResetPassword handleResetPassword={handleResetPassword} />
            </>
          ) : (
            ''
          )}
        </>
      ) : (
        redirect('/')
      )}
    </div>
  );
};

export default Page;
