# File: docspot-backend/main.py
from fastapi import FastAPI
from contextlib import asynccontextmanager
from database import Base, engine
from routers.auth import router as auth_router
from routers.appointments import router as appointment_router
from routers.integrations import router as integrations_router

@asynccontextmanager
async def lifespan(app: FastAPI):
    Base.metadata.create_all(bind=engine)
    yield

app = FastAPI(lifespan=lifespan)

# Include API routers
app.include_router(auth_router, prefix="/api/auth", tags=["Authentication"])
app.include_router(appointment_router, prefix="/api/appointments", tags=["Appointments"])
app.include_router(integrations_router, prefix="/api/integrations", tags=["Integrations"])

@app.get("/")
def root():
    return {"message": "Welcome to DocSpot API"}
