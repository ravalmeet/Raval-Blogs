import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { ICategory } from '../types';

interface IPropType {
    categories: ICategory[];
    handleOnSearch: (query: string) => void;
}
const Tabs = ({ categories, handleOnSearch }: IPropType) => {
    const router = useRouter();

    const isActiveLink = (category: ICategory) => {
        return category.attributes.Slug === router.query.category;
    };

    return (
        <div >
            <div className="my-8 flex items-center justify-between font-semibold  border-b-2 border-gray-500 pl-6 " >
            <ul className="flex items-center">
                <li
                    className={
                        'mr-6 pb-6 rounded-sm ' +
                        `${
                            router.pathname === '/'
                                ? ' text-primary'
                                : ' text-gray-200'
                        }`
                    }>
                    <Link href="/">Recent</Link>
                </li>
                {categories.map((category) => {
                    return (
                        <li
                            key={category.id}
                            className={
                                'mr-6 pb-6 rounded-sm ' +
                                `${
                                    isActiveLink(category)
                                        ? ' text-primary'
                                        : ' text-gray-200'
                                }`
                            }>
                            <Link
                                href={`/category/${category.attributes.Slug}`}>
                                {category.attributes.Title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            </div>
            
         <div className="min-w-[78vw] border border-gray-700 rounded-3xl   flex justify-center px-8 py-2 items-center mx-4 lg:mx-0 ">
               
                <input
                    onChange={(e) => handleOnSearch(e.target.value)}
                    type="text"
                    placeholder="Search"
                    className="outline-none px-2 bg-[#0A182E] text-white py-1 ml-1 w-full"
                />
                 <svg
                    className="h-4 fill-gray-200"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                </svg>
            </div>
        </div>
         
    );
};

export default Tabs;
