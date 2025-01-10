from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Users(db.model):
    user_id = db.Column(db.Integer, primary_key=True)

    name = db.Column(db.String(120), unique=False, nullable=False)
    last_name = db.Column(db.String(120), unique=False, nullable=False)
    birth_date = db.Column(db.DateTime, unique=False, nullable=False)
    phone = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=False, nullable=False)
    register_date = db.Column(db.DateTime, unique=False, nullable=False)
    status = df.Column(df.Integer, nullable=False)
