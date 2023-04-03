# Fetch Frontend Assessment

## Table of contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)

## Description

Are you obsessed with dogs? Constantly looking for a new best friend? Look no further! This application, created for the Fetch frontend assessment, provides you with ALL the dogs you could hope for, right at your fingertips. Search by breed and narrow your search by zip code and age range.

Your next best friend is waiting. Visit [this link](https://mbronstein1.github.io/fetch-frontend-assessment/) to get started!

## Installation

In order to use our app, simply go to the following link: https://infinite-river-93616.herokuapp.com/

If by any chance you wish to deploy this app on your local machine, use the following steps (you must have MySQL, Node.js, and MySQL workbench installed on your machine):

- Clone this repo to your machine
- Install all dependencies
- In MySQL source the db schema file
- Use MySQL workbench to import csv to movies table
- Start the app using `npm run start` or a similar command

## Usage

When the app is deployed you will begin on the home page. Here you can see the navigation bar, a brief overview of our app, and a Browse Movie Collection button. Click the Browse button to see the catalog.

![GIF of homepage and browse](./assets/Home%20gif.gif)

If you are not logged in, your functionality is limited to perusing the browse page slideshow and viewing a variety of movie details when you click a movie image.

If you wish to get full access to the site, click the Login link in the navigation bar. You will also be redirected to the Login page if you try to perform an action limited to registered users such as viewing the My Collection page, attempting to save a movie to your collection, or performing a customized genre or movie title search.

You can use the following test user to log in:

- email: test5@test.com
- password: 12345678

![GIF of logging in](./assets/Login%20gif.gif)

When you are logged in you can perform a custom search on the Browse page by using the search forms on the left side of the page. You can use one criteria in a search. Your search results are populated in the space to the right.

![GIF of genre search](./assets/Genre%20search%20gif.gif)

When the search results appear, clicking on a result will launch the movie details modal. A variety of details are present to help inform you about the movie. Click the Save to My Collection button at the bottom of the modal to save the movie to your collection.

![GIF of search result and save to collection](./assets/Save%20to%20favorites.gif)

To view your collection, head over to the My Collection page via the navigation bar. Here we diplay your saved movie collection. You can click on each item and view the movie modal details modal. On this modal, you have the ability to remove the movie from your collection by clicking the Remove from My Collection button. Changes are displayed immediately.

![GIF of My Collection page and removing from collection](./assets/Collection.gif)

When you are all done with your session, logout by clicking the Logout button in the navigation bar. Your collection will remain intact on your next visit. Enjoy!

![GIF of logging out](./assets/Logout.gif)

## Credits

Brought to you by the following certified couch potatoes:

- Matthew Bronstein: [mbronstein1](https://github.com/mbronstein1)
- David Byrd: [methyl8](https://github.com/methyl8)
- Brendon Jiang: [JBrendon15](https://github.com/JBrendon15)
- Jared Johnson: [nolacoder](https://github.com/nolacoder)

## License

MIT License

Copyright (c) 2022 Couch Potato LLC

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
