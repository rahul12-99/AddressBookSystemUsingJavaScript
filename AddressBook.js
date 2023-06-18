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

    // getter and setter method varification with Regex
    getFirstName(){
        return this.firstName;
    }
    setFirstName(firstName){
        let firstNameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (firstNameRegex.test(firstName)){
            this.firstName = firstName;
        }else throw "Incorrect First Name";
    }
    getLastName(){
        return this.lastName;
    }
    setLastName(lastName){
        let lastNameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (lastNameRegex.test(lastName)){
            this.firstName = lastName;
        }else throw "Incorrect Last Name";
    }
    getAddress(){
        return this.address;
    }
    setAddress(address){
        let addressRegex = RegExp('[(A-Z)(a-z)]{4,}');
        if (addressRegex.test(address)){
            this.address = address;
        }else throw "Address must be 4 letters";
    }
    getCity(){
        return this.city;
    }
    setCity(city){
        let cityRegex = RegExp('[(A-Z)(a-z)]{4,}');
        if (cityRegex.test(city)){
            this.city = city;
        }else throw "City must be 4 letters";
    }
    getState(){
        return this.state;
    }
    setState(state){
        let stateRegex = RegExp('[(A-Z)(a-z)]{4,}');
        if (stateRegex.test(state)){
            this.state = state;
        }else throw "State must be 4 letters";
    }
    getZip(){
        return this.zip;
    }
    setZip(zip){
        this.zip = zip;
    }
    getPhoneNumber(){
        return this.phoneNumber;
    }
    setPhoneNumber(phoneNumber){
        let phoneRegex = RegExp("[0-9]{10}");
        if (phoneRegex.test(phoneNumber)){
            this.phoneNumber = phoneNumber;
        }else throw "Incorrect Phone Number";
    }
    getEmail(){
        return this.email;
    }
    setEmail(email){
        let emailRegex = RegExp("^[a-zA-z0-9+.+a-z]+@+[a-z{2,5}+.+a-z{2,3}+.+a-z{2,3}]{2,30}");
        if (emailRegex.test(email)){
            this.email = email;
        }else throw "Incorrect Email";
    }

    // toString method
    toString(){
        return "First Name = " + this.firstName + ", Last Name = " + this.lastName + ", Address = " + this.address +
                ", City = " + this.city + ", State = " + this.state + ", Zip = " + this.zip + ", Phone Number = " +
                this.phoneNumber + ", Email = " + this.email
    }
}
let addressBookMain = new AddressBookMain("Rahul", "Kumar", "Banka", "Bhagalpur", "Bihar", 813211, 9934691893, "Rahul@123");
console.log(addressBookMain);
// create AddressBook Array
let addressBookMainArray = new Array();
addressBookMainArray.push(new AddressBookMain("Kundan", "Singh", "Saran", "Bangluru", "Bihar", 123456, 
                            7878867574, "kundan121@gmail.com"));
console.log(addressBookMainArray);  
// find contact by first name and edit the contact
let contacts = addressBookMainArray.find(contact => contact.firstName === "Kundan");
if (contacts){
    contacts.setFirstName("Ritik");
    contacts.setLastName("Kumar");
    contacts.setAddress("bokaro");
    contacts.setCity("jharkhand");
    contacts.setState("Bihar");
    contacts.setZip(654321);
    contacts.setPhoneNumber(9898989898);
    contacts.setEmail("ritikkumar121@gmail.com");
    console.log(addressBookMainArray);
}else{
    console.log("Contact Not Found");
} 
// Delete contact by name
let delContacts = addressBookMainArray.find(contact => contact.firstName === "Ritik");
if (delContacts != undefined){
    addressBookMainArray.pop();
    console.log("Contact Deleted");
    console.log(addressBookMainArray)
}else{
    console.log("Contact Not Found");
}
//Count number of contacts in array
let numOfContacts = addressBookMainArray.reduce((count, contact) => {
    return count + 1;
        }, 0);
console.log(numOfContacts);                         