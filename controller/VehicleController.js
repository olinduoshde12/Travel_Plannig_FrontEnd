export class VehicleController {
    constructor() {
        $('#sub1').on('click', () => {
            this.saveVehicle();
        });
        this.handleLoadCustomer();
        this.handleAddData();
    }

     saveVehicle() {

         var vehicleobj = {
             vehicleId: $('#vehicleId').val(),
             vehicleBrand: $('#vehicleBrand').val(),
             vehicleCategory: $('#vehicleCategory').val(),
             vehicleHybridOrNot: $('#vehicleHybridOrNot').val(),
             vehicleFuelType: $('#vehicleFuelType').val(),
             vehicleFuelUsage: $('#vehicleFuelUsage').val(),
             vehicleSeatCapacity: $('#vehicleSeatCapacity').val(),
             vehicle_payment_in_one_km: $('#vehicle_payment_in_one_km').val(),
             vehicle_payment_in_one_day: $('#vehicle_payment_in_one_day').val(),
             vehicleStatus:$('#vehicleStatus').val(),
             vehicleTransmissionType:$('#vehicleTransmissionType').val(),
             vehicleDriverName:$('#vehicleDriverName').val(),
             vehicleDriverContact:$('#vehicleDriverContact').val()
         }

        let vehicle = JSON.stringify(vehicleobj);


        const formData = new FormData();
         const fileInput = $('#input-file')[0].files[0];
         const fileInput1 = $('#input-file1')[0].files[0];
        const fileInput2 = $('#input-file2')[0].files[0];

        formData.append('front_pic', fileInput);
         formData.append('side_pic', fileInput1);
         formData.append('rare_pic', fileInput2);
        formData.append('vehicle', vehicle);

        console.log(formData);
        $.ajax({
            url: "http://localhost:8080/api/v1/vehicle/save",
            method: "POST",
            processData: false, // Prevent jQuery from processing the data
            contentType: false,
            async: true,
            data: formData,// if we send data with the request
            success: function (res) {
                if (res.code === 200) {
                    alert("added....");
                }
            },
            error: function (ob) {
                swal("Oops", ob.responseJSON.message, "error");

            }
        });
    }


    handleLoadCustomer() {

        $.ajax({
            url: "http://localhost:8080/api/v1/vehicle/all",
            type: "GET",
            dataType: "json",
            headers: {
                "Content-Type": "application/json"
            },
            success: (resp) => {
                console.log(resp);
                this.handleAddData(resp.data);
            },
            error: (xhr) => {
                console.log(xhr);
            }
        });
    }

    handleAddData(array) {

        $('#vehicle-table tbody tr td').remove();

        array.map((value) => {

            let row = `<tr>
                            <td>${value.vehicleId}</td>
                            <td><img src="data:image/png;base64,${value.front_pic}" alt="ProfilePic" width="100px" height="100px" style="border-radius: 20px"></td>
                            <td>${value.vehicleBrand}</td>
                            <td>${value.vehicleCategory}</td>
                            <td>${value.vehicleHybridOrNot}</td>
                            <td>${value.vehicleFuelUsage}</td>
                            <td>${value.vehicle_payment_in_one_km}</td>
                            <td>${value.vehicle_payment_in_one_day}</td>
                            <td>${value.vehicleStatus}</td>                                        
                   </tr>`;

            $('#vehicle-table tbody').append(row);

        });
    }
}
new VehicleController();