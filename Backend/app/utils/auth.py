
from fastapi import status , Request ,HTTPException , Depends
from app.utils.token import verify_token
from sqlalchemy.orm import Session
from app.models.users import User
from app.database import get_db


async def isAuthenticated(request: Request , db: Session = Depends(get_db)):
    try:
        header = request.headers.get("Authorization")
        if not (header):
             raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED , detail="token not found")
        token = header.split()[1]
        print(token)
        if not token:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED , detail="invailed Token")
        payload = verify_token(token)
        if not payload:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED , detail="invailed Token")
    
        print(payload)
        user = db.query(User).filter(User.id == payload["id"]).first()
        if not user:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND , detail="user not found")
        print(user)
        return user
    except HTTPException:
        raise 
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=str(e)
        )
    

async def isUser(request:Request ,  user:User = Depends(isAuthenticated)):
    try:
        if(user.role != "user"):
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED , detail="you are not allowed to access these routes")
        request.state.user = user
    except HTTPException:
        raise 
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=str(e)
        )



async def isDoctor(request:Request , user:User = Depends(isAuthenticated)):
    try:
        if(user.role != "doctor"):
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED , detail="you are not allowed to access these routes")
        request.state.user = user
    
    except HTTPException:
        raise 
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=str(e)
        )

async def isAdmin(request:Request , user:User = Depends(isAuthenticated)):
    try:
        if(user.role != "admin"):
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED , detail="you are not allowed to access these routes")
        request.state.user = user
    except HTTPException:
        raise 
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=str(e)
        )
