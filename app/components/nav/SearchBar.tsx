'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import queryString from 'query-string';
import React, { useCallback } from 'react';
import { FieldValues, SubmitErrorHandler, useForm } from 'react-hook-form';

const SearchBar = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      searchTerm: '',
    },
  });

  const onSubmit: SubmitErrorHandler<FieldValues> = async (data) => {
    if (!data.searchTerm) return router.push('/');

    const url = queryString.stringify(
      {
        url: '/',
        query: {
          searchTerm: data.searchTerm,
        },
      },
      { skipNull: true }
    );

    router.push(url);
    reset();
  };

  // Move the useSearchParams hook here
  const params = useSearchParams();

  // Use the params object to get the searchTerm query parameter
  const searchTerm = params?.get('searchTerm');

  return (
    <div className="flex items-center">
      <input
        {...register('searchTerm')}
        autoComplete="off"
        type="text"
        placeholder="Explore Kings.io"
        className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-[0.5px] focus:border-slate-500 w-80 text-black"
        defaultValue={searchTerm}
      />
      <button
        onClick={handleSubmit(onSubmit)}
        className=" bg-blue-700 hover:opacity-80 text-black p-[9px] rounded-r-md"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
