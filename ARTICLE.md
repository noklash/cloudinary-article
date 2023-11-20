HOW TO UPLOAD IMGAGES ON YOUR WEB APP USING CLOUDINARY

WhAT IS CLOUDINARY? 
cloudinary is an image management solution that supports image uploads, cloud storage, image manipulatons, image optimization for the web and delivery. 
it offers secure upload api, version management, remote upload from public urls, direct uploading from the browser, image transformation on upload, supports private images.

Having had an overview of cloudinary, let's dive in to how we can utilize cloudinary in our full stack Next Js appliction.
Having a basic knowledge of Next js will help better understand the upcoming procedures.

first we create a next Js application by running any of the following in your terminal: 
#npx create-next-app@latest
#yarn create next-app

you will then be asked the following prompts:
#the prompts for creating a next app.

install the following dependencies:
# npm install cloudinary


On your web browser open the cloudinary website wwww.cloudinary.com #image
-click on get started to create an account.
-sign up with any provider of your choice.#image description

once sign up is complete: #image
how would you describe yorself: Developer #image

copy the code snippet for node js and store the values in an env file 
#code snippet 




Go to the root directory of your project:
create an .env file for storing enviromental variables;
then the folowing:
CLOUD_NAME=
CLOUDINARY_KEY=
CLOUDINARY_SECRET=



Once your project is initialized open the app folder, then create a folder called api ; within the api folder create another folder called upload and finally in the upload folder an index.js file.
in the index.js file of upload:
#picture of code

using the copied code from cloudinary documentary, replace the values with environment variables 

then at the top of your file import NextResponse from "next/server";

then add the following:
#code snippet image

back to the root folder, open the app directory and oprn the index page which is page.js:
for the purpose of this tutorial we'll be creating a simple app that uploads an image and text from a form field.

# here

Be sure to update your next.config file with with the domain name for cloudinary images to avaod next js error on successful upload