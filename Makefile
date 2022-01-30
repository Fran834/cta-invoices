HASURA = hasura

start: 
	docker-compose up -d
	docker-compose logs -f
	# cd $(HASURA) && hasura console
	# cd $(HASURA) && hasura migrate apply
	# cd $(HASURA) && hasura metadata apply
	# cd $(HASURA) && seeds apply

stop:
	docker-compose down

build:
	docker-compose build --no-cache