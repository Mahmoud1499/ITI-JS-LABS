function Contact(name,phone){
    this.name=name;
    this.phone=phone;
    this.showDeatils=function(){
        alert("name = "+this.name +" phone = "+this.phone);
    }
}

var phoneBook = {
        contacts:[],
        addNewContact:function (){
            var newContact = new Contact("","");
            newContact.name = prompt("enter contact name");
            newContact.phone = prompt("enter contact phone");
            phoneBook.contacts.push(newContact);
        },
        searchForContact:function (){
            var searchKeyword = prompt("enter name or phone")
            for(var i =0;i<phoneBook.contacts.length;i++){
                var currentContact = phoneBook.contacts[i];
                if(searchKeyword == currentContact.name || searchKeyword == currentContact.phone){
                    currentContact.showDeatils();
                    break;
                }
    
            }
        },
        run:function (){
            var stop = false;
            do{
                var op = prompt("what do you want (add,search,exit)");
                switch(op){
                    case "add":
                        phoneBook.addNewContact();
                    break;
                    case "search":
                        phoneBook.searchForContact();
    
                    break;
                    case "exit":
                        stop = true;
                    break;
    
                }
            }while(!stop)
        }
    }
    
    
    phoneBook.contacts.push(new Contact("ahmed","123"))
    
    phoneBook.run()