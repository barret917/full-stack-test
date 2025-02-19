import { apiRequestCouriers } from "./index"

export async function useUpdateCourier(data) {
    try {
        const response = await apiRequestCouriers(
            "PATCH",
            "/api/couriers/updateCourier",
            {},
            data
        )

        return response
    } catch (error) {
        console.error(error)
    }
}