# CI/CD Pipeline Project

![CI Pipeline]([![CI Pipeline](https://github.com/eliaswalton/ci-cd-pipeline-project/actions/workflows/ci.yml/badge.svg)](https://github.com/eliaswalton/ci-cd-pipeline-project/actions/workflows/ci.yml))

Proyecto Node.js con pipeline de integración continua usando GitHub Actions.

## Instalación
```bash
git clone https://github.com/eliaswalton/ci-cd-pipeline-project
cd ci-cd-pipeline-project
npm install
```

## Ejecución local
```bash
npm test          # Correr pruebas
npm run coverage  # Pruebas con reporte de cobertura
npm run lint      # Validar estilo de código
```

## Pipeline CI/CD

El workflow se ejecuta automáticamente en cada `push` y `pull request` a `main`:

1. **lint** — Valida el código con ESLint
2. **test** — Corre pruebas en Node.js 18 y 20
3. **build** — Verifica que el proyecto está listo