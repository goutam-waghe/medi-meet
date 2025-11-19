import stripe
from fastapi import APIRouter, Request, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.payment import Payment
import os 
from dotenv import load_dotenv
load_dotenv()



WEBHOOK_SECRET = os.getenv("WEBHOOK_SECRET")

router = APIRouter()



@router.post("/stripe/webhook")
async def stripe_webhook(request: Request, db: Session = Depends(get_db)):
    payload = await request.body()
    sig_header = request.headers.get("stripe-signature")

    try:
        event = stripe.Webhook.construct_event(
            payload=payload,
            sig_header=sig_header,
            secret=WEBHOOK_SECRET
        )
    except Exception as e:
        print("Webhook error:", e)
        raise HTTPException(status_code=400, detail="Invalid webhook signature")

    if event["type"] == "checkout.session.completed":
        session = event["data"]["object"]

        stripe_payment_id = session["id"]

        payment = db.query(Payment).filter(
            Payment.stripe_payment_id == stripe_payment_id
        ).first()

        if payment:
            payment.status = "completed"
            db.commit()

        print("Payment completed:", stripe_payment_id)

    return {"status": "success"}
