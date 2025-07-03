from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from schemas.appointments import AppointmentCreate
from models import Appointment
from database import SessionLocal
from models import Appointment
import models

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/", response_model=AppointmentCreate)
def create_appointment(appointment: AppointmentCreate, db: Session = Depends(get_db)):
    new_appointment = models.Appointment(
    patient_id=appointment.patient_id,
    doctor_id=appointment.doctor_id,
    appointment_date=appointment.appointment_date,  # ✅ correct
    reason=appointment.reason
    )

    db.add(new_appointment)
    db.commit()
    db.refresh(new_appointment)
    return new_appointment

@router.get("/patient/{patient_id}", response_model=list[AppointmentCreate])
def get_patient_appointments(patient_id: int, db: Session = Depends(get_db)):
    return db.query(Appointment).filter(Appointment.patient_id == patient_id).all()

@router.get("/doctor/{doctor_id}", response_model=list[AppointmentCreate])
def get_doctor_appointments(doctor_id: int, db: Session = Depends(get_db)):
    return db.query(Appointment).filter(Appointment.doctor_id == doctor_id).all()