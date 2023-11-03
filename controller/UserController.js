
export  class UserController{
    constructor() {

        $('#ne3').on('click', () => {
          this.saveUser();
        });

        $('#deleteBtn').on("click",()=>{
        this.handleDeleteCustomer();
        })

        $('#doneBtn').on("click",()=>{
          this.handleUpdateUser();
        })

        this.handleLoadCustomer();
        this.handleTableClickEvent();
    }

    saveUser() {

        var userObj = {
            id: $('#id').val(),
            fullName: $('#fullName').val(),
            nic_Type: $('#nic_Type').val(),
            nic_no: $('#nic_no').val(),
            gender: $('#gender').val(),
            address: $('#address').val(),
            email: $('#email').val(),
            contact: $('#contact').val(),
            user_name:$('#user_name').val(),
            password:$('#password').val()
        }


        let user = JSON.stringify(userObj);


        const formData = new FormData();
        const fileInput = $('#input-file')[0].files[0];

        formData.append('file', fileInput);
        formData.append('user', user);

        console.log(formData);

        $.ajax({
            url: "http://localhost:8080/api/v1/user/save",
            method: "POST",
            processData: false, // Prevent jQuery from processing the data
            contentType: false,
            async: true,
            data: formData,// if we send data with the request
            success: function (res) {
                if (res.code === 200) {
                    alert("added successFully...")
                }
            },
            error: function (ob) {
                swal("Oops", ob.responseJSON.message, "error");

            }
        });

    }

    handleUpdateUser() {

        var userObj = {
            id: $('#id').val(),
            fullName: $('#fullName').val(),
            nic_Type: $('#nic_Type').val(),
            nic_no: $('#nic_no').val(),
            gender: $('#gender').val(),
            address: $('#address').val(),
            email: $('#email').val(),
            contact: $('#contact').val(),
            user_name:$('#user_name').val(),
            password:$('#password').val()
        }

        let user = JSON.stringify(userObj);


        const formData = new FormData();
        const fileInput = $('#input-file')[0].files[0];

        formData.append('file', fileInput);
        formData.append('user', user);

        console.log(formData);

        $.ajax({
            url: "http://localhost:8080/api/v1/user/update",
            method: "PUT",
            processData: false,
            contentType: false,
            async: true,
            data: formData,// if we send data with the request
            success: function (res) {
                if (res.code === 200) {
                    alert("update Success....");
                    this.handleLoadCustomer();
                }
            },
            error: function (ob) {
                swal("Oops", ob.responseJSON.message, "error");

            }
        });
    }




    handleLoadCustomer() {

        $.ajax({
            url: "http://localhost:8080/api/v1/user/all",
            type: "GET",
            dataType: "json",
            headers: {
                "Content-Type": "application/json"
            },
            success: (resp) => {
                this.handleAddData(resp.data);
            },
            error: (xhr) => {
                console.log(xhr);
            }
        });
    }

    handleDeleteCustomer() {

        $.ajax({
            url: "http://localhost:8080/api/v1/user?id="+$('#id').val(),
            type: "DELETE",
            dataType: "json",
            headers: {
                "Content-Type": "application/json"
            },
            success: (resp) => {
                if (resp.status === 200){
                    alert(resp.massage);
                    this.handleLoadCustomer();

                }else {
                    alert(resp.data);
                }
            },
            error: (xhr) => {
                console.log(xhr);
            }
        });
    }

    handleAddData(array) {

        $('#myTable tbody tr td').remove();

        array.map((value) => {

            let row = `<tr>
                            <td>${value.id}</td>
                            <td><img src="data:image/png;base64,${value.profilePic}" alt="ProfilePic" width="100px" height="100px" style="border-radius: 100%"></td>
                            <td>${value.fullName}</td>
                            <td>${value.nic_Type}</td>
                            <td>${value.nic_no}</td>
                            <td>${value.gender}</td>
                            <td>${value.address}</td>
                            <td>${value.email}</td>
                            <td>${value.contact}</td>
                            <td>${value.user_name}</td>
                            <td>${value.password}</td>                     
                   </tr>`;


            $('#myTable').append(row);

        });
    }





    handleTableClickEvent() {

        $('#myTable tbody').on('click', 'tr', (event) => {
           $('#id').val($(event.target).closest('tr').find('td').eq(0).text());
            $('#fullName').val($(event.target).closest('tr').find('td').eq(2).text());
            $('#nic_Type').val($(event.target).closest('tr').find('td').eq(3).text())
            $('#nic_no').val($(event.target).closest('tr').find('td').eq(4).text())
            $('#gender').val($(event.target).closest('tr').find('td').eq(5).text())
            $('#address').val($(event.target).closest('tr').find('td').eq(6).text())
            $('#email').val($(event.target).closest('tr').find('td').eq(7).text())
            $('#contact').val($(event.target).closest('tr').find('td').eq(8).text())
            $('#user_name').val($(event.target).closest('tr').find('td').eq(9).text());
            $('#password').val($(event.target).closest('tr').find('td').eq(10).text());
        });
    }



}
new UserController();