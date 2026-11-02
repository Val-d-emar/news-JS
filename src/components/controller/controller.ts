import AppLoader from './appLoader';
import { Callback, Endpoint, NewsResponse, SourcesResponse } from '../../types';

class AppController extends AppLoader {
    getSources(callback?: Callback<SourcesResponse>) {
        super.getResp(
            {
                endpoint: Endpoint.Sources,
            },
            callback
        );
    }

    getNews(e: MouseEvent, callback?: Callback<NewsResponse>) {
        let target = e.target as HTMLElement | null;
        const newsContainer = e.currentTarget as HTMLElement | null;

        while (target && target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (sourceId && newsContainer && newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp<NewsResponse>(
                        {
                            endpoint: Endpoint.Everything,
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentElement;
        }
    }
}

export default AppController;
