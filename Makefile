run-local:
	docker-compose -f docker-compose.yaml up

rebuild-api-image:
	docker build --no-cache -t goober-api:latest -f api/Dockerfile ./api

rebuild-app-image:
	docker build --no-cache -t goober-app:latest -f app/Dockerfile ./app
