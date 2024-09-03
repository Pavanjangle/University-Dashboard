# University Dashboard

University Dashboard is a web-based platform designed to manage student data, track academic performance, and streamline administrative tasks for universities and educational institutions. Built with React for the frontend and Node.js with MySQL for the backend, this dashboard provides an intuitive interface and real-time data management capabilities.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Admin Login**: Secure login for administrators to manage the dashboard.
- **Student Management**: Admins can add, update, or delete student records.
- **Performance Monitoring**: Visual representation of student performance through graphs and charts.
- **Real-Time Updates**: Data changes are instantly reflected throughout the platform.
- **Student Login and Profile Management**: Students can sign up, log in, and update their profiles.
- **Responsive Design**: Works seamlessly on all devices, thanks to Bootstrap integration.

## Demo

Check out the live demo of the University Dashboard deployed on Netlify: [University Dashboard Demo](https://your-deployed-url.netlify.app)

## Installation

To get a local copy up and running, follow these steps:

### Prerequisites

- **Node.js** (version 14+)
- **npm** (version 6+)
- **MySQL** (version 8+)

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/Pavanjangle/University-Dashboard.git
    cd University-Dashboard/Backend
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Set up the MySQL database:
   - Create a new MySQL database named `university_dashboard`.
   - Update the database configuration in `index.js` with your MySQL credentials.

4. Start the backend server:
    ```bash
    node index.js
    ```
   The server will run on `http://localhost:5000`.

### Frontend Setup

1. Navigate to the frontend directory:
    ```bash
    cd ../Frontend
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the React development server:
    ```bash
    npm start
    ```
   The app will run on `http://localhost:3000`.

## Usage

1. **Admin Login**: Use the default credentials (`admin` / `adminpass`) to log in as an admin.
2. **Student Sign-Up**: Students can create an account and log in to view or update their profiles.
3. **Performance Tracking**: Admins can view and update student marks and monitor their progress.

## Technologies Used

- **Frontend**: React, Bootstrap, Axios
- **Backend**: Node.js, Express, MySQL, Helmet, Cors
- **Deployment**: Netlify (Frontend), Heroku or another hosting provider (Backend)
- **Other Libraries**: Font Awesome for icons, Google Fonts for typography

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the developers of React, Node.js, and MySQL for their amazing frameworks and tools.
- Icons by [Font Awesome](https://fontawesome.com/).
- Fonts by [Google Fonts](https://fonts.google.com/).

