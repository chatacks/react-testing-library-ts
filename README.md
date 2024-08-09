# React Testing Library Ts

Este projeto demonstra a utilização de testes automatizados em uma aplicação React escrita em TypeScript, usando a React Testing Library. O objetivo é garantir que os componentes da interface do usuário funcionem conforme esperado, validando o comportamento e as interações dos usuários.

## Visão Geral

Este projeto foca em escrever testes de integração para componentes React utilizando a React Testing Library. Todos os testes são escritos em TypeScript, aproveitando os benefícios de tipagem estática para melhorar a segurança e robustez do código.

## Tecnologias Utilizadas

- **Linguagem**: TypeScript
- **Framework**: React
- **Biblioteca de Testes**: React Testing Library
- **Framework de Testes**: Jest (utilizado como runner e assertion library)
- **Roteamento**: React Router DOM
- **Renderização**: React e React DOM

## Estrutura do Projeto

- **src/**: Contém todo o código fonte da aplicação.
  - **components/**: Componentes React que são testados.
  - **tests/**: Testes unitários e de integração para os componentes.
- **setupTests.ts**: Configuração da React Testing Library e Jest.

## Como Executar os Testes

1. **Clone este repositório**:

   ```bash
   git clone git@github.com:chatacks/react-testing-library-ts.git
   cd react-testing-library-ts
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

3. **Execute os testes**:

   ```bash
   npm test
   ```

   Isso iniciará o Jest, que executará todos os testes no projeto e fornecerá um relatório de cobertura.

## Exemplos de Testes

Aqui estão alguns exemplos do que pode ser testado neste projeto:

- **Renderização de Componentes**: Garantir que os componentes sejam renderizados corretamente com os dados fornecidos.
- **Interações do Usuário**: Simular cliques, digitação e outras interações e verificar se o componente responde conforme esperado.
- **Testes Assíncronos**: Verificar o comportamento de componentes que dependem de chamadas assíncronas ou temporizadores.
- **Navegação entre Páginas**: Testar a navegação utilizando React Router DOM para garantir que as rotas e links funcionam corretamente.

## Contribuição

Contribuições para melhorar os testes e a qualidade do código são bem-vindas! Você pode abrir issues para relatar problemas ou sugerir melhorias. Pull requests também são apreciados.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Referências

- [Documentação do React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Documentação do Jest](https://jestjs.io/)
- [Documentação do React](https://reactjs.org/)
- [Documentação do React Router](https://reactrouter.com/)
- [Documentação do TypeScript](https://www.typescriptlang.org/)
