import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Verifica se a página "About" tem as informações sobre a Pokédex', () => {
  renderWithRouter(<App />, { route: '/about' });

  const heading = screen.getByRole('heading', { name: /about pokédex/i, level: 2 });

  const paragraphOne = screen.getByText(/This application simulates a Pokédex, a digital encyclopedia containing all Pokémon/i);

  const paragraphTwo = screen.getByText(/One can filter Pokémon by type, and see more details for each one of them/i);

  const image = screen.getByRole('img', { name: /pokédex/i });
  const srcImage = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';

  expect(heading).toBeInTheDocument();
  expect(paragraphOne).toBeInTheDocument();
  expect(paragraphTwo).toBeInTheDocument();
  expect(image).toHaveAttribute('src', srcImage);
});
