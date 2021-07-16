const cron = require('node-cron')
const axios = require('axios')
require('dotenv').config()

axios.defaults.headers.common['Authorization'] = process.env.TRAVIS_AUTH_TOKEN
axios.defaults.headers.common['Travis-API-Version'] =  '3'
axios.defaults.headers.post['Content-Type'] = 'application/json'

const payload = {
    "request": {
        "branch": "main"
    }
}

cron.schedule("* * * * *", function () {
    axios.post('https://api.travis-ci.com/repo/qasimabdullah404/travis-cron_jobs_timings-test/requests', payload)
})