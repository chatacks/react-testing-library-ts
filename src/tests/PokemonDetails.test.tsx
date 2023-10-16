import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';

import App from '../App';
import pokemonList from '../data';

const pikachu = pokemonList[0];
const { name, id } = pikachu;

test('Verifica se as informações detalhadas do Pokémon selecionado serão exibidas', async () => {
  const { user } = renderWithRouter(<App />);

  const moreDetailsLink = screen.getByRole('link', { name: /more details/i });
  await user.click(moreDetailsLink);

  const headigPokemonDetails = screen.getByRole('heading', { name: `${name} Details`, level: 2 });
  const noMoreDetailsLink = screen.queryByRole('link', { name: /more details/i });
  const heading = screen.getByRole('heading', { name: /Summary/i, level: 2 });
  const paragraph = screen
    .getByText(/This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat/i);

  expect(headigPokemonDetails).toBeInTheDocument();
  expect(noMoreDetailsLink).not.toBeInTheDocument();
  expect(heading).toBeInTheDocument();
  expect(paragraph).toBeInTheDocument();
});

test('Verifica se existe na página uma seção com os mapas contendo a localização do pokemon correspondente', async () => {
  const { user } = renderWithRouter(<App />);

  const moreDetailsLink = screen.getByRole('link', { name: /more details/i });
  await user.click(moreDetailsLink);
  screen.debug();

  const headigLocationsPokemon = screen
    .getByRole('heading', { name: `Game Locations of ${name}`, level: 2 });
  const imagesLocations = screen.getAllByAltText(`${name} location`);
  const srcImage1 = 'https://archives.bulbagarden.net/media/upload/0/08/Kanto_Route_2_Map.png';
  const nameLocation1 = screen.getByText(/Kanto Viridian Forest/i);
  const nameLocation2 = screen.getByText(/Kanto Power Plant/i);

  expect(headigLocationsPokemon).toBeInTheDocument();
  expect(imagesLocations).toHaveLength(2);
  imagesLocations.forEach((location) => expect(location).toBeInTheDocument());
  expect(imagesLocations[0]).toHaveAttribute('src', srcImage1);
  expect(nameLocation1).toBeInTheDocument();
  expect(nameLocation2).toBeInTheDocument();
});

test('Verifica se o usuário pode favoritar um Pokémon por meio da página de detalhes', async () => {
  const { user } = renderWithRouter(<App />);

  const moreDetailsLink = screen.getByRole('link', { name: /more details/i });
  await user.click(moreDetailsLink);

  const pokemonFavorited = screen.getByRole('checkbox', { name: /pokémon favoritado/i });
  await user.click(pokemonFavorited);
  const label = screen.getByLabelText(/Pokémon favoritado/i);

  expect(pokemonFavorited).toBeInTheDocument();
  expect(pokemonFavorited).toBeChecked();
  expect(label).toBeInTheDocument();
});
