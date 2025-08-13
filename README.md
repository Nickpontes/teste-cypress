# 🧪 Teste de Automação – Kanban Dusky Five

Este projeto contém um teste automatizado desenvolvido com **Cypress** para validar funcionalidades do site [Kanban Dusky Five](https://kanban-dusky-five.vercel.app/).

## 📋 Objetivo do teste

O teste verifica se o fluxo de interação com o quadro Kanban funciona corretamente, incluindo:

1. **Acesso ao site**.
2. **Alternância do tema** (modo escuro/claro).
3. **Adição de tags** em um card específico.

---

## 🚀 Como executar

### 1️⃣ Pré-requisitos

* [Node.js](https://nodejs.org/) instalado (versão LTS recomendada)
* [Cypress](https://www.cypress.io/) instalado globalmente ou no projeto

### 2️⃣ Instalação das dependências

No terminal, na pasta do projeto:

```bash
npm install
```

### 3️⃣ Executando o teste

Para abrir a interface do Cypress:

```bash
npx cypress open
```

Para rodar diretamente no terminal:

```bash
npx cypress run
```

---

## 🛠 Tecnologias utilizadas

* **JavaScript**
* **Cypress** (Framework de testes E2E)
* **Node.js**

---

## 📌 Observações

* O seletor utilizado para encontrar elementos é baseado na estrutura atual do site. Alterações no HTML/CSS podem quebrar o teste.
* Recomenda-se atualizar os seletores para algo mais **estável** (como `data-testid`) para evitar falhas devido a mudanças visuais.