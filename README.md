# Pokémon Battle App

Una aplicación web para batallas de Pokémon

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/pokemon-battle-app.git
   ```

2. Navega a los directorios de backend y frontend para instalar las dependencias:

   - Para el backend:

     ```bash
     cd pokemon-battle-app/backend
     pnpm install
     ```

   - Para el frontend:

     ```bash
     cd ../frontend
     pnpm install
     ```

## Uso

1. Configura tu entorno:

   - Crea un archivo `.env` en el directorio del backend y configura tus variables de entorno según el archivo `.env.example`.

2. Ejecuta el backend:

   ```bash
   cd backend
   pnpm run start:dev
   ```

3. Ejecuta el frontend:

   ```bash
   cd ../frontend
   pnpm start
   ```

4. Abre tu navegador y visita `http://localhost:3000` para ver la aplicación en funcionamiento.

## Configuración del Entorno

1. Copia el archivo `.env.example` y renómbralo a `.env`.
2. Ajusta las variables en el archivo `.env` según sea necesario:

```bash
cp .env.example .env
```

## Características

- Selección de Pokémon para batallas.
- Resultados de batallas en tiempo real.
- Historial de batallas almacenado y mostrado en la interfaz.

## Tecnologías Utilizadas

- **Frontend:** React, Material-UI
- **Backend:** NestJS, TypeORM, SQLite
- **Otros:** pnpm, Git
