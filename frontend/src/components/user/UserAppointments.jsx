import React, { useState } from 'react';

function UserAppointments() {
  const [formData, setFormData] = useState({
    name: '',
    doctor: '',
    date: '',
    time: '',
  });

  const [appointments, setAppointments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAppointments([...appointments, formData]);
    setFormData({ name: '', doctor: '', date: '', time: '' });
  };

  return (
    <div className="container">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Doctor Name"
          value={formData.doctor}
          onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
          required
        />
        <input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          required
        />
        <input
          type="time"
          value={formData.time}
          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          required
        />
        <button type="submit">Book Appointment</button>
      </form>

      <h3>Your Appointments</h3>
      {appointments.length === 0 ? (
        <p>No appointments booked yet.</p>
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

export default UserAppointments;
