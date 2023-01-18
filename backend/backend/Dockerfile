FROM python:3.10-alpine
WORKDIR /home/app

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . . 
ENV DB_NAME=ecommerce \ 
    DB_USER=ecomm_user \
    DB_PASS=ecomm_user \
    DB_HOST=e-comm-mysql \
    DB_PORT=3306 \
    PYTHONUNBUFFERED=1

EXPOSE 8000

ENTRYPOINT ["sh", "docker-entrypoint.sh"]

