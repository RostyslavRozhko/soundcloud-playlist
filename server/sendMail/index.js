const kue = require('kue');
const nodemailer = require('nodemailer')
const redis = require('kue/lib/redis')

console.log(process.env.REDIS_URL);

kue.redis.createClient = function() {
    var redisUrl = url.parse(process.env.REDIS_URL)
      , client = redis.createClient(redisUrl.port, redisUrl.hostname);
    if (redisUrl.auth) {
        client.auth(redisUrl.auth.split(":")[1]);
    }
    return client;
};

let jobs = kue.createQueue()

let email = 'rostyslav.rozhko@gmail.com'
let password = 'rostyshka971612'
let mailService = 'gmail'

let transport = nodemailer.createTransport({
  service: mailService,
  auth: {
    user: email,
    pass: password
  }
})

function newMail(to, data) {
  let job = jobs.create('email', {
    title: data.title,
    to: to,
    from: email,
    html: data.html
  })

  job
    .on('complete', function (){
      console.log('Job', job.id, 'with name', job.data.name, 'is done')
    })
    .on('failed', function (){
      console.log('Job', job.id, 'with name', job.data.name, 'has failed')
    })

  job.priority('high')
  job.save()
}

jobs.process('email', (job, done) => {
  mail.from = job.from
  mail.to = job.to
  mail.subject = job.title
  mail.html = job.html
  transport.sendMail(mail, (error, response) => {
    if(error){
      console.log(error);
    } else {
      console.log(job.data.title+' complete');
    }
  })
  done()
})


exports.newMail = newMail
