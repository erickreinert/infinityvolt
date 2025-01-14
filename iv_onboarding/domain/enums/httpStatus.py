from enum import Enum

class HttpStatus(Enum): 
    CREATED = 201
    OK = 200
    BAD_REQUEST = 400
    NOT_FOUND = 404
    METHOD_NOT_ALLOWED = 405