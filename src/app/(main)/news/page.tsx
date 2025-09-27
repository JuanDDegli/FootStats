import News from "@/components/news";
import { getNewsInfo } from "@/api";
import type { newsType } from "@/types";

const NewsPage = async () => {
  let initialNews: newsType[] = [];
  let error: string | null = null;

  try {
    const newsData = await getNewsInfo();
    console.log("Dados recebidos da GNews API:", newsData); 
    
    initialNews = (newsData?.articles ?? []).filter(a => a.image);
  } catch (err) {
    console.error("Failed to fetch news on server:", err);
    error = "Não foi possível carregar as notícias. Por favor, tente novamente mais tarde.";
  }

  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <News initialNews={initialNews} error={error} />
      </div>
    </div>
  );
};

export default NewsPage;