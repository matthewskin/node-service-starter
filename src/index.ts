import type { Request, Response } from 'express';
import express from 'express';
import logger from './logging/winston-logger';


import serviceOneRoute from './routes/service-one';

const PORT = process.env.PORT || 3002;

const app = express();

app.use('/service-one', serviceOneRoute);

app.listen(PORT, () => {
    logger.info(`Server listening on ${PORT}`);
});