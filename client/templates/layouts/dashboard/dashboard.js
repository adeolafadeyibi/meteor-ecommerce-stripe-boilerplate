// Meteor.startup(function(){
//     Mapbox.load();
// });

Template.dashboard.onCreated(function(){
    Meteor.subscribe('scheduledTasks');
})


Template.dashboard.helpers({
        'serviceTasks': function(){
            var currentUserId = Meteor.userId();
            console.log("dashboarddata",CustomersList.find({ createdBy: currentUserId }).fetch().length)
 			 return CustomersList.find({$and:[{createdBy:currentUserId},{formType:"reoccuring"}]}).fetch().length;
        }
    })



Template.dashboard.helpers({
        'reoccuringTasks': function(){
            var currentUserId = Meteor.userId();
            console.log("reoccuringTasks",CustomersList.find({$and:[{createdBy:currentUserId},{formType:"onetime"}]}).fetch().length)
            return CustomersList.find({$and:[{createdBy:currentUserId},{formType:"onetime"}]}).fetch().length;
        }
    })


Template.dashboard.helpers({
    'scheduledTasks' : function(){
        var currentUserId = Meteor.userId();


            if (currentUserId != Meteor.settings.public.access){
                console.log("this is not admin",currentUserId );
                return CustomersList.find({createdBy:currentUserId});
            }else{
                console.log("this is admin");
                return CustomersList.find();
            }

        
    }
});


