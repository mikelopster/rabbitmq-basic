const amqp = require('amqplib');

async function sendOrder(order) {
  const connection = await amqp.connect('amqp://guest:guest@localhost:5672');
  const channel = await connection.createChannel();

  const queue = 'orders';
  await channel.assertQueue(queue, { durable: false });

  channel.sendToQueue(queue, Buffer.from(JSON.stringify(order)), { persistent: true });
  
  console.log(" [x] Sent %s", order);

  setTimeout(() => {
    connection.close();
    process.exit(0);
  }, 500);
}

const order = {
  id: 1,
  product: 'apple',
  quantity: 10
};

sendOrder(order);
