import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { Error } from './Error/Error';
import Cast from './MoviesTrending/Cast/Cast';
import Reviews from './Reviews/Reviews';
//

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<Movies />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Error message={'Not Found'} />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
