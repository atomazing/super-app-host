# React ESM Native Microfrontends

## Авторизация в Nexus

Добавьте следующие строки в ваш корневой файл .npmrc, чтобы аутентифицироваться в репозитории Nexus:

Для конкретных реестров:

```bash
//nexus.bpm.lanit/repository/npm-all/:_authToken=NpmToken.00000000-0000-0000-0000-000000000000
//nexus.bpm.lanit/repository/npm-releases/:_authToken=NpmToken.00000000-0000-0000-0000-000000000000
```

Или для обоих реестров:

```bash
//nexus.bpm.lanit/repository/:_authToken=NpmToken.00000000-0000-0000-0000-000000000000
```

[Подробнее](https://wiki.bpm.lanit/pages/viewpage.action?pageId=110828117)

## Local development

```bash
npm run preview:watch -w @atomazing-org/host
```

Then open http://localhost:3030
