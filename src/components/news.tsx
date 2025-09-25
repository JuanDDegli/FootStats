"use client"

import React, { useState, useEffect, useCallback } from 'react';
import { getNewsInfo } from '@/api'; // Remova esta linha se getNewsInfo não for mais usada em nenhum outro lugar
import { newsType } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const News = () => {
    const [newsData, setNewsData] = useState<newsType[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                // ✅ Chamada para a sua nova API Route interna
                const response = await fetch('/api/news');
                const data = await response.json();

                if (response.ok && data.articles) {
                    setNewsData(data.articles);
                } else {
                    // Se houver um erro, ele será logado no console do navegador
                    console.error("Erro ao buscar notícias:", data.error);
                    setNewsData([]);
                }
            } catch (error) {
                console.error("Falha na requisição para /api/news", error);
                setNewsData([]);
            }
        };
        fetchNews();
    }, []);

    const nextNews = useCallback(() => {
        if (newsData.length === 0) return; // Previne erro se não houver notícias
        setCurrentIndex((prevIndex) => (prevIndex + 1) % newsData.length);
    }, [newsData.length]);

    const prevNews = () => {
        if (newsData.length === 0) return; // Previne erro se não houver notícias
        setCurrentIndex((prevIndex) => (prevIndex - 1 + newsData.length) % newsData.length);
    };

    // ... o resto do seu componente continua igual
    
    return (
        <div className='w-full md:w-[300px] bg-white rounded-md px-2 md:px-6 py-2 flex flex-col'>
            <h1 className='text-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-move font-bold mb-4'>News - Top Headlines</h1>
            
            {/* Mobile Carousel */}
            <div className="md:hidden relative">
                {newsData.length > 0 ? (
                    <div className="relative">
                        <Link href={newsData[currentIndex].url} legacyBehavior>
                            <a target="_blank" rel="noopener noreferrer">
                                <div className="relative w-full h-[200px] mb-4 transition duration-300 hover:scale-105">
                                    <Image
                                        src={newsData[currentIndex]?.urlToImage || '/imgs/football.jpg'}
                                        alt={newsData[currentIndex].description}
                                        fill
                                        className='object-cover rounded-md'
                                    />
                                    <div className="absolute bottom-0 left-0 w-full p-2 z-10 bg-gradient-to-t from-zinc-900 to-transparent">
                                        <p className="font-semibold text-lg text-white">{newsData[currentIndex].title}</p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                        <button onClick={prevNews} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full">
                            <ChevronLeft size={24} />
                        </button>
                        <button onClick={nextNews} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                ) : <p className="text-center text-gray-500">Carregando notícias...</p>}
            </div>

            {/* Desktop List */}
            <div className="hidden md:flex flex-col gap-4">
                 {newsData.length > 0 ? newsData.map((news) => (
                    <Link key={`${news.title}`} href={news.url} legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer">
                            <div className="relative w-full h-[150px] mb-4 transition duration-300 hover:scale-110">
                                <Image
                                    src={news?.urlToImage != null ? news.urlToImage : '/imgs/football.jpg'}
                                    alt={news.description}
                                    fill
                                    className='object-cover rounded-md'
                                />
                                <div className="absolute bottom-0 left-0 w-full p-2 z-10 bg-gradient-to-t from-zinc-900 to-transparent">
                                    <p className="font-semibold text-lg text-white">{news.title}</p>
                                </div>
                            </div>
                        </a>
                    </Link>
                )) : <p className="text-center text-gray-500">Nenhuma notícia para exibir.</p>}
            </div>
        </div>
    );
}

export default News;