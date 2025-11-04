# Como Contribuir com o Projeto (Ionic Currency Converter)

Agradecemos seu interesse em contribuir! Este documento serve como um guia para garantir que todas as contribuições sigam um padrão e que o fluxo de trabalho seja claro para todos os membros da equipe.

## Descrição do Projeto

Este projeto tem como objetivo desenvolver um aplicativo móvel para a plataforma Android, usando o framework Ionic. A aplicação será um conversor de moedas que consome APIs REST externas para obter taxas de câmbio em tempo real.

## Pré-requisitos

Antes de começar, garanta que você tenha as seguintes ferramentas instaladas e configuradas no seu ambiente:

* **Git:** Para controle de versão.
* **Node.js (LTS):** Necessário para o Ionic e gerenciamento de pacotes (npm).
* **Ionic CLI:** A interface de linha de comando oficial do Ionic.
    * `npm install -g @ionic/cli`
* **VS Code (Recomendado):** Editor de código para desenvolver.

> **Nota:** Para uma lista detalhada de bibliotecas, frameworks, dispositivos e comandos de instalação específicos, consulte o **[Tutorial de Ferramentas e Stack](ionicnewsdocs/UseCase/Tutorial-Ferramentas-Stack.pdf)**.

## Como Baixar o Repositório

Para obter uma cópia local do projeto e começar a trabalhar, utilize os seguintes comandos:

```bash
# 1. Clone o repositório (Substitua pela URL do seu GitHub)
git clone https://github.com/seu-usuario/IonicCurrencyConverter.git

# 2. Entre na pasta do projeto
cd IonicCurrencyConverter

# 3. Instale as dependências (quando o projeto Ionic for criado)
cd ionicnewsapp
npm install
```

## Fluxo de Trabalho no Repositório

O projeto segue um fluxo de trabalho baseado em branches para organizar o desenvolvimento. Cada desenvolvedor trabalha em seu próprio branch e, após concluir as tarefas, realiza o merge para o branch principal (`main`).

### Estrutura de Branches

- **`main`:** Branch principal contendo o código estável e pronto para produção.
- **Branches de desenvolvimento:** Branches individuais ou por funcionalidade (ex: `feature/conversao-moedas`, `dev/joao`, `feature/historico`).

> **Importante:** Para detalhes completos sobre todos os comandos Git utilizados no projeto e o fluxo de trabalho passo a passo, consulte o **[Guia de Comandos Git](ionicnewsdocs/Guia-comandos-git.pdf)**.

## Como Contribuir

Siga os passos abaixo para contribuir com o projeto:

### 1. Criar um Novo Branch

Antes de começar a trabalhar em uma nova funcionalidade ou correção, crie um novo branch a partir do `main`:

```bash
# Certifique-se de estar no branch main e atualizado
git checkout main
git pull origin main

# Crie e mude para um novo branch
git checkout -b feature/nome-da-funcionalidade
```

### 2. Desenvolver e Fazer Commits

Faça suas alterações no código e realize commits frequentes com mensagens descritivas:

```bash
# Adicionar arquivos modificados
git add .

# Fazer commit com mensagem clara
git commit -m "feat: adiciona funcionalidade de conversão de moedas"
```

**Convenção de Commits:**
- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Alterações na documentação
- `style:` Formatação, espaços, etc.
- `refactor:` Refatoração de código
- `test:` Adição ou correção de testes

### 3. Enviar para o Repositório Remoto

Após realizar seus commits localmente, envie seu branch para o repositório remoto:

```bash
git push origin feature/nome-da-funcionalidade
```

### 4. Criar um Pull Request

1. Acesse o repositório no GitHub
2. Clique em "Pull Requests" > "New Pull Request"
3. Selecione seu branch como origem e `main` como destino
4. Preencha a descrição do Pull Request explicando:
   - O que foi implementado
   - Como testar
   - Screenshots (se aplicável)
5. Solicite revisão de pelo menos um membro da equipe
6. Aguarde aprovação antes de fazer o merge

### 5. Atualizar seu Branch

Mantenha seu branch sempre atualizado com o `main` para evitar conflitos:

```bash
# No seu branch de desenvolvimento
git checkout feature/nome-da-funcionalidade

# Buscar atualizações do main
git fetch origin
git merge origin/main

# Resolver conflitos se houver, depois:
git add .
git commit -m "merge: atualiza branch com main"
git push origin feature/nome-da-funcionalidade
```

## Documentação de Referência

O projeto possui guias detalhados para auxiliar no desenvolvimento:

- **[Guia de Comandos Git](ionicnewsdocs/Guia-comandos-git.pdf):** Tutorial completo com todos os comandos Git utilizados no projeto, incluindo fluxo de trabalho com branches, resolução de conflitos e boas práticas.

- **[Tutorial de Ferramentas e Stack](ionicnewsdocs/Tutorial-Ferramentas-Stack.pdf):** Documentação completa sobre ferramentas, bibliotecas, frameworks, dispositivos necessários e comandos de instalação/configuração.

## Estrutura do Projeto

```
IonicCurrencyConverter/
├── ionicnewsapi/          # Backend API (se implementado)
├── ionicnewsapp/          # Aplicativo Ionic
├── ionicnewsdocs/         # Documentação
│   ├── Models/
│   │   ├── classes/       # Diagramas de classes
│   │   ├── database/      # Diagramas de banco de dados
│   │   ├── mindmap/       # Mapas mentais
│   │   └── Mockup/        # Protótipos de interface
│   ├── Sql/               # Scripts SQL
│   └── UseCase/           # Casos de uso e guias
├── .gitignore
├── CONTRIBUTING.md        # Este arquivo
├── LICENSE
├── README.md
└── TODO.md                # Lista de tarefas pendentes
```

## Boas Práticas

- Faça commits pequenos e frequentes
- Escreva mensagens de commit claras e descritivas
- Teste suas alterações antes de enviar
- Mantenha seu branch atualizado com o `main`
- Revise o código de outros membros da equipe
- Documente funcionalidades complexas
- Não faça commit de arquivos gerados automaticamente ou temporários

## Dúvidas?

Se tiver dúvidas sobre o fluxo de trabalho, consulte os guias em PDF ou entre em contato com o Gerente de Configuração do projeto.

---

**Boas contribuições! 🚀**
