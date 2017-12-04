
Install ReactJS

On the terminal: npm install -g create-react-app

Follow the steps on the terminal to start the servers:

Back-end server
	1. cd back-end
	2. npm install
	3. npm start

Front-end server
	1. cd front-end
	2. npm install
	3. npm start

Kafka-backend server
	1. cd Kafka-backend
	2. npm install
	3. npm start

Mysql installation:

Username: root
Password: password

Import the sql dumps included in the Project folder.


//delete all your kafka and zookeeper logs

//run zookeeper

//run kafka by replacing the attached server.properties file with above one

	bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic login_topic;

	bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic response_topic;

	bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic flights_topic;

	bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic cars_topic;

	bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic test_topic;

	bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic folder_topic;

	bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic hotels_topic;



//create redis setter keys on command line interface

Redis strings: chome,clist,cbooking,hhome,hlist,hbooking,fhome,flist,fflight,a,b,c,d
