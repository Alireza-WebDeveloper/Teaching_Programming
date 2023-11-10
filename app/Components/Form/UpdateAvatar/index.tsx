'use client';
import { Formik, Form as Formik_Form } from 'formik';
import * as Yup from 'yup';
import AvatarPreview from './avatarPreview';
import useUpdateAvatar from '@/app/Hooks/Auth/useUpdateAvatar';
const initialValues: { avatar: File | null } = {
  avatar: null,
};

// Validation
const validationSchema = Yup.object().shape({
  avatar: Yup.mixed()
    .required('Please select an image.')
    .test(
      'FILE_SIZE',
      'The selected file is too large. Please choose a file under 1MB.',
      (value: any) => value && value.size < 1024 * 1024
    )
    .test(
      'FILE_TYPE',
      'Invalid file type. Please select a valid image file (e.g., JPEG or PNG).',
      (value: any) => value && ['image/jpeg', 'image/png'].includes(value.type)
    ),
});

const UpdateAvatar = () => {
  const { mutate } = useUpdateAvatar();
  const handleSubmit = (values: any) => {
    mutate(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(FormikProps) => {
        return (
          <Formik_Form className="space-y-4 w-full">
            <div className="flex items-center gap-3 w-full">
              <input
                type="file"
                name="avatar"
                onChange={(e: any) => {
                  FormikProps.setFieldValue('avatar', e?.target?.files[0]);
                }}
                className="bg-gray-50 w-[95%] placeholder:capitalize border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-3 text-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <button
                type="submit"
                className="bg-green-600 text-xl py-2.5 px-5 text-white p-2 rounded"
              >
                Update
              </button>
            </div>
            {FormikProps.errors.avatar && (
              <p className="text-red-600">{FormikProps.errors.avatar}</p>
            )}
            {FormikProps.values.avatar && !FormikProps.errors.avatar ? (
              <AvatarPreview file={FormikProps.values.avatar} />
            ) : (
              ''
            )}
          </Formik_Form>
        );
      }}
    </Formik>
  );
};

export default UpdateAvatar;
