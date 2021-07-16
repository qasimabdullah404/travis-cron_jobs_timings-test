// Dependencies
const cron = require('node-cron')
const parser = require('cron-parser');
const axios = require('axios')
require('dotenv').config()

// Travis API Token
TRAVIS_AUTH_TOKEN = process.env.TRAVIS_API_TOKEN

// CRON TIME EXPRESSION( Minutes, Hour, Day of Month, Month, Day of week)
const cronExpression = "04 22 * * 5";
const interval = parser.parseExpression(cronExpression);

// TRAVIS API REQUEST
axios.defaults.headers.common['Authorization'] = `token ${TRAVIS_AUTH_TOKEN}`
axios.defaults.headers.common['Travis-API-Version'] =  '3'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Accept'] = 'application/json'

const payload = {
    "request": {
        "branch": "main",
        "message": "This is an api request"
    }
}

// Display when next CRON job is set to run
console.log('Next run:', interval.next().toString());

// Schedule the CRON job
cron.schedule(cronExpression, function () {
    axios.post('https://api.travis-ci.com/repo/qasimabdullah404%2Ftravis-cron_jobs_timings-test/requests', payload)
    console.log('Cron Job Started')
    console.log('Next run:', interval.next().toString());
}, {
    scheduled: true,
    timezone: "Asia/Karachi"
})