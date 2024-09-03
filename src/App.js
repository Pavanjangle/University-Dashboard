import React from 'react';
import AdminLogin from './AdminLogin';
import StudentLogin from './StudentLogin';
import MyProfile from './MyProfile';
import MyPerformance from './MyPerformance';
import StudentSignup from './StudentSignup';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './Footer';


function App() {
  return (
    <div className="App ">
      <header className="App-header"style={{ backgroundColor: '#E8E8E8', minHeight: '100vh' }}>
      <AdminLogin />
      <StudentSignup />
      <StudentLogin />
      <MyProfile />
      <MyPerformance />
      <Footer />
      </header>
    </div>
  );
}

export default App;
