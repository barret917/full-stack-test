import { apiRequestOrders } from "./index"

export async function useDeleteOrder(data) {
    try {
        const response = await apiRequestOrders(
            "DELETE",
            "/api/orders/deleteOrder",
            {},
            data
        )
        return response
    } catch (error) {
        console.error(error)
    }
}