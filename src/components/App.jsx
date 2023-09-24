import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
//

const Home = lazy(() => import('../pages/Home/Home'));
const Movie = lazy(() => import('../pages/Movie/Movie'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<Movie />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
