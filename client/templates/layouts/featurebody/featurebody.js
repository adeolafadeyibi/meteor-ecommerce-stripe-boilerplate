
Template.featureBody.rendered = function(){
    var showModal = Session.get('showModal');
    console.log("*********this si value of showModal",showModal);
    if(showModal==true){
         $('.loginModal').css('display','block');
    }
}

Template.featureBody.events({
    'click .closeButton' :function(){
        $('.loginModal').css('display','none');
        Session.set('showModal',false);
    }

})
