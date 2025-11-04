## 🚀 Fluxo de Trabalho do Repositório
 
Nosso projeto utiliza um fluxo de trabalho baseado em Branches e Pull Requests. O processo completo está detalhado no fluxograma abaixo, conforme definido pela gerência de configuração:
 
```mermaid
graph TD;
    A[Início] --> B[Verificar branch 'main' - git checkout main];
    B --> C[Atualizar 'main' local - git pull];
    C --> D[Criar nova branch - git checkout -b prefixo/tarefa];
    D --> E[Realizar o trabalho - Codar/Documentar];
    E --> F[Salvar alterações - git add . / git commit];
    F --> G[Enviar para GitHub - git push origin prefixo/tarefa];
    G --> H[Abrir Pull Request 'PR' no GitHub];
    H --> I{PR Aprovado?};
    I -- NÃO --> E;
    I -- SIM --> J[Merge do PR na 'main'];
    J --> K[Fim];

    style A fill:#d4fcd7,stroke:#333
    style K fill:#d4fcd7,stroke:#333
    style I fill:#fcd4f8,stroke:#333