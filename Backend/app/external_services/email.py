
from email.message import EmailMessage
import aiosmtplib

async def send_email(email , otp):
    message = EmailMessage()
    message["From"] = "goutamwaghe@gmail.com"
    message["To"] = email
    message["Subject"] = "Yout MediMeet Otp"
    message.set_content(f"This is a test email {otp} asynchronously!")

    smtp = aiosmtplib.SMTP(
        hostname="smtp.gmail.com",
        port=587,
        start_tls=False,
    )

    await smtp.connect()
    await smtp.starttls()

    await smtp.login("goutamwaghe@gmail.com", "dktq gswk ardw byea")

    response = await smtp.send_message(message)
    print(response)

    await smtp.quit()


