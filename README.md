# Travis CI Custom CRON Jobs Setup

Set desired CRON Job intervals for your Travis CI Builds. Script needs to be in running state always to keep CRON tasks running.

## Steps


```bash
1- Download the repository
2- Run npm install
3- Change start script timezone to yours
4- Rename .example.env to .env and paste in your Travis API Token
5- Change cronExpression in index.js to desired
6- Change timezone in cron.schedule in index.js to desired
7- Run npm start
8- Enjoy!
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[ISC](https://choosealicense.com/licenses/isc/)