from infra.app import create_app

app = create_app()


@app.route('/')
def home():
    return 'Infinity Volts'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8090) 

