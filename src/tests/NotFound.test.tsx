import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';

import App from '../App';

test('Verifica se na página "Not Found" renderiza os elementos corretamente', () => {
  renderWithRouter(<App />, { route: '/*' });

  screen.debug();
  const heading = screen.getByRole('heading', { name: /page requested not found/i, level: 2 });
  const image = screen.getByAltText(/Clefairy pushing buttons randomly with text I have no idea what i'm doing/i);
  const srcImage = '/404.gif';

  expect(heading).toBeInTheDocument();
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute('src', srcImage);
});
