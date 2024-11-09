from flask import Flask, jsonify
import redis
import os

app = Flask(__name__)

# Get the Redis host from the environment variable
redis_host = os.getenv('REDIS_HOST', 'localhost')

# Connect to the Redis server
r = redis.Redis(host=redis_host, port=6379, db=0)

@app.route('/api', methods=['GET'])
def api():
    # Example of setting and getting a value from Redis
    r.set('message', 'Hello from Redis!')
    message = r.get('message').decode('utf-8')
    return jsonify(message=message), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)