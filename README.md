# Iskul v2

---

Version 2 of the Iskul project. This is a complete rewrite of the original Iskul project, which can be found [here](https://github.com/fardinkamal62/iskul).  
This time written in MERN Stack. And my first React project.

This time my inspiration came from my university's student portal, which has lots of features that I think is useful for students.
But the UI was not that good, so I decided to make my own student portal.  

## Features

---

- Students can sign up with their registration number and set up their account
- Students can view their class schedule
- Everyone has their personal profile page

## Setting up

---

- It's better to open two terminals, one for the frontend and one for the backend.
- Go to `frontend` & `backend` folder and run `npm install` to install all the dependencies individually.
- Run `npm start` in `frontend` terminal to start the frontend and `npm run dev` for backend server.
- You can start running `start.sh`, don't forget to make it executable first.

### ENV

---

PORT = 4567  
URI = mongodb+srv://username:password@yourmongodb/  
DB = your database  
TOKEN_SECRET = your secret  
PUBLIC_URL = 127.0.0.1:3000

You can copy this and paste it in your `.env` file which should be situated in root directory of the project.