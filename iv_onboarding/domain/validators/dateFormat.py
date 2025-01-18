from datetime import datetime
class DateFormat:
    @staticmethod
    def validate(user:dict) -> bool:
        try:
            datetime.strptime(user["birthdate"], "%d-%m-%Y")
            return True
        except ValueError:
            return False