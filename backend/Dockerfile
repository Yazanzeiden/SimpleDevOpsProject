FROM python:3.9-slim
# Set the working directory inside the container
WORKDIR /app
# Copy the current directory contents into the container at /app
COPY . /app
# Install the dependencies
RUN pip install --no-cache-dir -r requirements.txt
# Expose the port 
EXPOSE 5000
# Define the environment variable 
ENV FLASK_APP=app.py
# Run the flask
CMD ["flask", "run", "--host=0.0.0.0", "--port=5000"]
