
Meteor.startup(() => {
    process.env.MAIL_URL = Meteor.settings.private.mail;

    Accounts.onLogin(function(user){
   
        var currentUserId = user.user._id;
        var userData;
      
        if(currentUserId ==  Meteor.settings.public.access){

            userData = CustomersList.find({},{fields:{"addressLatitude":1,"addressLongitude":1,"formPickupDate":1,"formStreet":1,_id:0}}).fetch()

        }else{

            userData = CustomersList.find( { createdBy: currentUserId},{fields:{"addressLatitude":1,"addressLongitude":1,"formPickupDate":1,"formStreet":1,_id:0}}).fetch()
        }
    });
});


CurrentUserId = null;
Meteor.publish(null, function() {
    CurrentUserId = this.userId;
});


Meteor.methods({
    'submitServiceDate' : function(formStreet,formZip,formType,formPickupTime,formPickupDate,formRecylcing,pricePaid,addressLongitude,addressLatitude){
        //get current Id
        var currentUserId = Meteor.userId();
        if(currentUserId){
            CustomersList.insert({
                formStreet: formStreet,
                formZip: formZip,
                formType:formType,
                addressLongitude : addressLongitude,
                addressLatitude : addressLatitude,
                formPickupTime: formPickupTime,
                formPickupDate:formPickupDate,
                formRecylcing:formRecylcing,
                pricePaid:pricePaid,
                createdBy: currentUserId
            });
        }

    },


     'submitReoccuring' : function(formState,formZip,formType){
        //get current Id
        var currentUserId = Meteor.userId();
        if(currentUserId){
            CustomersList.insert({
                state: formState,
                formZip: formZip,
                formType:formType,
                createdBy: currentUserId
            });
        }

    },

    'getUserId':function(){
        return Meteor.userId();
    },

    'createProfile':function(firstName,lastName,primeAddress,phoneNumber,primeEmail){
       
        var currentUserId = Meteor.userId();

        UserInfo.insert({
            firstName : firstName,
            lastName : lastName,
            primeAddress : primeAddress,
            phoneNumber : phoneNumber,
            primeEmail : primeEmail,
            createdBy : currentUserId   
        })
    },


    'updateProfile' : function(firstName){
        //first find the record of current user
        var usersIdInfo = UserInfo.findOne({"createdBy" : Meteor.userId()})._id;
       UserInfo.update({_id: usersIdInfo},{$set:{"firstName":firstName}});
    }
});


Meteor.publish('scheduledTasks',function(){
     var currentUserId = this.userId;

            if (currentUserId != Meteor.settings.public.access){
              // Not Administrator
                return CustomersList.find();
            }else{
              // Adminstrator
                return CustomersList.find({createdBy:currentUserId});
            }

});    