from flask import abort
from domain.enums.httpStatus import HttpStatus
class RequiredFields:
    @staticmethod
    def validate(user: dict):
        required_fields = ["name", "lastname", "birthdate", "phone", "email"]
        for field in required_fields:
            if not user.get(field):
                return abort(
                    HttpStatus.BAD_REQUEST.value, f"O campo '{field}' é obrigatório."
                )   