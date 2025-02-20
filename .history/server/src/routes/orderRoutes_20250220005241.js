import express from 'express';
import { getPaginated, deleteOrder, postOrder, updateOrder, getTotalCostByCity} from '../controllers/orderController.js';


const router = express.Router();

router.get('/', getPaginated);
router.get('/getTotalCostByCit',getTotalCostByCity);


router.post("/postOrder", postOrder)

router.patch("/updateOrder", updateOrder);

router.delete("/deleteOrder",deleteOrder)

export default router;
