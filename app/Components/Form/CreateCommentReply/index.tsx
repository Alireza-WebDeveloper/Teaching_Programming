'use client';
import { FC, useState } from 'react';
import { Formik, Form as Formik_Form } from 'formik';
import FormikControl from '../../FormikControl';
import * as Yup from 'yup';
import { useParams } from 'next/navigation';
import { asyncCreateReplyByCourseAndComment } from '@/app/StateManagement/Service/Comment';
import * as Icons from 'react-icons/md';
import useGetUser from '@/app/Hooks/Auth/useGetUser';
import { toast } from 'react-toastify';
// Types

type CreateCommentReplyProps = {
  commentId: string;
};
// InitialValues
const initialValues = {
  text: '',
};

// Validation
const validationSchema = Yup.object().shape({
  text: Yup.string().required('comment is required.'),
});

const CreateCommentReply: FC<CreateCommentReplyProps> = ({ commentId }) => {
  // States
  const { id: courseId }: { id: string } = useParams();
  const [activeComment, setActiveComment] = useState(false);
  const { data: user, isLoading } = useGetUser();
  // Submit Form
  const handleCreateCommentReply = async (values: any) => {
    try {
      await asyncCreateReplyByCourseAndComment(courseId, commentId, {
        text: values.text,
      });
    } catch (err) {}
  };
  // Actions
  const handleActiveCommentReply = () => {
    if (user) {
      setActiveComment(true);
    } else {
      toast.error('Please log in to your account');
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
      onSubmit={handleCreateCommentReply}
      validationSchema={validationSchema}
    >
      {(FormikProps) => {
        return (
          <Formik_Form>
            <>
              {!activeComment && !isLoading ? (
                <button
                  onClick={handleActiveCommentReply}
                  className="flex w-fit items-center font-semibold gap-2 py-1 px-2 rounded hover:bg-gray-300 dark:hover:bg-gray-900 capitalize"
                >
                  <Icons.MdReply />
                  <span>reply</span>
                </button>
              ) : (
                ''
              )}
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
                      reply comment
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

export default CreateCommentReply;
