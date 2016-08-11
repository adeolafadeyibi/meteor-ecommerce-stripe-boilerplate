
<b>Meteor E-Commerce Boilerplate</b>

A starter project for Meteor using Blaze with FlowRouter and Stripe checkout.


This repo aims to give you an E-commerce solution for you application. You’ll be able to have a customer select an item to purchase, purchase the item, and then see the item they purchase on their dashboard

<b>DEMO</b>
<a href="http://devcon.meteorapp.com">AB Clean - a made up cleaning service</a>

create a new user or using existing provided below.

existing username:
devcon@devcon.com

existing pw:
123456

Once logged in, you can sign up for a service and upon checkout it will be added to the collection and you'll be redirected to your dashobard page showing what you just purchased

<b>Checkout credentials</b>
To use the checkout which is in test mode, 
Enter 4242 4242 4242 4242 for Credit Card #
Enter 111 as the CCV code
Enter any future date as Expiration ex("12/22")


Packages
 Check in .meteor to see the packages used for this application


Models
User 
CustomersList

Pages/Routes
checkout
service
contactus
dashboard
onetime


<b>Usage.</b>
You’ll need to get a Stripe api  key  at Stripe.com to complete the checkout process. Only then upon checkout will your purchase be shown on your dashboard.

Once you have an api key, go into settings-development.json and replace “Enter public key here” with your “<apikey>” from Stride.

To run 

<b>Run with</b> 
meteor --settings settings-development.json  since we are adding our api keys to our json file outside application
