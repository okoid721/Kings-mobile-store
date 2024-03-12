'use client';
import React from 'react';
import Containers from '@/app/components/Containers';
import { categories } from '@/utils/Categorise';
import CategoriesItems from './CategoriesItems';
import {
  usePathname,
  useSearchParams,
} from 'next/dist/client/components/navigation';

const Categories = async () => {
  const params = await useSearchParams();
  const category = params?.get('category');

  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) return null;

  return (
    <div className=" bg-white">
      <Containers>
        <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
          {categories.map((item: any) => (
            <CategoriesItems
              key={item.label}
              label={item.label}
              icon={item.icon}
              selected={
                category === item.label ||
                (category === null && item.label === 'All')
              }
            />
          ))}
        </div>
      </Containers>
    </div>
  );
};

export default Categories;
