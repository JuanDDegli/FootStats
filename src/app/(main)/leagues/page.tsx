"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/sidebar";
import useWindowSize from "@/hooks/useWindowSize";

const LeaguesPage = () => {
  const router = useRouter();
  const { width } = useWindowSize();

  useEffect(() => {

    if (width >= 768) {
      router.replace('/'); 
    }
  }, [width, router]);

  if (width < 768) {
    return (
      <div className="p-4 h-full">
        <div className="max-w-md mx-auto h-full">
          <Sidebar />
        </div>
      </div>
    );
  }
  return null;
};

export default LeaguesPage;