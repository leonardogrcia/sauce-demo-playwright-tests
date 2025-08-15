sauce-demo-playwright-tests

automated test suite using Playwright for Sauce Demo.

📌 Descrição

Este projeto contém uma suíte de testes automatizados para o site Sauce Demo, desenvolvida utilizando Playwright com JavaScript e aplicando o padrão Page Object Model (POM) para melhor organização e reutilização de código.

🛠 Tecnologias Utilizadas

Node.js – Execução do JavaScript no ambiente local

Playwright – Framework de testes end-to-end

JavaScript (ESM) – Uso de import e export

Page Object Model (POM) – Separação de responsabilidades e reutilização de código

▶️ Instalação

1. Instalar dependências: npm install

2. Instalar navegadores necessários: npx playwright install

▶️ Executando os Testes

Rodar todos os testes (modo headless): npx playwright test

Rodar apenas um arquivo específico: npx playwright test tests/login-valid.test.js

📄 Estrutura dos Page Objects

Cada página possui uma classe separada que:

- Define localizadores para os elementos

- Implementa métodos para ações e verificações

- Utiliza @playwright/test e expect para asserções

🧪 Cenários de Teste Implementados

Login válido – login-valid.test.js

Login inválido – login-invalid.test.js

Login com campos vazios – login_with_empty_fields.spec.js

Logout – logout.spec.js

Inventário básico – inventory_basic.spec.js

Adicionar múltiplos itens ao carrinho – add_multiple_items_to_cart.spec.js

Remover item do carrinho – remove_item_from_cart.spec.js

Navegar para detalhes do produto – product_details_navigation.spec.js

Fluxo completo do carrinho – cart.spec.js


