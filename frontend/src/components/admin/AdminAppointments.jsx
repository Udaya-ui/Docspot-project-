import React, { useState } from 'react';

function AdminAppointments() {
  // Simulated dummy data
  const [appointments] = useState([
    { name: 'John Doe', doctor: 'Dr. Smith', date: '2025-07-01', time: '10:00' },
    { name: 'Pallavi Lomada', doctor: 'Dr. Ayesha', date: '2025-07-02', time: '14:30' },
    { name: 'Ali Khan', doctor: 'Dr. Patel', date: '2025-07-03', time: '11:15' },
  ]);

  return (
    <div className="container">
      <h2>All Appointments (Admin View)</h2>
      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Patient</th>
              <th>Doctor</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt, index) => (
              <tr key={index}>
                <td>{appt.name}</td>
                <td>{appt.doctor}</td>
                <td>{appt.date}</td>
                <td>{appt.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminAppointments;
