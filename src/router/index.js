import { Navigate, createBrowserRouter } from 'react-router-dom';
import { PAGES } from '../constants/pages';
import { Base, Landing, News, NewsArticle } from '../pages';

export default createBrowserRouter([
    {
        path: '',
        element: <Base />,
        children: [
            // -------------- PUBLIC PAGE
            {
                path: PAGES.landing.url,
                element: <Landing />,
                index: true,
            },
            {
                path: PAGES.news.url,
                // element: <News />,
                element: <Navigate to={PAGES.landing.url} />,
            },
            {
                path: PAGES.news.url + '/:slug',
                element: <NewsArticle />,
            },
            // -------------- 404
            {
                path: PAGES.notFound.url,
                element: <Navigate to={PAGES.landing.url} />,
            },
        ],
        // errorElement: <Navigate to={PAGES.landing.url} />,
    },
]);
