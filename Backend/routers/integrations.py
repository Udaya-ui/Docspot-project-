from fastapi import APIRouter

router = APIRouter()

@router.post("/send-to-lab")
def send_to_lab():
    return {"message": "Lab request sent successfully"}