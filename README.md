# React Customer Support

React Customer Support is a special library that lets you have an admin panel and client widget. An awesome customer cupport chat app.made to integrate with singalr or similar softwares.

##  How to run the app
1. Either fork or download the app and open the folder in the cli
2. Install all dependencies using the `npm i` command
3. Start the web server using the `npm run` command. The app will be served at http://localhost:3000/ 
4. Go to http://localhost:3000/ in your browser and start the action.

## How to use the library
1. Simply add the component you want to use.
2. Supply the mandatory props to the component.
3. Customize the component using the optional props and that is it.
4. You might need to read the [Storybook Documenation](https://617bad5931c922004a46fe6f-luoywuskvd.chromatic.com/?path=/story/panels-adminpanel--default "storybook documenation") for more information the types of each component as well brief description of each props is listed there 

## User Stories
- A user can tweet their thoughts
- A user can like other users tweets

## Features
- Admin Panel
  - The main component as admin can use it to interact with clients(clients using Client Widget)
  - See all client messages in one place.
  - See users status
  - Very customizable/reusable
  
  
- Client Widget
  - A widget given to the client to interact with the admin panel.
  
- Login Form
  - For client to login companies can  use it on their website and it is very customizable/reusable
  
- SignUp Form
  - similar to Login but for client to signgup Form companies can  use it on their  website and it is very customizable/reusable.
  
  ## Future Features
- more control on the admin panel 
- configuration panel to control the admin-client panel at once
- more components to the library

## Dependencies
- "@chatscope/chat-ui-kit-react": "^1.8.2",
- "@fortawesome/free-solid-svg-icons": "^5.15.4"
- "@fortawesome/react-fontawesome": "^0.1.16"
- "@testing-library/jest-dom": "^5.11.4"
- "@testing-library/react": "^11.1.0"
- "@testing-library/user-event": "^12.1.10"
- "@types/jest": "^26.0.15"
- "@types/node": "^12.0.0"
-  @types/react": "^17.0.0"
- "@types/react-dom": "^17.0.0"
- "rbx": "^2.2.0"
- "react": "16.13.1"
- "react-chat-widget": "3.0.5"
- "react-dom": "16.13.1"
- "react-scripts": "4.0.3"
- "typescript": "^4.1.2"
- "web-vitals": "^1.0.1"

## What the app looks like

![Admin Panel](https://github.com/elliehachemjob/react-customer-support/blob/master/screenshots/Admin.PNG)
![Client Widget](https://github.com/elliehachemjob/react-customer-support/blob/master/screenshots/Client.PNG)
![Login Form ](https://github.com/elliehachemjob/react-customer-support/blob/master/screenshots/Login.PNG)
![SignUp Form](https://github.com/elliehachemjob/react-customer-support/blob/master/screenshots/SignUp.PNG)

