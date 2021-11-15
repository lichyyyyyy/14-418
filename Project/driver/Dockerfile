FROM python:3.9.1
ADD . /app/flask
WORKDIR /app/flask
RUN pip install -r requirements.txt
ENTRYPOINT ["python"]
CMD ["app.py"]