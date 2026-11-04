import Loader from './loader';

class AppLoader extends Loader {
    public constructor() {
        const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

        const apiUrl = isLocalhost
            ? process.env.API_URL || 'https://rss-news-api.onrender.com/'
            : 'https://rss-news-api.onrender.com/';

        super(apiUrl, {
            apiKey: process.env.API_KEY || '',
        });
    }
}

export default AppLoader;
