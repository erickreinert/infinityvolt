from datetime import date
from models.db import db

class Vehicles(db.Model): 
    __tablename__ = "vehicles"

    vehicle_id = db.Column(db.String(36), primary_key=True)
    correlation_id = db.Column(db.String(36), unique=True, nullable=False)
    owner_id = db.Column(db.String(36), unique=False, nullable=True)
    brand_name = db.Column(db.String(120), unique=False, nullable=False)
    model_name = db.Column(db.String(120), unique=False, nullable=False)
    model_year = db.Column(db.String(120), unique=False, nullable=False)
    autonomy = db.Column(db.Integer, unique=False, nullable=False)
    register_date = db.Column(db.DateTime, unique=False, nullable=False)
    status = db.Column(db.Integer, nullable=False)

    def __init__(self, vehicle_id, brand_name, model_name, model_year, autonomy, status, correlation_id):
        self.correlation_id = correlation_id
        self.vehicle_id = vehicle_id
        self.brand_name = brand_name
        self.model_name = model_name
        self.model_year = model_year
        self.autonomy = autonomy
        self.register_date = date.today()
        self.status = status

    def to_dict(self):
        return {
            "id": self.vehicle_id,
            "brand_name": self.brand_name, 
            "model_name": self.model_name,
            "model_year": self.model_year,
            "autonomy": self.autonomy,
            "status": self.status,
            "register_date": self.register_date.isoformat() if self.register_date else None,
            "owner_id": self.owner_id or None
        }
    
    