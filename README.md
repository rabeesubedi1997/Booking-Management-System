# React Bookings App

This project is a React application that fetches cancelled bookings data from a provided API and displays it on the front end. It utilizes React hooks for state management and local storage to store the fetched data.

## Features

- Fetches cancelled bookings data from an API
- Displays a list of bookings with details
- Uses custom hooks for data fetching
- Stores data in local storage for persistence
- Responsive design with a clean layout

## Project Structure

```
react-bookings-app
├── src
│   ├── components
│   │   ├── BookingList.tsx
│   │   ├── BookingItem.tsx
│   │   └── Layout.tsx
│   ├── hooks
│   │   └── useBookings.ts
│   ├── services
│   │   └── api.ts
│   ├── types
│   │   └── index.ts
│   ├── App.tsx
│   └── index.tsx
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd react-bookings-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```

The application will be available at `http://localhost:3000`.

## License

This project is licensed under the MIT License.