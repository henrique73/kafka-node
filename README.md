<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Node + Kafka</h3>
</div>

## About The Project

I've created this project to be able to learn more about how kafka works, and using a language that i'm familiar with which is node.
Utilizing node and kafka presented a bit of problem as most examples and tutorials uses Java, and since i was using kafka for the first time i had some problems.
Even tho there were many problems along the way, this only made me being intereseted in kafka even more

### Built With

* [Node](https://nodejs.org/en/)
* [KafkaJS](https://kafka.js.org/)

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* [Node](https://nodejs.org/en/download/)
* [Kafka](https://kafka.apache.org/downloads)

### Installation

First you will need to run yarn install in these folders: consumer-service, producer-service.</p>
Then you will need to start [zookeeper and kafka](https://kafka.apache.org/quickstart) ( You're able to run Kafka in Windows, insted of using the commands in the bin folder use them in bin/windows)</p>
After starting kafka change the broker name and id in both folders in the app.js file. 
Then just use the command yarn server in both the consumer and producer folders.
