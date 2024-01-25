HOW TO UPLOAD IMGAGES ON YOUR Next Js APP USING CLOUDINARY

WHAT IS CLOUDINARY? 
cloudinary is an image management solution that supports image uploads, cloud storage, image manipulatons, image optimization for the web and delivery. 
it offers secure upload api, version management, remote upload from public urls, direct uploading from the browser, image transformation on upload, supports private images.

Having had an overview of cloudinary, let's dive in to how we can utilize cloudinary for image delivery in our full stack Next Js appliction.

To continue with the procedures requires a basic knowledge of REACT and Next js in order to get a full grasp.

#Having a basic knowledge of Next js will help better understand the upcoming procedures.

first we create a next Js application by running any of the following in your terminal: 
#npx create-next-app@latest
#yarn create next-app

you will then be asked the following prompts:
#the prompts for creating a next app.


install the following dependencies:
# npm install cloudinary
# npm install react spinners
cloudinary is the dependency for image uploads while react spinners is a library with in built components for displaying spin animations on the UI, this will give a better user experience when the image is uplaoding to cloudinary.



On your web browser open the cloudinary website wwww.cloudinary.com #image
-click on get started to create an account.
-sign up with any provider of your choice.
#image description

once sign up is complete: #image
how would you describe yorself: Developer 
#image

copy the code snippet for node js and store the values in an env file 
#code snippet 




Go to the root directory of your project:
create an .env file for storing enviromental variables;
then the folowing:
CLOUD_NAME=
CLOUDINARY_KEY=
CLOUDINARY_SECRET=



Once your project is initialized open the app directory, then create a folder called api ; within the api folder create another folder called upload and finally in the upload folder an index.js file.
in the index.js file of upload:
#picture of code

using the copied code from cloudinary documentary, replace the values with environment variables 

then at the top of your file import NextResponse from "next/server";

then add the following:
#code snippet image

back to the root folder, create two new folders; components and lib.
-the lib folder holds universal functions and actions that can be reusabele in the entire codebase.
    # in the lib folder create a file actions.js
    # add the codeImage
        ##explain the code.
-the components folder holds all react components in the project
    # in the components folder create a new file FormField.js this is a react component
    # add the CodeImage
        ##explain the code



 open the app directory,  then the index page of your project which is page.js:
 - add the codeImage
for the purpose of this tutorial we'll be creating a simple app that uploads an image and text from a form field and we will be using our browser dev tools (console and network) to confirm a successful upload.




# here

Be sure to update your next.config file at the root of project  with the domain name for cloudinary images to avaod next js error on successful upload
#

open your terminal and run the command to start the app;
    #npm run dev

open your browser to localhost:3000 you should see something similar to this:
    #browser Page image
-click on choose an image then wait till it is uploaded successfully when the spinner stops;
-open browser dev tools and inspect the network, you should see something like the image below;
    #browser successful upload newwork image.


finally you have successfully uploaded an image on the cloud using cloudinary, cloudinary uplaoded the image and returned a link to the image which can be used as src value for your images in your web app, now both images and captions of form field can then be stored as strings when writing your database schema.
