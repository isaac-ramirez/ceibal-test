## Setup

Paso a paso: https://www.youtube.com/watch?v=bIoui408yNI&ab_channel=IsaacRamirez

1. Configurar .env:

```bash
NODE_ENV=development

BASE_URL=http://localhost:3000
API_BASE_URL=http://localhost:3000

# Lo importante es la configuración de MYSQL el resto se puede dejar default
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=root
MYSQL_DATABASE=ceibal
```

2. Importar base de datos:

```bash
El dump se encuentra en la carpeta /db
```

## Modelo
![image](https://github.com/isaac-ramirez/ceibal-test/assets/48778675/4f94f035-c2df-4cc7-8157-74b58600bafb)


## Dependencias

Asegúrate de instalar todas las dependencias:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Para iniciar el development server en `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev
```

## Producción

Para buildear la aplicación para production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build
```

Para ver una preview local del build de producción:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview
```

## ESLint

Para correr ESLint en todos los archivos:

```bash
# npm
npm run lint

# pnpm
pnpm lint

# yarn
yarn lint
```

Para fixear potenciales errores de ESLint:

```bash
# npm
npm run lint:fix

# pnpm
pnpm lint:fix

# yarn
yarn lint:fix
```
