
from fastapi import status , Request ,HTTPException
from app.utils.token import verify_token



async def isAuthenticated(request: Request):
    try:
        pass
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=str(e)
        )
