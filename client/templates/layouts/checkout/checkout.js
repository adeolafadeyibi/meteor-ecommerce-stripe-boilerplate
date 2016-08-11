Template.services.onCreated( () => {
  let template = Template.instance();

  template.selectedService  = new ReactiveVar( false );
  template.processing       = new ReactiveVar( false );

  template.checkout = StripeCheckout.configure({
    key: Meteor.settings.public.stripe,
    image: '/image/cleaningmanvacum.png',
    locale: 'auto',
    token( token ) {
      let service = "template.selectedService.get()",
          charge  = {
            amount: Session.get('tsServicePrice') * 100,
            currency:  'usd',
            source: token.id,
            description: token.description || "service.description",
            receipt_email: token.email
          };

      Meteor.call( 'processPayment', charge, ( error, response ) => {
        if ( error ) {
          console.log(error,"this is error");
          template.processing.set( false );
          alert("error");
           //FlowRouter.go('/onetime');
        } else {
          
          //Post info here to db
        
          var formStreet = Session.get('serviceAddress');
          var formZip = Session.get('zipCode')      
          var formType = Session.get('formType');
          var formPickupTime = Session.get('formPickupTime');
          var formPickupDate = Session.get('formPickupDate');
          var formRecylcing = Session.get('formRecylcing');
          var pricePaid = Session.get('tsServicePrice');
          var addressLongitude = Session.get('longitude');
          var addressLatitude = Session.get('latitude');


  
         Meteor.call('submitServiceDate',formStreet,formZip,formType,formPickupTime,formPickupDate,formRecylcing,pricePaid,addressLongitude,addressLatitude);
        
          //redirect to dashboard
          FlowRouter.go('/dashboard');
         
        }
      });
    },
    closed() {
      template.processing.set( false );
    }
  });
});

Template.services.helpers({
  processing() {
    return Template.instance().processing.get();
  },
  paymentSucceeded() {
    return Template.instance().paymentSucceeded.get();
  },
  servicePrice(){
    var price =  Session.get(('tsServicePrice'));
    price = (price*1).toFixed(2);
    Session.set('tsServicePrice',price);
    return price;
  }

});

Template.services.events({

    'click a' : function(e){
        console.log(isUserAlreadyLoggedIn,"is this user already logged in");
        e.preventDefault();
        if (isUserAlreadyLoggedIn == false){
             FlowRouter.go('/createAccount');
           return;
           
        }else{

        }
    },


  'click [data-service]' ( event, template ) {
    const pricing = {
      'full-torso-apparition': {
        amount: 15000,
        description: "Trash Concierge Service"
      }
    };

    let service = pricing[ event.target.dataset.service ];
    var amount = Session.get('tsServicePrice') * 100;
    template.selectedService.set( service );
    template.processing.set( true );

    template.checkout.open({
      name: 'ABClean',
      description: service.description,
      amount: amount,
      bitcoin: true
    });
  }
});

isUserAlreadyLoggedIn = Boolean(Meteor.userId());


