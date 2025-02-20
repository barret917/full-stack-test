import express from 'express';
import {
  getAll,
  postCreateCourier,
  updateCourier,
  deleteCourier,
  transportCounts,
} from '../controllers/courierController.js';

const router = express.Router();

router.get("/transportCount",transportCounts)
router.get('/', getAll);
 

router.post('/postCreateCourier', postCreateCourier);

router.patch('/updateCourier',updateCourier)

router.delete('/deleteCourier', deleteCourier)

export default router;
