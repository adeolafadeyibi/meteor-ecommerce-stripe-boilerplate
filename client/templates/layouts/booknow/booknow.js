isUserAlreadyLoggedIn = Boolean(Meteor.userId());

Template.booknow.events({
    'click a' : function(e){
        console.log(isUserAlreadyLoggedIn,"is this user already logged in");
        e.preventDefault();
        
           FlowRouter.go('/onetime');
        
    }
})