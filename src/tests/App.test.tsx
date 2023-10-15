import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';

import App from '../App';

test('Verifica se a página "Home" possui um conjunto fixo de links de navegação', () => {
  renderWithRouter(<App />);

  const homeLink = screen.getByRole('link', { name: /home/i });
  const aboutLink = screen.getByRole('link', { name: /about/i });
  const favoritePokemonLink = screen.getByRole('link', { name: /favorite pokémon/i });

  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(favoritePokemonLink).toBeInTheDocument();
});
