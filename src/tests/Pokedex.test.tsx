import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';

import App from '../App';

const pokemonTestId = 'pokemon-type-button';

it('deve ter um heading h2 com o texto Encountered Pokémon', () => {
  renderWithRouter(<App />);

  const heading = screen.getByRole('heading', { name: /Encountered Pokémon/i, level: 2 });

  expect(heading).toBeInTheDocument();
});

it('deve exibir o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado', async () => {
  const { user } = renderWithRouter(<App />);

  const nextPokemonButton = screen.getByRole('button', { name: /próximo pokémon/i });

  await user.click(nextPokemonButton);
  const pokemon2 = screen.getByText(/charmander/i);

  expect(pokemon2).toBeInTheDocument();
});

it('deve ter os botões de filtro', () => {
  renderWithRouter(<App />);

  const pokemonButtons = screen.getAllByTestId(pokemonTestId);

  pokemonButtons.forEach((buttons) => {
    expect(buttons).toBeInTheDocument();
  });
});

it('deve circular pelos Pokémon do tipo selecionado', async () => {
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

it('deve ter um botão para resetar o filtro', () => {
  renderWithRouter(<App />);

  const buttonAll = screen.getByRole('button', { name: /all/i });

  expect(buttonAll).toBeInTheDocument();
});

it('deve mostrar os Pokémon normalmente (sem filtros) quando o botão All for clicado', async () => {
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
