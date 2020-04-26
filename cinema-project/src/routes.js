import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundFage/NotFoundPage';
import SearchPage from './pages/SearchPage/SearchPage';
import SupportPage from './pages/SupportPage/SupportPage';
import TheaterPage from './pages/TheaterPage/TheaterPage';
import EventPage from './pages/EventPage/EventPage';
import BlogPage from './pages/BlogPage/BlogPage';
import ReviewPage from './pages/ReviewPage/ReviewPage';
import DirectorsPage from './pages/DirectorsPage/DirectorsPage';
import CastPage from './pages/CastPage/CastPage';
import BuyTicketPage from './pages/BuyTicketPage/BuyTicketPage';
import MoviePage from './pages/MoviePage/MoviePage';
import MovieGenrePage from './pages/MovieGenrePage/MovieGenrePage';
import BuyTicketDetailPage from './pages/BuyTicketDetailPage/BuyTicketDetailPage';
import TicketBooking from './pages/TicketBooking/TicketBooking';
import UserPage from './pages/AccountPage/UserPage/UserPage';
import AdminPage from './pages/AdminPage/AdminPage';
const routes = [
    {
        path: '/',
        exact : true,
        main: ({history}) => <HomePage history={history}/>
    },
    {
        path: '/search',
        exact: false,
        main: () => <SearchPage/>
    },
    {
        path: '/user-page',
        exact: false,
        main: () => <UserPage/>
    },
    {
        path: '/admin-page',
        exact: false,
        main: () => <AdminPage/>
    },
    {
        path: '/support',
        exact: false,
        main: () => <SupportPage/>
    },
    {
        path: '/theater-ticketprice',
        exact: false,
        main: () => <TheaterPage/>

    },
    {
        path: '/event',
        exact: false,
        main: () => <EventPage/>

    },
    {
        path: '/blog-film',
        exact: false,
        main: () => <BlogPage/>

    },
    {
        path: '/review-film',
        exact: false,
        main: () => <ReviewPage/>

    },
    {
        path: '/directors',
        exact: false,
        main: () => <DirectorsPage/>

    },
    {
        path: '/cast',
        exact: false,
        main: () => <CastPage/>

    },
    {
        path: '/movie-genre',
        exact: false,
        main: () => <MovieGenrePage/>

    },
    {
        path: '/coming-soon',
        exact: false,
        main: ({match}) => <MoviePage match={match}/>
    },
    {
        path: '/now-showing',
        exact: false,
        main: ({match}) => <MoviePage match={match}/>
    },
    {
        path: '/buy-ticket',
        exact: false,
        main: ({history}) => <BuyTicketPage history={history}/>
    },
    {
        path: '/buy-ticket-detail/:movie',
        exact: false,
        main: () => <BuyTicketDetailPage/>
    },
    {
        path: '/ticket-booking',
        exact: false,
        main: () => <TicketBooking/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage/>
    }
]

export default routes;