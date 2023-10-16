import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';

import App from '../App';
import pokemonList from '../data';

const pikachu = pokemonList[0];
const weight = pikachu.averageWeight.value;
const unit = pikachu.averageWeight.measurementUnit;
const { name, id, type } = pikachu;

test('Verifica se é renderizado um card com as informações de um determinado pokémon', () => {
  renderWithRouter(<App />);

  const pokemon = screen.getByText(/pikachu/i);
  const pokemonTypeTestId = screen.getByTestId('pokemon-type');
  const pokemonWeightTestId = screen.getByTestId('pokemon-weight');
  const imagePokemon = screen.getByAltText(`${name} sprite`);
  const srcImage = 'https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png';

  expect(pokemon).toBeInTheDocument();
  expect(pokemonTypeTestId).toHaveTextContent(type);
  expect(pokemonWeightTestId).toHaveTextContent(`Average weight: ${weight} ${unit}`);
  expect(imagePokemon).toHaveAttribute('src', srcImage);
});

test('Verifica se o card do Pokémon indicado na Pokédex contém um link de navegação para exibir detalhes', () => {
  renderWithRouter(<App />);

  const linkDetails = screen.getByRole('link', { name: /more details/i });

  expect(linkDetails).toBeInTheDocument();
  expect(linkDetails).toHaveAttribute('href', `/pokemon/${id}`);
});

test('Verifica se ao clicar no link "More Details" é feito o redirecionamento da aplicação para a página de detalhes de Pokémon', async () => {
  const { user } = renderWithRouter(<App />);

  const linkDetails = screen.getByRole('link', { name: /more details/i });

  await user.click(linkDetails);
  const headingPikachu = screen.getByRole('heading', { name: /pikachu details/i, level: 2 });
  const favorited = screen.getByRole('checkbox', { name: /pokémon favoritado/i });

  await user.click(favorited);
  screen.debug();
  const imageFavorited = screen.getByAltText(`${name} is marked as favorite`);

  expect(headingPikachu).toBeInTheDocument();
  expect(imageFavorited).toBeInTheDocument();
});
