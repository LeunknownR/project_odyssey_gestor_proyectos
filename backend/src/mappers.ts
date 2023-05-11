import { WSAvailableDriverForTrip } from "../../websockets/types";
import { 
    CurrentDriverPayment, 
    CurrentDriverPaymentForGeneralAdmin, 
    Driver, DriverMinified, 
    DriverPaymentHistoryRecord, PaymentTrip } from "./types";

export const driverFromRecordMapper = (record: any): Driver => ({
    id: record["id_driver"],
    dni: record["_dni"],
    phone: record["_phone"],
    vehicleId: record["vehicleID"],
    photo: {
        url: record["_url_photo"]
    },
    name: record["user_name"], 
    surname: record["user_surname"],
    username: record["user_username"],
    plate: record["car_plate"]
});
export const availableDriverForTripMapper = (record: any): WSAvailableDriverForTrip => ({
    customerId: 0,
    socketDriverId: "",
    driverId: record["id_driver"],
    fullName: record["_fullname"],
    plate: record["_plate"],
    urlPhoto: record["_url_photo"]
});
export const driverMinifiedMapper = (record: any): DriverMinified => ({
    id: record["id_driver"],
    name: record["driver_name"]
});
const paymentTripMapper = (record: any): PaymentTrip => ({
    id: record["id_driver_payment_detail"],
    date: record["date_trip"],
    time: record["time_trip"],
    price: record["trip_price"],
    trip: {
        companyName: record["company_name"],
        destinationName: record["destination_name"]
    }
});
export const currentDriverPaymentGeneralAdminMapper = (record: any): CurrentDriverPaymentForGeneralAdmin => ({
    driverHasPaymentId: record["id_driver_has_payment"],
    driverName: record["driver_name"],
    driverSurname: record["driver_surname"],
    vehicleId: record["vehicle_id"],
    dni: record["dni"],
    urlPhoto: record["url_photo"],
    driverPaymentId: record["id_driver_payment"],
    totalAmount: record["total_amount"],
    paymentTrips: record["total_amount"] > 0 ? [paymentTripMapper(record)] : []
});
export const currentDriverPaymentGeneralAdminListMapper = (resultset: any[]) => {
    return resultset
        .reduce<CurrentDriverPaymentForGeneralAdmin[]>((acc, record) => {
            const idx = acc.findIndex(({ driverHasPaymentId }) => driverHasPaymentId === record["id_driver_has_payment"]);
            if (idx === -1)
                return [
                    ...acc,
                    currentDriverPaymentGeneralAdminMapper(record)
                ];
            acc[idx] = {
                ...acc[idx],
                paymentTrips: [
                    ...acc[idx].paymentTrips,
                    paymentTripMapper(record)
                ]
            };
            return acc;
        }, []);
}
export const currentDriverPaymentMapper = (resultset: any[]): CurrentDriverPayment => {
    const totalAmount = resultset[0]["total_amount"];
    return {
        driverHasPaymentId: resultset[0]["id_driver_has_payment"],
        totalAmount: totalAmount,
        paymentTrips: totalAmount > 0 
            ? resultset.map(paymentTripMapper)
            : []
    };
};
const driverPaymentHistoryRecordMapper = (record: any): DriverPaymentHistoryRecord => ({
    id: record["id_driver_payment"],
    paidDate: record["paid_date"],
    paidTime: record["paid_time"],
    totalAmount: record["total_amount"],
    paymentTrips: [paymentTripMapper(record)]
});
export const driverPaymentHistoryMapper = (resultset: any[]) => {
    return resultset
        .reduce<DriverPaymentHistoryRecord[]>((acc, record) => {
            const idx = acc.findIndex(({ id }) => id === record["id_driver_payment"]);
            if (idx === -1)
                return [
                    ...acc,
                    driverPaymentHistoryRecordMapper(record)
                ];
            acc[idx] = {
                ...acc[idx],
                paymentTrips: [
                    ...acc[idx].paymentTrips,
                    paymentTripMapper(record)
                ]
            };
            return acc;
        }, []);
}