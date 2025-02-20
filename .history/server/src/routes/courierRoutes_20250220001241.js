import express from 'express';
import {
  getAll,
  postCreateCourier,
  updateCourier,
  deleteCourier,
} from '../controllers/courierController.js';

const router = express.Router();

router.ge
router.get('/', getAll);
 

router.post('/postCreateCourier', postCreateCourier);

router.patch('/updateCourier',updateCourier)

router.delete('/deleteCourier', deleteCourier)

export default router;
