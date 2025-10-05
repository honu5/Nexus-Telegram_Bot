<<<<<<< HEAD
# Currency Converter Bot API

Minimal Express API to convert currency amounts. Designed to be used by a chat bot (e.g., Telegram) or directly via HTTP.

## Endpoints

- GET /api/health — health check
- GET /api/convert?from=USD&to=EUR&amount=100 — returns converted amount using exchangerate.host

## Quick start

1. Install deps

```bash
npm install
```

2. Start dev server

```bash
npm run dev
```

3. Convert

- http://localhost:3000/api/convert?from=USD&to=EUR&amount=10

## Testing

```bash
npm test
```

## Environment

- PORT: optional port (default 3000)
- No API key required for exchangerate.host

## Structure

- server/app.js — Express app (factory for DI)
- server/services/ratesServices.js — rate fetching + cache
- server/utils/server.js — bootstrap
- tests/ — Jest tests
=======
# Nexus-Telegram_Bot
A telegram bot buikt with node and express
>>>>>>> e70bc7efa8f3c7db552828263e14a8e0db205542
