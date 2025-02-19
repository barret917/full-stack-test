import express from 'express';
import {
  getAll,
  postCreateCourier,
  updateCourier,
  deleteCourier,
} from '../controllers/courierController.js';

const router = express.Router();

// router.get('/courier/:courierId', getCourier); 
router.get('/', getAll);
// router.get('/getTotal/:courierId', getTotalDistCourier);
// router.get('/getCountOrders/:courierId', getCountOrders); 
// router.get('/getCourierParametr', getCourierParametr); 

router.post('/postCreateCourier', postCreateCourier);

router.patch('/updateCourier',updateCourier)

router.delete('/deleteCourier', deleteCourier)

export default router;
