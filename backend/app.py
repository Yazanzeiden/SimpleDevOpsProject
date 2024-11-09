from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api', methods=['GET'])
def api():
    return jsonify(message="Hello from the BACKEND :)"), 200

if __name__ == '__main__':
    app.run(host='44.206.247.4', port=5000)