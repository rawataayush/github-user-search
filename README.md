# GitHub User Search

A GitHub User Search application built with React, Axios, and Tailwind CSS. Search for any GitHub user and view their public profile information using the GitHub Users API.

## Live Demo

🔗 Live URL: https://github-user-search-livid-sigma.vercel.app/

## Features

- Search GitHub users by username
- Fetch real-time data using the GitHub Users API
- Loading state while fetching data
- Error handling for invalid usernames
- Initial state before searching
- Press **Enter** or click the **Search** button to search

## Tech Stack

- React
- Vite
- Axios
- Tailwind CSS
- GitHub REST API

## Project Structure

src

├── components

│ ├── Header

│ ├── SearchBar

│ ├── InitialState

│ ├── Loading

│ ├── ErrorMessage

│ └── UserCard

├── App.jsx

└── main.jsx

## Getting Started

Clone the repository:

git clone <https://github.com/rawataayush/github-user-search.git>

Install dependencies:

npm install

Run the development server:

npm run dev


## API Used

GitHub Users API

https://api.github.com/users

## Future Improvements

- Responsive layout for tablet and desktop
- Display user repositories
- Display followers and following lists
- Search history
- Theme toggle (Light/Dark Mode)
- Debounced search
