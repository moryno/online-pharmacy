# Medicine

## By Maurice Nganga

### _medicine_ landing page

![Medicine](./src/images/eventguide.png)

## Table of Content

- [Description](#description)
- [Features](#features)
- [Development](#development)
- [Live Link](#live-link)
- [Setup Instructions and Technology](#technology-used)
- [License](#license)

## Description

---

_medicine_ is an online pharmacy web application meant to be help patients find their medication and health products with ease. The client can browse and see any product when they land on the page, they can choose products by category, they can select a product and be redirected to a single page where they can read more about it. In the single page they can also read reviews about the product from other usersand also be able to leave of their own about the product.

_medicine_ has both the client side and the admin dashboard. The clients who are not registered can view the product and add product to cart but they need authentication to checkout. To get athentication a user has to register if they dont have an account then register or if they have an account they can login and they will be issued with an access token that will allow them to leave a review on a product or checkout the cart.

_admin_ has all the authority to visit any part of the site plus they can visit the admin dashboard. In the dashboard they can create, delete, update, fetch all the products. They can also see all the orders and see all the users who have registered to the site.

This is a _medicine_ website with a front-end made using React and a backend made with Ruby and Rails, and Postgresql. Rails and Postgress allowed us to create five models, _User_, _Product_, _Order_, _Cart_ and _Review_ that could communicate with the database. In each model if where we defined our macro associations.

Rails helped in creating api endpoints that could be used by React frontend to get, post, delete and update the products and its associates.

The front-end is diployed in [vercel](https://vercel.com/) hosting service while the Sinatra is hosted in [heroku](https://heroku.com/).

## Features

---

A user visiting this page would be able to see:

1. A home page populated with products from different manufacturers.

2. A top navigation section with links to register or login for a new user and a link to cart if they want to see what is in their cart and checkout.

3. A user can select an product by clicking on the cards and this will enable to read more about the product in a single separate page

4. For an authenticated user they can visit the single event page and they are provided with tools to post, review in any any product they are interested in.

5. An authorized user can checkout their cart in the in cart page.

6. Admin can get access to the admin dashboard where they can see all the products and also delete, update and create new products.

7. Admin can also see the orders and users registered in the website and also add users or delete them.

### Technology Used

---

- Used Visual Studio Code editor to create the front-end with _**React**_ and backend with _**Rails**_, _**Postgresql**_

- **Styled-components** - framework was used to add styling of the website.

- **Material-UI** - framework was used to add basic tables and data tables in the admin dashboard to display the products, users and orders. As well as adding icons in the website.

- **Redux** - was used to fetch products from server and to help persist a logged in user, products and cart across all pages in the website and enable them with accessibility privilages.

- **React** - help in creating interactive website

- **React-circular-progressbar** - help in creating interactive progressbar in the admin dashboard.

## _**Rails**_, _**Postgresql**_ helped in creating the database, the models, controllers, actions and the api endpoints to use in the client side.

## Development

---

Want to contribute? Excellent!

To enhance or contribute on the existing project, follow these steps:

- Fork the repo
- Run npm install in the client repository and bundle install in the backend repository to download the dependencies.
- Create a new branch (git checkout -b enhance-feature)
- Make the appropriate changes in the files
- Add changes to reflect the changes made
- Commit your changes (git commit -m 'Enhanced feature')
- Push to the branch (git push origin enhance-feature)
- Create a Pull Request

### Live Link

---

\- Click this link to see the live website [eventguide](https://event-guide-jvquku5fg-moryno.vercel.app/)

## License

---

MIT License

Copyright (c) [2022] [Maurice Nganga]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
