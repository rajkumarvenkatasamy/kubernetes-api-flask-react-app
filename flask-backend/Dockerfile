FROM python:3.9.14-slim-buster

# Set Working Directory in the Container
WORKDIR /app

# Copy requirements.txt from HOST to Container Workding directory
COPY requirements.txt .

RUN pip install -r requirements.txt

COPY app.py .

COPY ../kubernetes .

# Container start command
CMD ["python", "app.py"]
