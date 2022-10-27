import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IArticle } from '../types';
import { formatDate } from '../utils';
interface IPropType {
    article: IArticle;
}

const Blogcard = ({ article }: IPropType) => {
    return (
        <Link href={`/article/${article.attributes.Slug}`} >
        <div className=' rounded-3xl p-4 cursor-pointer min-h-[12vw] hover:bg-[#050e1b] duration-100'>
            
                <h1 className="text-xl text-gray-200 font-bold  ">
                    {article.attributes.Title}
                </h1>
            
            <div className="flex items-center my-4">
                <div className="rounded-lg overflow-hidden flex items-center justify-center mr-2">
                    <Image
                        src={`http://localhost:1337${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`}
                        height={36}
                        width={40}
                    />
                </div>
                <span className="text-sm font-bold text-gray-300">
                    {article.attributes.author.data.attributes.firstname}{' '}
                    {article.attributes.author.data.attributes.lastname} on
                    &nbsp;
                    <span className="text-gray-400">
                        {formatDate(article.attributes.createdAt)}
                    </span>
                </span>
            </div>
            <div className="text-gray-300 font-semibold">
                {article.attributes.shortDescription.slice(0, 250)}{' '}
                {article.attributes.shortDescription.length > 250 ? '...' : ''}
            </div>
        </div>
        </Link>
    );
};

export default Blogcard;
