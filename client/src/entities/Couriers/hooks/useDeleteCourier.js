import { apiRequestCouriers } from "./index";

export async function useDeleteCourier(data) {
    try {
        const response = await apiRequestCouriers(
            "DELETE",
            "/api/couriers/deleteCourier",
            {},
            data
        )
        return response
    } catch (error) {
        console.error(error)
    }
}