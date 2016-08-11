/*Routes    */

FlowRouter.route('/', {
    action: function(params) {
        BlazeLayout.render('layout1', { top: "HeaderSection", main: "featureBody", footer:"footer" });
    }
});


FlowRouter.route('/checkout', {
    action: function(params) {
        BlazeLayout.render('layout1',{ top: "HeaderSection", main:"services",  footer:"footer"});
    }
});


FlowRouter.route('/service', {
    action: function(params) {
        BlazeLayout.render('layout1',{ top: "HeaderSection", main:"service",  footer:"footer"});
    }
});



function checkLoggedIn (ctx, redirect) {  
    console.log(ctx,"context?")
  if (!Meteor.userId()) {
    redirect('/')
  }
}


FlowRouter.route('/dashboard', {  
  name: 'dashboard',
 // triggersEnter: [checkLoggedIn],
  action: function () {
     BlazeLayout.render('layout1',{ top: "HeaderSection", mainout:"dashboard",  footer:"footer"});
  }
})


FlowRouter.route('/onetime', {  
  name: 'onetime',
 // triggersEnter: [checkLoggedIn],
  action: function () {
    BlazeLayout.render('layout1', { top: "HeaderSection", main: "onetime", footer:"footer" });
  }
})


FlowRouter.route('/contactus', {  
  name: 'contactus',
 // triggersEnter: [checkLoggedIn],
  action: function () {
    BlazeLayout.render('layout1', { top: "HeaderSection", main: "contactus", footer:"footer" });
  }
})



function checkLoggedIn (ctx, redirect) {  
  if (!Meteor.userId()) {
    redirect('/')
  }
}

function redirectIfLoggedIn (ctx, redirect) {  
  if (Meteor.userId()) {
    redirect('/dashboard')
  }
}


Accounts.onLogin(function () {  
  FlowRouter.go('dashboard')
  // Seems a bit too simple? more on this later!
})

Tracker.autorun(function () {  
  if (!Meteor.userId()) {
    FlowRouter.go('/')
  }
})

