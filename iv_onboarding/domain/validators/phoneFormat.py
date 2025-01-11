import re
class PhoneFormat:
    @staticmethod
    def validate(user: dict) -> bool:
        pattern = r'^\s*\(?([1-9]{2})\)?[-\s]?9?[1-9]\d{7}\s*$'
        return bool(re.match(pattern, user["phone"]))