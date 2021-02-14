run-local:
	# docker build -t goober-api:latest -f api/Dockerfile ./api
	# docker build -t goober-app:latest -f app/Dockerfile ./app
	docker-compose -f docker-compose.yaml up
