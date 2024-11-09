from flask import Flask, jsonify
import os
import redis

app = Flask(__name__)

# Redis connection
redis_host = os.getenv("REDIS_HOST", "localhost")
redis_port = int(os.getenv("REDIS_PORT", 6379))
redis_client = redis.StrictRedis(host=redis_host, port=redis_port, decode_responses=True)

@app.route('/api', methods=['GET'])
def api():
    redis_client.set("greeting", "Hello from the backend with Redis!")
    message = redis_client.get("greeting")
    return jsonify(message=message), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
