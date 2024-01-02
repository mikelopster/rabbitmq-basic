# RabbitMQ Example

นี่คือ code ที่ใช้ใน Video หัวข้อ "Rabbit MQ และการใช้ Message Queue"

สามารถ run ได้ทันที่ด้วยคำสั่งนี้เพื่อทำการ run service ของ rabbitMQ

```shell
docker-compose up -d
```

และสามารถ run คำสั่งเหล่านี้เพื่อ run producer และ consumer ได้

```shell
node producer.js # run producer
node consumer.js # run consumer
```

### ดูฉบับ video ได้ที่
[![rabbitmq-basic](https://img.youtube.com/vi/BMHkZMnONqg/0.jpg)](https://youtu.be/BMHkZMnONqg)

### อ่านฉบับบทความได้ที่
https://blog.mikelopster.dev/rabbitmq-basic/
