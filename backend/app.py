from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api', methods=['GET'])
def api():
    return jsonify(message="Hello from the BACKEND :)"), 200

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000)