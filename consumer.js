const amqp = require('amqplib');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rootpassword',
  database: 'orders'
});

connection.connect();

async function receiveOrders() {
  const conn = await amqp.connect('amqp://guest:guest@localhost:5672');
  const channel = await conn.createChannel();

  const queue = 'orders';
  await channel.assertQueue(queue, { durable: false });

  console.log(' [*] Waiting for messages in %s. To exit press CTRL+C', queue);
  
  channel.consume(queue, (msg) => {
    const order = JSON.parse(msg.content.toString());
    console.log(" [x] Received %s", order);
    
    const sql = 'INSERT INTO orders SET ?';
    connection.query(sql, order, (error, results) => {
      if (error) throw error;
      console.log('Order saved to database with id: ' + results.insertId);
    });

    channel.ack(msg);
  });
}

receiveOrders();
