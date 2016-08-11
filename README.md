
<b>Meteor E-Commerce Boilerplate</b>

A starter project for Meteor using Blaze with FlowRouter and Stripe checkout.


This repo aims to give you an E-commerce solution for you application. You’ll be able to have a customer select an item to purchase, purchase the item, and then see the item they purchase on their dashboard


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
