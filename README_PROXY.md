Proxy para OpenAI (evitar exponer la API key en el cliente)

Pasos para ejecutar el proxy localmente:

1. Instalar dependencias

```bash
cd /workspaces/Supermarket_Sales
npm install
```

2. Crear un archivo `.env` con tu clave:

```text
OPENAI_API_KEY=sk-...
```

3. Ejecutar el servidor

```bash
npm start
```

El servidor quedará escuchando en `http://localhost:3000` y expondrá `POST /api/chat`.

Uso desde el cliente (ya integrado en `index.html`):
- El cliente enviará `{ question, summary, sample }` al endpoint y recibirá `{ reply }`.

Seguridad:
- No expongas tu `.env` en repositorios públicos.
- Para producción, hospeda el servidor en un entorno seguro y con HTTPS.
