import type { Request, Response } from 'express';
import express from 'express';

import serviceOneRoute from './routes/service-one';

const PORT = process.env.PORT || 3002;

const app = express();

app.use('/service-one', serviceOneRoute);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});