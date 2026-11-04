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

export enum Endpoint {
    Sources = 'sources',
    Everything = 'everything',
}

export enum HttpMethod {
    GET = 'GET',
    POST = 'POST',
}

export enum HttpStatus {
    Unauthorized = 401,
    NotFound = 404,
}

export type Callback<T> = (data: T) => void;

export type RequestOptions = Partial<Record<string, string>>;

export interface LoaderOptions {
    apiKey?: string;
    [key: string]: string | undefined;
}

export interface GetRespParams {
    endpoint: Endpoint;
    options?: RequestOptions;
}

export type SourceItem = Pick<Source, 'id' | 'name'>;

export type ReadonlyArticle = Readonly<Article>;
