"use client" // Precisamos que este seja um componente de cliente para detetar o ecrã e redirecionar

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/sidebar";
import useWindowSize from "@/hooks/useWindowSize";

const LeaguesPage = () => {
  const router = useRouter();
  const { width } = useWindowSize();

  useEffect(() => {
    // O breakpoint 'md' do Tailwind CSS é 768px.
    // Se a largura da janela for maior ou igual, redireciona para a home.
    if (width >= 768) {
      router.replace('/'); 
    }
  }, [width, router]);

  // Se a largura for menor que 768px, mostra o conteúdo para telemóvel
  if (width < 768) {
    return (
      <div className="p-4 h-full">
        <div className="max-w-md mx-auto h-full">
          <Sidebar />
        </div>
      </div>
    );
  }

  // Enquanto a verificação da largura acontece (ou em ecrãs de desktop antes do redirecionamento),
  // não mostra nada para evitar um "flash" de conteúdo.
  return null;
};

export default LeaguesPage;