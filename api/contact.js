import express from 'express'
import nodemailer from 'nodemailer'

require('dotenv').config()

const app = express()

app.use(express.json())

app.get('/', function (req, res) {
  res.status(405).json({ error: 'sorry!' })
})

app.post('/', function (req, res) {
  console.log('api reached')
  console.log(req.body)
  
  sendMail(req.body.name, req.body.email, req.body.message)

  res.status(200).json({ 'message': 'OH YEAH' })
})
module.exports = {
  path: '/api/contact',
  handler: app
}

const sendMail = (name, email, message) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_APP_PASSWORD
    }
  })
  transporter.sendMail({
    from: process.env.GMAIL_EMAIL,
    to: process.env.GMAIL_EMAIL,
    subject: `Lundregan.com Contact Request - ${name} , ${email}`,
    text: `${name} - ${email} \n\n ${message}`
  })
}