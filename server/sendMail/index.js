const kue = require('kue');
const nodemailer = require('nodemailer')
const redis = require('kue/lib/redis')

// Uncomment on production!
let jobs = kue.createQueue({
  redis: process.env.REDIS_URL
})

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
    subject: data.title,
    to: to,
    from: email,
    html: data.html
  })

  job
    .on('complete', function (){
      console.log('Job', job.id, 'with name', job.data.subject, 'is done')
    })
    .on('failed', function (){
      console.log('Job', job.id, 'with name', job.data.subject, 'has failed')
    })

  job.priority('high')
  job.save()
}

jobs.process('email', (job, done) => {
  transport.sendMail(job.data, (error, response) => {
    if(error){
      console.log(error);
    } else {
      console.log(job.data.subject+' complete');
    }
  })
  done()
})


exports.newMail = newMail
