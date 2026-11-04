import './news.css';
import { ReadonlyArticle } from '../../../types';
import defaultPhoto from '../../../assets/news_placeholder.png';

class News {
    public draw(data: ReadonlyArticle[]): void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector<HTMLTemplateElement>('#newsItemTemp');

        if (!newsItemTemp) {
            console.error('Template #newsItemTemp not found in DOM');
            return;
        }

        if (data.length === 0) {
            const emptyMessage = document.createElement('p');
            emptyMessage.className = 'news__empty';
            emptyMessage.textContent = 'No news found for this source.';
            fragment.append(emptyMessage);
        }

        news.forEach((item: ReadonlyArticle, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;

            const newsItem = newsClone.querySelector('.news__item');
            if (idx % 2 && newsItem) {
                newsItem.classList.add('alt');
            }

            const metaPhoto = newsClone.querySelector<HTMLElement>('.news__meta-photo');
            if (metaPhoto) {
                metaPhoto.style.backgroundImage = `url(${item.urlToImage || defaultPhoto})`;
            }

            const metaAuthor = newsClone.querySelector('.news__meta-author');
            if (metaAuthor) {
                metaAuthor.textContent = item.author || item.source.name;
            }

            const metaDate = newsClone.querySelector('.news__meta-date');
            if (metaDate) {
                metaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            }

            const descTitle = newsClone.querySelector('.news__description-title');
            if (descTitle) {
                descTitle.textContent = item.title;
            }

            const descSource = newsClone.querySelector('.news__description-source');
            if (descSource) {
                descSource.textContent = item.source.name;
            }

            const descContent = newsClone.querySelector('.news__description-content');
            if (descContent) {
                descContent.textContent = item.description;
            }

            const readMoreLink = newsClone.querySelector('.news__read-more a');
            if (readMoreLink) {
                readMoreLink.setAttribute('href', item.url);
            }

            fragment.append(newsClone);
        });

        const newsContainer = document.querySelector('.news');
        if (newsContainer) {
            newsContainer.innerHTML = '';
            newsContainer.appendChild(fragment);
        }
    }
}

export default News;
