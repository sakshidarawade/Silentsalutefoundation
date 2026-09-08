import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';
import path from 'node:path';
import type { IncomingMessage } from 'node:http';
import { fileURLToPath } from 'node:url';
import formsHandler from './api/forms';

const rootDir = path.dirname(fileURLToPath(import.meta.url));

function readRequestBody(request: IncomingMessage) {
  return new Promise<string>((resolve, reject) => {
    let body = '';

    request.setEncoding('utf8');
    request.on('data', (chunk) => {
      body += chunk;
    });
    request.on('end', () => resolve(body));
    request.on('error', reject);
  });
}

export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, rootDir, ''));

  return {
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'local-forms-api',
      configureServer(server) {
        server.middlewares.use('/api/forms', async (request, response) => {
          if (request.method === 'POST') {
            try {
              const body = JSON.parse(await readRequestBody(request));
              const apiResponse = {
                status(code: number) {
                  response.statusCode = code;
                  return apiResponse;
                },
                json(payload: Record<string, string>) {
                  response.setHeader('Content-Type', 'application/json');
                  response.end(JSON.stringify(payload));
                },
              };

              await formsHandler({ method: request.method, body }, apiResponse);
            } catch {
              response.statusCode = 400;
              response.setHeader('Content-Type', 'application/json');
              response.end(JSON.stringify({ error: 'Invalid request body.' }));
            }
            return;
          }

          response.statusCode = 405;
          response.setHeader('Content-Type', 'application/json');
          response.end(JSON.stringify({ error: 'Method not allowed.' }));
        });
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(rootDir, './src'),
    },
  },
  server: { port: 3000, host: '0.0.0.0' },
  preview: { port: 4173, host: '0.0.0.0' },
  };
});
