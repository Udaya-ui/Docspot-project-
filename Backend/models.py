from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(100), unique=True, index=True)
    phone = Column(String(15))
    hashed_password = Column(String(255))
    role = Column(String(50))
    is_verified = Column(Boolean, default=False)

    appointments_as_patient = relationship("Appointment", back_populates="patient", foreign_keys='Appointment.patient_id')
    appointments_as_doctor = relationship("Appointment", back_populates="doctor", foreign_keys='Appointment.doctor_id')

class Appointment(Base):
    __tablename__ = "appointments"

    id = Column(Integer, primary_key=True, index=True)
    patient_id = Column(Integer, ForeignKey("users.id"))
    doctor_id = Column(Integer, ForeignKey("users.id"))
    datetime = Column(DateTime)
    status = Column(String(20))

    patient = relationship("User", back_populates="appointments_as_patient", foreign_keys=[patient_id])
    doctor = relationship("User", back_populates="appointments_as_doctor", foreign_keys=[doctor_id])
