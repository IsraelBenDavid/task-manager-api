const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'israelbd98@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. We hope you will enjoy Task-App!`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'israelbd98@gmail.com',
        subject: 'We deeply sorry!',
        text: `Goodbye, ${name}. We hope you have enjoyed Task-App!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}