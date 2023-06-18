class AddressBookMain{
    // Property
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    // constructor
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    // toString method
    toString(){
        return "First Name = " + this.firstName + ", Last Name = " + this.lastName + ", Address = " + this.address +
                ", City = " + this.city + ", State = " + this.state + ", Zip = " + this.zip + ", Phone Number = " +
                this.phoneNumber + ", Email = " + this.email
    }
}
let addressBookMain = new AddressBookMain("Rahul", "Kumar", "Banka", "Bhagalpur", "Bihar", 813211, 9934691893, "rahul@123");
console.log(addressBookMain);