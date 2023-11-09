'use client';
import { FC } from 'react';
import { Formik, Form as Formik_Form } from 'formik';
import FormikControl from '../../FormikControl';
import * as Yup from 'yup';
import useUpdateAvatar from '@/app/Hooks/Auth/useUpdateAvatar';
// Types

type UpdateAvatarProps = {};
// InitialValues
const initialValues: any = {
  avatar: '',
};

// Validation
const validationSchema = Yup.object().shape({
  avatar: Yup.mixed(),
});

const UpdateAvatar: FC<UpdateAvatarProps> = () => {
  // States
  const { mutate } = useUpdateAvatar();
  // Submit Form
  const handleFilterProucts = async (values: { avatar: string }) => {
    mutate(values);
  };
  // Return JSX
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleFilterProucts}
      validationSchema={validationSchema}
    >
      {(FormikProps) => {
        return (
          <Formik_Form>
            <div className="flex flex-col space-y-5">
              <FormikControl control="file" name="avatar" type="file" />
              <section className="flex flex-col space-y-2">
                <button
                  type="submit"
                  className="bg-green-600 w-full py-2 rounded-lg capitalize px-4 text-2xl text-white"
                >
                  update
                </button>
              </section>
            </div>
          </Formik_Form>
        );
      }}
    </Formik>
  );
};

export default UpdateAvatar;
