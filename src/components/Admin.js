import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../admin.css';

function Admin() {
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    const fetchSurveys = async () => {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/surveys`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setSurveys(res.data);
    };
    fetchSurveys();
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/admin-login');
  };

  return (
    <div className="admin-container">
      <h2>Survey List</h2>
      <button onClick={handleLogout} className="logout-button">Logout</button>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Nationality</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {surveys.map((survey, index) => (
            <tr key={index}>
              <td>{survey.name}</td>
              <td>{survey.gender}</td>
              <td>{survey.nationality}</td>
              <td>{survey.email}</td>
              <td>{survey.phone}</td>
              <td>{survey.address}</td>
              <td>{survey.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;