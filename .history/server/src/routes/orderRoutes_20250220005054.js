import express from 'express';
import { getPaginated, deleteOrder, postOrder, updateOrder} from '../controllers/orderController.js';


const router = express.Router();

router.get('/', getPaginated);
router.get()


router.post("/postOrder", postOrder)

router.patch("/updateOrder", updateOrder);

router.delete("/deleteOrder",deleteOrder)

export default router;
