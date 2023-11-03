export class UserDto {
    constructor(id,fullName,nic_Type,nic_no,gender,address,email,contact,user_name,password) {
        this.id=id;
        this.fullName=fullName;
        this.nic_Type=nic_Type;
        this.nic_no=nic_no;
        this.gender=gender;
        this.address=address;
        this.email=email;
        this.contact=contact;
        this.user_name=user_name;
        this.password=password;
    }
}