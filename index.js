const cron = require('node-cron')
const axios = require('axios')
require('dotenv').config()

TRAVIS_AUTH_TOKEN = process.env.TRAVIS_AUTH_TOKEN

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

cron.schedule("* * * * *", function () {
    axios.post('https://api.travis-ci.com/repo/qasimabdullah404%2Ftravis-cron_jobs_timings-test/requests', payload)
})