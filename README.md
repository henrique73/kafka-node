<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Node + Kafka</h3>
</div>

## About The Project

I've created this project to be able to learn more about how Kafka works and using a language that I'm familiar with which is node.
Utilizing node and Kafka presented a bit of a problem as most examples and tutorials use Java, and since I was using Kafka for the first time I had some problems.
Even tho there were many problems along the way, this only made me being interested in Kafka even more

### Built With

* [Node](https://nodejs.org/en/)
* [KafkaJS](https://kafka.js.org/)

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* [Node](https://nodejs.org/en/download/)
* [Kafka](https://kafka.apache.org/downloads)

### Installation

First, you will need to run yarn install in these folders: consumer-service, producer-service.</p>
Then you will need to start [zookeeper and kafka](https://kafka.apache.org/quickstart) ( You're able to run Kafka in Windows, instead of using the commands in the bin folder use them in bin/windows)</p>
After starting Kafka change the broker name and id in both folders in the app.js file. 
Then just use the command yarn server in both the consumer and producer folders.
