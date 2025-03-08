import React from 'react';
import { getNewsInfo } from '@/api';
import { newsType } from '@/types';
import Link from 'next/link';
import Image from 'next/image';

const News = async () => {
    const getNews = await getNewsInfo()
    const newsData: newsType[] = Array.isArray(getNews.articles) ? getNews.articles : [];


    return (
        
        <div className='w-[300px] bg-white rounded-md px-2 md:px-6 py-2 flex flex-col'>

            <h1 className='text-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                    bg-clip-text text-transparent animate-gradient-move font-bold mb-4'>News - Top Headlines</h1>
            
            <div className="flex flex-col gap-4">
                {newsData.map((news) => (
                    <Link key={`${news.title}`} href={news.url} legacyBehavior>
                        <a target="_blank">
                            <div className="relative w-full h-[150px] mb-4 transition duration-300 hover:scale-110">
                                <Image src={news?.urlToImage != null ? news.urlToImage
                                    : '/imgs/football.jpg'
                                } alt={news.description} fill className='object-cover rounded-md' />
                                <div className="absolute bottom-0 left-0 w-full p-2 z-10 bg-gradient-to-t from-zinc-900 to-transparent">
                                    <p className="font-semibold text-lg hover:text-transparent  bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-500">{news.title}</p>
                                </div>
                            </div>
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default News;