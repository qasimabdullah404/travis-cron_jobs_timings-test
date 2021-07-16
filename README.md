
# Travis CI Custom CRON Jobs Setup

Set desired CRON Job intervals for your Travis CI Builds. Script needs to be in running state always to keep CRON tasks running.

## Steps


```bash
1- Download the repository
2- Run npm install
3- Change start script timezone to yours
4- Rename .example.env to .env 
5- Paste in your Travis API Token
6- Insert your active github repository on Travis slug in format <owner>%2F<repo>
7- Change cronExpression in index.js to desired
8- Change timezone in cron.schedule in index.js to desired
9- Run npm start
10- Enjoy!
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[ISC](https://choosealicense.com/licenses/isc/)