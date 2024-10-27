// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import SignupPage from './components/SignupPage';
import ContactUs from './components/ContactUs';
import GeneralTask from './pages/GeneralTask';
import DailyTask from './pages/DailyTask';
import WeeklyTask from './pages/WeeklyTask';
import MonthlyTask from './pages/MonthlyTask';
import YearlyTask from './pages/YearlyTask';

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <div className="flex-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                        <Route path="/signup" element={<SignupPage />} />
                        <Route path="/contactus" element={<ContactUs />} />
                        <Route path="/general" element={<GeneralTask />} />
                        <Route path="/daily" element={<DailyTask />} />
                        <Route path="/weekly" element={<WeeklyTask />} />
                        <Route path="/monthly" element={<MonthlyTask />} />
                        <Route path="/yearly" element={<YearlyTask />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
