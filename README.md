# **Sistema de Pedido com Angular**

Link da aplicação
[burguermania-chi.vercel.app](https://burguermania-chi.vercel.app/)

Este projeto é um **Sistema de Pedido** desenvolvido com **Angular** utilizando **Componentes Reutilizáveis**. A aplicação permite preencher informações de produtos, suas quantidades e observações, com um design responsivo e estilizado.

## **Índice**
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Contribuir](#como-contribuir)
- [Licença](#licença)

---

## **Tecnologias Utilizadas**
- **Angular 16** (com suporte a standalone components)
- **TypeScript**
- **HTML5 e CSS3**
- **Angular Material** (opcional para estilização)
- **Reactive Forms** para manipulação de formulários
- **Standards de código Angular** (seguindo boas práticas)

---

## **Funcionalidades**
- Formulário dinâmico para registro de pedidos.
- **Componentes Reutilizáveis**: 
  - `app-input`: Entrada de texto e número com validações.
  - `app-button`: Botão estilizado com suporte a desabilitação (`disabled`).
- Responsividade para diferentes tamanhos de tela.
- Validação de campos obrigatórios para submissão de formulários.
- Design centralizado e amigável para o usuário.

---

## **Instalação**

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git

2. Instale as dependências::
   ```bash
   npm install

3. Inicie o servidor de desenvolvimento:
   ```bash
   ng serve

4. Inicie o json-server para simular a API:
   ```bash
   npm run json-server

Certifique-se de que o arquivo db.json esteja configurado corretamente no diretório raiz do projeto. O servidor estará disponível em http://localhost:3000.

4. Acesse a aplicação no navegador:

   http://localhost:4200

 ## **Uso**

1. Preencha o nome dos produtos e suas respectivas quantidades.
2. Adicione observações ao pedido, se necessário.
3. Clique em FINALIZAR para processar o pedido (o botão só é ativado se todos os campos obrigatórios forem preenchidos).

 ## **Estrutura**

 Abaixo está um resumo da estrutura principal do projeto:
    
    src/
├── app/
│   ├── components/
│   │   ├── input/
│   │   │   ├── input.component.ts
│   │   │   ├── input.component.html
│   │   │   └── input.component.css
│   │   ├── button/
│   │   │   ├── button.component.ts
│   │   │   ├── button.component.html
│   │   │   └── button.component.css
│   ├── order/
│   │   ├── order.component.ts
│   │   ├── order.component.html
│   │   └── order.component.css
│   └── app.module.ts
├── assets/
├── environments/
└── index.html

 ## **Como Contribuir**

  
1. Faça um fork do projeto.

2. Crie uma branch com sua feature/bugfix:
   ```bash
    npm install

3. Faça as alterações desejadas e commit:
   ```bash
    git commit -m "Minha nova feature"

4. Envie para o repositório remoto:
   ```bash
   git push origin minha-feature

5. Abra um Pull Request para revisão.

   
 ## **Licença**

 Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

  ## **Autor**

Desenvolvido por Seu Felipe Souza.
Sinta-se à vontade para entrar em contato para sugestões ou dúvidas! 🚀


