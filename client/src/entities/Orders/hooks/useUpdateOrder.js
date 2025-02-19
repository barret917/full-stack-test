import { apiRequestOrders } from "../api";

export async function useUpdateOrder(data) {
    try {
        const response = await apiRequestOrders(
            "PATCH",
            "/api/orders/updateOrder",
            {},
            data
        )
        return response
    } catch (error) {
        console.error(error)
    }
}