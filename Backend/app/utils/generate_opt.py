import secrets

def generate_otp():
    return str(secrets.randbelow(10**6)).zfill(6)
    