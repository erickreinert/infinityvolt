from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Vehicles(db.model):
    vehicle_id = db.Column(db.Integer, primary_key=True)

    brand_name = db.Column(db.String(120), unique=False, nullable=False)
    model_name = db.Column(db.String(120), unique=True, nullable=False)
    model_year = db.Column(db.String(120), unique=False, nullable=False)
    autonomy = db.Column(db.Integer, unique=False, nullable=False)
    register_date = db.Column(db.DateTime, unique=False, nullable=False)
    status = df.Column(df.Integer, nullable=False)
