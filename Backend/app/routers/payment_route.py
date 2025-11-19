import stripe ,os
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.models.payment import Payment
from app.database import get_db
from dotenv import load_dotenv
from app.schemas.payment_s import PaymentRequest

load_dotenv()

stripe.api_key = os.getenv("STRIPE_SECRET_KEY")
PUBLISHABLE_KEY = os.getenv("PUBLISHABLE_KEY")
DOMAIN = os.getenv("DOMAIN_URL")


router = APIRouter()

@router.post("/create-payment-session")
async def create_payment(data : PaymentRequest , db: Session = Depends(get_db)):
    session = stripe.checkout.Session.create(
        payment_method_types=["card"],
        mode="payment",
        line_items=[{
            "price_data": {
                "currency": "inr",
                "product_data": {"name": "Doctor Appointment Fees"},
                "unit_amount": data.fees * 100  # $50
            },
            "quantity": 1,
        }],
        success_url=f"{DOMAIN}/success",
        cancel_url=f"{DOMAIN}/cancel",
    )

    payment = Payment(
        user_id=data.user_id,
        doctor_id=data.doctor_id,
        stripe_payment_id=session.id,
        status="pending"
    )

    db.add(payment)
    db.commit()
    db.refresh(payment)

    return {"checkout_url": session.url, "payment_id": payment.id}



@router.get("/success")
async def success():

    return {
        "message" : "Payment Done"
    }


@router.get("/cancel")
async def cancel():
    return {
        "message" : "Payment Cancelled"
    }


# @router.post("/stripe/webhook")
# async def stripe_webhook(request: Request, db: Session = Depends(get_db)):
#     payload = await request.body()
#     sig_header = request.headers.get("stripe-signature")

#     try:
#         event = stripe.Webhook.construct_event(
#             payload=payload,
#             sig_header=sig_header,
#             secret=WEBHOOK_SECRET
#         )
#     except Exception as e:
#         print("Webhook error:", e)
#         raise HTTPException(status_code=400, detail="Invalid webhook signature")

#     if event["type"] == "checkout.session.completed":
#         session = event["data"]["object"]

#         stripe_payment_id = session["id"]

#         payment = db.query(Payment).filter(
#             Payment.stripe_payment_id == stripe_payment_id
#         ).first()

#         if payment:
#             payment.status = "completed"
#             db.commit()

#         print("Payment completed:", stripe_payment_id)

#     return {"status": "success"}
