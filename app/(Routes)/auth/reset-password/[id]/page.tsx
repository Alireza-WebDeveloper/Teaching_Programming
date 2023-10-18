'use client';
import useGetUser from '@/app/Hooks/Auth/useGetUser';
import {
  asyncCheckCodeResetPassword,
  asyncCheckTokenResetPassword,
  asyncResetPassword,
} from '@/app/StateManagement/Service/Auth';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import CodePassword from '@/app/Components/Form/CodePassword';
import ResetPassword from '@/app/Components/Form/ResetPassword';
import { useRouter } from 'next/navigation';
const Page = () => {
  const { data: user, isLoading } = useGetUser();
  const router = useRouter();
  const [checkTokenResetPassword, setCheckTokenResetPassword] = useState(false);
  const [checkCodeResetPassword, setCheckCodeResetPassword] = useState(false);
  const [code, SetCode] = useState<any>(null);
  const { id } = useParams();
  const handleResetPassword = async (values: any) => {
    try {
      const newData: any = {
        password: values.password,
        passwordConfirm: values.passwordConfirm,
        id,
        code,
      };
      await asyncResetPassword(newData);
      router.push('/auth/signin');
    } catch (err) {}
  };

  const handleCheckCodeToken = async (values: { code: string }) => {
    const newData = { id, code: values.code };
    asyncCheckCodeResetPassword(newData)
      .then((response) => {
        setCheckCodeResetPassword(true);
        SetCode(values.code);
      })
      .catch((err) => {
        //
      });
  };
  useEffect(() => {
    if (isLoading) {
      //
    } else if (!user) {
      asyncCheckTokenResetPassword(id)
        .then((res) => {
          setCheckTokenResetPassword(true);
        })
        .catch((err: any) => {
          console.log(err);
        });
    }
  }, [user]);
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
              <CodePassword handleCheckCodeToken={handleCheckCodeToken} />
            </>
          ) : checkCodeResetPassword && checkTokenResetPassword ? (
            <>
              <section className="relative">
                <h1 className="text-4xl font-semibold">reset password</h1>
                <span className="absolute -bottom-2.5 w-[50%] h-1 bg-purple-800 dark:bg-purple-300 rounded"></span>
              </section>
              <p className="text-center text-lg">please confirm new Password</p>
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
