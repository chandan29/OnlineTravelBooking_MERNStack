
Install ReactJS

On the terminal: npm install -g create-react-app

Follow the steps on the terminal to start the servers:

Back-end server
	1. cd nodelogin
	2. npm install
	3. npm start

Front-end server
	1. cd reactlogin
	2. npm install
	3. npm start


//delete all your kafka and zookeeper logs

//run zookeeper

//run kafka by replacing the attached server.properties file with above one

	bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic login_topic;

	bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic response_topic;

	bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic flights_topic;

	bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic cars_topic;

	bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic test_topic;

	bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic folder_topic;