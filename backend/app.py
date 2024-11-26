''' Test API for Flask and React '''

from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/data', methods=['GET'])
def get_data():
    ''' Return some data as a JSON response '''
    return {'data': 'Hello from Flask'}

if __name__ == '__main__':
    app.run(debug=True)
