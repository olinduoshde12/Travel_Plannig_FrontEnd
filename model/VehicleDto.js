export class VehicleDto{
    constructor(vehicleId,vehicleBrand,vehicleCategory,vehicleHybridOrNot,
                vehicleFuelType,vehicleFuelUsage,vehicleSeatCapacity,vehicle_payment_in_one_km,
                vehicle_payment_in_one_day, vehicleStatus,vehicleTransmissionType,vehicleDriverName,vehicleDriverContact) {

        this.vehicleId=vehicleId;
        this.vehicleBrand=vehicleBrand;
        this.vehicleCategory=vehicleCategory;
        this.vehicleHybridOrNot=vehicleHybridOrNot;
        this.vehicleFuelType=vehicleFuelType;
        this.vehicleFuelUsage=vehicleFuelUsage;
        this.vehicleSeatCapacity=vehicleSeatCapacity;
        this.vehicle_payment_in_one_km=vehicle_payment_in_one_km;
        this.vehicle_payment_in_one_day=vehicle_payment_in_one_day;
        this.vehicleStatus=vehicleStatus;
        this.vehicleTransmissionType=vehicleTransmissionType;
        this.vehicleDriverName=vehicleDriverName;
        this.vehicleDriverContact=vehicleDriverContact;
    }
}