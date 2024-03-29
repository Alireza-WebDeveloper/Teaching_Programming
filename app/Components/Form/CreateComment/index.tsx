'use client';
import { FC, useEffect, useState } from 'react';
import { Formik, Form as Formik_Form } from 'formik';
import FormikControl from '../../FormikControl';
import * as Yup from 'yup';
import * as Icons from 'react-icons/md';
import useGetUser from '@/app/Hooks/Auth/useGetUser';
import { toast } from 'react-toastify';
import useGetComment from '@/app/Hooks/Comment/useGetComment';
import useCreateComment from '@/app/Hooks/Comment/useCommentCreate';
// Types

type CreateCommentProps = {};
// InitialValues
const initialValues = {
  text: '',
};

// Validation
const validationSchema = Yup.object().shape({
  text: Yup.string().required('comment is required.'),
});

const CreateComment: FC<CreateCommentProps> = () => {
  // States
  const { refetch: refetchGetComment } = useGetComment();
  const [activeComment, setActiveComment] = useState(false);
  const { data: user, isLoading } = useGetUser();
  const { mutate, isSuccess: isSuccessCreateComment } = useCreateComment();
  // Submit Form
  const handleCreateComment = async (
    values: { text: string },
    options: any
  ) => {
    mutate(values);
    options.resetForm();
    setActiveComment(false);
  };
  // Refetch Get Comments  When Success Create Comment
  useEffect(() => {
    if (isSuccessCreateComment) {
      refetchGetComment();
    }
  }, [isSuccessCreateComment]);
  // Actions
  const handleActiveComment = () => {
    if (user) {
      setActiveComment(true);
    } else {
      toast.error(
        'Unauthorized access. You need to authenticate to access this resource.'
      );
    }
  };
  const handleCloseComment = () => {
    if (user) {
      setActiveComment(false);
    }
  };
  // Return JSX
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleCreateComment}
      validationSchema={validationSchema}
    >
      {(FormikProps) => {
        return (
          <Formik_Form>
            <>
              <div className="flex items-center justify-between mb-5">
                <h1 className="text-xl font-bold">Course comments</h1>
                {!activeComment && !isLoading ? (
                  <button
                    onClick={handleActiveComment}
                    className="flex w-fit items-center font-semibold text-white gap-2 py-2 px-4 mt-2 mb-2 rounded  bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-500 capitalize"
                  >
                    <span> Send a new comment</span>
                    <Icons.MdOutlineAddComment />
                  </button>
                ) : (
                  ''
                )}
              </div>

              {activeComment && (
                <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                  <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                    <label htmlFor="comment" className="sr-only">
                      Your comment
                    </label>
                    <FormikControl
                      control="textArea"
                      name="text"
                      label="Write a comment..."
                    />
                  </div>
                  <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                    <button
                      type="submit"
                      className="inline-flex capitalize items-center py-2.5 px-4  text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                    >
                      Post comment
                    </button>
                    <button
                      onClick={handleCloseComment}
                      type="submit"
                      className="inline-flex capitalize items-center py-2.5 px-4  text-xs font-medium text-center text-white bg-red-700 rounded-lg focus:ring-4 focus:ring-red-200 dark:focus:ring-red-900 hover:bg-red-800"
                    >
                      close
                    </button>
                  </div>
                </div>
              )}
            </>
          </Formik_Form>
        );
      }}
    </Formik>
  );
};

export default CreateComment;
