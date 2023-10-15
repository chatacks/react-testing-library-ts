import { getByRole, screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';

import App from '../App';

test('Verifica se na página "Favorites" é exibido na tela a "No favorite pokemon found" caso a pessoa não tenha Pokémon favorito. ', () => {
  renderWithRouter(<App />, { route: '/favorites' });

  const noFavorite = screen.getByText(/No favorite Pokémon found/i);
  expect(noFavorite).toBeInTheDocument();
});

test('Verifica se caso tenha algum pokemon favoritado, ele seja exibido na tela', async () => {
  const { user } = renderWithRouter(<App />);

  const moreDetails = screen.getByRole('link', { name: /more details/i });
  await user.click(moreDetails);

  const favoritedPokemon = screen.getByRole('checkbox', { name: /pokémon favoritado?/i });
  await user.click(favoritedPokemon);

  const linkFavoritePokemon = screen.getByRole('link', { name: /favorite pokémon/i });
  await user.click(linkFavoritePokemon);

  const headingFavorite = screen.getByRole('heading', { name: /Favorite Pokémon/i, level: 2 });
  const pokemonTestId = screen.getByTestId('pokemon-name');
  const pokemonTypeTestId = screen.getByTestId('pokemon-type');
  const pokemonWeightTestId = screen.getByTestId('pokemon-weight');
  const imagePokemon = screen.getByAltText(/Pikachu sprite/i);
  const srcImage = 'https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png';

  expect(headingFavorite).toBeInTheDocument();
  expect(pokemonTestId).toBeInTheDocument();
  expect(pokemonTypeTestId).toBeInTheDocument();
  expect(pokemonWeightTestId).toBeInTheDocument();
  expect(imagePokemon).toBeInTheDocument();
  expect(imagePokemon).toHaveAttribute('src', srcImage);
});
