export type ApiStatus = 'ok' | 'error';

export interface ArticleSource {
    id: string | null;
    name: string;
}

export interface Article {
    source: ArticleSource;
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content?: string | null;
}

export interface Source {
    id: string;
    name: string;
    description?: string;
    url?: string;
    category?: string;
    language?: string;
    country?: string;
}
export interface NewsApiResponse {
    status: ApiStatus;
    code?: string;
    message?: string;
}

export interface NewsResponse extends NewsApiResponse {
    totalResults?: number;
    articles?: Article[];
}

export interface SourcesResponse extends NewsApiResponse {
    sources?: Source[];
}
