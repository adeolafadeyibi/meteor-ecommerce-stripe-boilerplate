Template.navigation.helpers({
    'UserInfo' : function(){
                console.log(UserInfo.find({createdBy:Meteor.UserId}).fetch(),"why")

        return UserInfo.findOne({createdBy:Meteor.userId()}).firstName;
    }
})

Template.navigation.events({
    'click #navbar a': function(){
        $('#navbar').removeClass('in');
    },
    'click #login-sign-in-link':function(){
        console.log("hding login modal");
        $('.loginModal').hide();
        Session.set('showModal',false);
    }
})