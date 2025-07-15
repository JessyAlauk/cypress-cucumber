# 📘 Desafio Testes Automatizados com Cypress + Cucumber + Allure

## 🧰 Tecnologias usadas

- [Cypress](https://www.cypress.io/)
- [Cucumber (Gherkin)](https://github.com/badeball/cypress-cucumber-preprocessor)
- [Allure Reports](https://docs.qameta.io/allure/)
- Node.js v18+

---

## 📦 Instalação

1. **Clone o projeto:**

```bash
Descompacte o projeto jessica-alauk-axur-automation.zip
```

2. **Instale as dependências:**

```bash
npm install cypress --save-dev
npm install -D @badeball/cypress-cucumber-preprocessor/esbuild
npm install -D @bahmutov/cypress-esbuild-preprocessor   
```

---

## 🧪 Executando os testes

1. **Abrir interface do Cypress:**

```bash
npm run test:chrome
```

2. **Executar em modo headless:**

```bash
npm run test:headless
```

---

## 📊 Gerar relatório Allure

1. **Instale o Allure CLI:**

```bash
npm install -g allure-commandline --save-dev
```

2. **Gere e visualize o relatório:**

```bash
npm run allure:generate
npm run allure:open
```

---

## ✅ Resultado

- Os vídeos serão gravados em `cypress/videos`
- As **features** e **steps** seguirão o padrão Cucumber

## 🧪 Estrutura do codigo

```
cypress/
  └── e2e/
      └── features/
          └── ValidationCart.feature
      └── elements
          └── ValidationCartElements.js  
      └── pageobjects
          └── ValidationCartPage
  └── support/
      └── e2e.js
      └── steps_definitions/
          └── validationCartSteps.js
cypress.config.js
package.json
```
# Onde:
    - features: Onde ficam os arquivos .feature do projeto;
    - support/steps_definitions: Onde ficam os steps definitions, de acordo com o arquivo .feature;
    - pageobjects: Contem todas as ações e logica de cada pagina;
    - elements: Contém os elementos da pagina - seletor css;
---
