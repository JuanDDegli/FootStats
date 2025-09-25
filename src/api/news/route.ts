import { NextResponse } from 'next/server';

export async function GET() {
  // ✅ Agora a chave é lida no servidor, de forma segura.
  // Certifique-se que o nome da variável no seu painel de hospedagem é NEWS_API_KEY
  const apiKey = process.env.NEWS_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: 'A chave da API de notícias não foi configurada no servidor.' },
      { status: 500 }
    );
  }

  const API_URL = `https://newsapi.org/v2/everything?apiKey=${apiKey}&q=soccer&pageSize=10`;

  try {
    const response = await fetch(API_URL, {
      next: { revalidate: 3600 }, // Faz cache da resposta por 1 hora
    });

    const data = await response.json();

    if (!response.ok) {
      // Se a News API retornar um erro, o repassamos
      return NextResponse.json(
        { error: data.message || 'Falha ao buscar notícias.' },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Ocorreu um erro interno no servidor.' },
      { status: 500 }
    );
  }
}