
import {Router} from 'express';
import {getAllLegislation, createLegislation} from '../controllers/lagislationController.js';

const lagislationRouter = Router();
lagislationRouter.get('/', getAllLegislation);
lagislationRouter.post('/', createLegislation);


export default lagislationRouter;