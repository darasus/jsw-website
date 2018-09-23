require('dotenv').config();
const next = require('next');
const helmet = require('helmet');
const express = require('express');

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  express()
    .use(handler)
    .use(helmet())
    .listen(3000, () => process.stdout.write('Point your browser to: http://localhost:3000\n'));
});
