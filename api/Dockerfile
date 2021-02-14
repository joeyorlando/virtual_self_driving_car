FROM python:3.9.1

RUN mkdir -p /opt/apps/api
WORKDIR /opt/apps/api

COPY . ./
RUN python setup.py build && python setup.py install
RUN pip install -r requirements.txt

CMD ["uvicorn", "src/api:app", "--reload"]
