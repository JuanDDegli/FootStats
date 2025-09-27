"use client"

import React, { useState, useCallback } from 'react';
import type { newsType } from '@/types';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NewsProps {
    initialNews: newsType[];
    error: string | null;
}

const News = ({ initialNews, error }: NewsProps) => {
    const [newsData] = useState<newsType[]>(initialNews);
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextNews = useCallback(() => {
        if (newsData && newsData.length > 0) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % newsData.length);
        }
    }, [newsData]);

    const prevNews = () => {
        if (newsData && newsData.length > 0) {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + newsData.length) % newsData.length);
        }
    };

    if (error) {
         return (
            <div className="text-center text-red-600 p-8">
                <p>{error}</p>
            </div>
         )
    }

    if (!newsData || newsData.length === 0) {
        return (
            <div className="w-full bg-white rounded-md px-2 md:px-6 py-4 flex flex-col">
                <h1 className='text-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-move font-bold mb-4'>Últimas Notícias</h1>
                <div className="text-center text-gray-600 p-8">
                    <p>Nenhuma notícia encontrada no momento.</p>
                </div>
            </div>
        )
    }

    return (
        <div className='w-full bg-white rounded-md px-2 md:px-6 py-4 flex flex-col'>
            <h1 className='text-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-move font-bold mb-4'>Últimas Notícias</h1>
            
            <div className="relative">
                <div className="relative group">
                    <Link href={newsData[currentIndex].url} target="_blank" rel="noopener noreferrer">
                        <div className="relative w-full h-[250px] md:h-[400px] mb-4 transition duration-300 transform group-hover:scale-105">
                            <img
                                src={newsData[currentIndex].image}
                                alt={newsData[currentIndex].title}
                                className='w-full h-full object-cover rounded-md'
                                loading="lazy"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-4 z-10 bg-gradient-to-t from-black/80 to-transparent rounded-b-md">
                                <p className="font-bold text-lg text-white">{newsData[currentIndex].title}</p>
                            </div>
                        </div>
                    </Link>
                    <button onClick={prevNews} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <ChevronLeft size={24} />
                    </button>
                    <button onClick={nextNews} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-4 mt-4">
                {newsData.map((news, index) => (
                    <Link key={index} href={news.url} target="_blank" rel="noopener noreferrer">
                        <div className={`flex items-center gap-4 p-2 rounded-md transition-colors ${currentIndex === index ? 'bg-blue-50' : 'hover:bg-gray-50'}`}>
                            <div className="relative w-20 h-16 flex-shrink-0">
                                <img
                                     src={news.image}
                                     alt={news.title}
                                     className='w-full h-full object-cover rounded-md'
                                     loading="lazy"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-semibold text-sm text-gray-800 truncate">{news.title}</p>
                                <p className="text-xs text-gray-500">{news.source.name}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default News;