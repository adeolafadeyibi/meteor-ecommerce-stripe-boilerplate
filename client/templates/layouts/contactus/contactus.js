Template.contactus.rendered = function(){
      $("#validation-example").validate();
}



Template.contactus.events({
     'click a' : function(){

     //   $('.container').eq(0).empty().text("Thanks for reaching out, We will be in touch");
        $("a#submit").text("Thanks, we will be in touch");


        var userId = Meteor.userId();
        var userSubject = $('#subject').val();
        var userMessage = $('textArea').val();

        Meteor.call('sendContactForm',userId,userSubject,userMessage);

       

        setTimeout(function(){
            FlowRouter.go('/');
        },2000)

     }
})