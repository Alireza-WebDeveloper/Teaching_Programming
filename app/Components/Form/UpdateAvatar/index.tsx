'use client';
import useUpdateAvatar from '@/app/Hooks/Auth/useUpdateAvatar';
import { useState, ChangeEvent, FormEvent } from 'react';

const UpdateAvatar = () => {
  const { mutate } = useUpdateAvatar();
  const [file, setFile] = useState<File | null>(null);

  const handleUpdateAvatar = (e: FormEvent) => {
    e.preventDefault();
    if (file) {
      const formData: any = new FormData();
      formData.append('avatar', file);
      mutate(formData);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <form
      onSubmit={handleUpdateAvatar}
      className="w-full p-8 bg-white dark:bg-gray-900 shadow-md rounded-lg"
    >
      <label
        className="block text-gray-700 dark:text-white text-sm font-bold mb-2"
        htmlFor="file"
      >
        Choose your avatar:
      </label>
      <input
        id="file"
        type="file"
        onChange={handleFileChange}
        className="border rounded p-2 w-full"
      />
      <button
        type="submit"
        className="mt-4 bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 hover:bg-green-600   text-white font-bold py-2 px-4 rounded"
      >
        Update
      </button>
    </form>
  );
};

export default UpdateAvatar;
