import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';

import App from '../App';

const pokemonTestId = 'pokemon-type-button';

test('Verifica se a página "Pokedex" deve ter um heading h2 com o texto Encountered Pokémon', () => {
  renderWithRouter(<App />);

  const heading = screen.getByRole('heading', { name: /Encountered Pokémon/i, level: 2 });

  expect(heading).toBeInTheDocument();
});

test('Verifica se a página "Pokedex" exibe o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado', async () => {
  const { user } = renderWithRouter(<App />);

  const nextPokemonButton = screen.getByRole('button', { name: /próximo pokémon/i });

  await user.click(nextPokemonButton);
  const pokemon2 = screen.getByText(/charmander/i);

  expect(pokemon2).toBeInTheDocument();
});

test('Verifica se a página "Pokedex" tem os botões de filtro renderizados', () => {
  renderWithRouter(<App />);

  const pokemonButtons = screen.getAllByTestId(pokemonTestId);

  pokemonButtons.forEach((buttons) => {
    expect(buttons).toBeInTheDocument();
  });
});

test('Verifica se o botão clicado correspondem ao tipo do pokémon', async () => {
  const { user } = renderWithRouter(<App />);

  const buttonFire = screen.getAllByTestId(pokemonTestId)[1];

  await user.click(buttonFire);

  const pokemonFire = screen.getByText(/charmander/i);
  const nextPokemonButton = screen.getByRole('button', { name: /próximo pokémon/i });

  expect(pokemonFire).toBeInTheDocument();
  expect(screen.queryByText(/pikachu/i)).not.toBeInTheDocument();

  await user.click(nextPokemonButton);
  const pokemonFireTwo = screen.getByText(/rapidash/i);

  expect(pokemonFireTwo).toBeInTheDocument();
  expect(buttonFire).toHaveTextContent(/fire/i);
});

test('Verifica se o botão "All" está renderizado', () => {
  renderWithRouter(<App />);

  const buttonAll = screen.getByRole('button', { name: /all/i });

  expect(buttonAll).toBeInTheDocument();
});

test('Verifica se quando o botão "All" é clicado, os filtros são retirados', async () => {
  const { user } = renderWithRouter(<App />);

  const buttonFire = screen.getAllByTestId(pokemonTestId)[1];
  await user.click(buttonFire);

  const pokemonFire = screen.getByText(/charmander/i);

  const buttonAll = screen.getByRole('button', { name: /all/i });
  await user.click(buttonAll);

  const pokemon = screen.getByText(/pikachu/i);

  expect(pokemonFire).toBeInTheDocument();
  expect(pokemon).toBeInTheDocument();
});
