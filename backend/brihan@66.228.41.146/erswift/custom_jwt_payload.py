"""
When JWT gives the payload to the frontend, this allows the user_id to be sent to the frontend
at the same time.
"""

def jwt_response_payload_handler(token, user=None, request=None):
    return {
        'token': token,
        'username': user.username
    }
