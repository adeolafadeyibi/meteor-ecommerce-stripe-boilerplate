// //Meteor.call('removeAllPosts');

 Template.onetime.rendered = function (){
     $( "#ontime-serviceDate").datepicker({ minDate: 0, maxDate: "+1M +10D" });
  };


Template.onetime.events({
    'click a' : function(e){

        var wantRecycling =  $('input[type=checkbox]').prop('checked') ? "yes" : "no";
      //  e.preventDefault();
        var currentUserId = Meteor.userId();
        var formStreet = $("#street-address").val();
        var formZip = $("#zip-code").val();
        var formType = "onetime";
        var formPickupTime = "After 6:00pm";
        var formPickupDate = $("#ontime-serviceDate").val();
        var formRecylcing = wantRecycling;
        var pricePaid = "15.99"

        var address = encodeURIComponent(formStreet+" "+formZip);
        var dataUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?country=us&proximity=38.8977%2C%2077.0365&types=address&autocomplete=true&access_token="+ Meteor.settings.public.mapbox;

        //get long & lat from api call
        $.ajax({
            //add key to settings.json and call it from there
            //encode street address and zip then pass that into url
            url : dataUrl, 
             type : 'get'

        }).done(function(data){
            console.log('ajax call is done',dataUrl,data.features[0].geometry.coordinates);
            Session.set('longitude',data.features[0].geometry.coordinates[0]);
            Session.set('latitude',data.features[0].geometry.coordinates[1]);
        })

    
     //storing address and zipcode in session
   Session.set('serviceAddress', formStreet);
   Session.set('zipCode', formZip);
   Session.set('formType',formType);
   Session.set('formPickupTime',formPickupTime);
   Session.set('formPickupDate',formPickupDate);
   Session.set('formRecylcing',formRecylcing);
   Session.set('tsServicePrice',pricePaid);



    }
})

