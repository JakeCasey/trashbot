let { reminder } = require('./telegramWorker');
let { dates, dateComparison } = require('./dates.js');
let moment = require('moment');
var CronJob = require('cron').CronJob;
var job = new CronJob(
  //   '* * * * *',
  '0 20 * * 1',
  function () {
    if (dates.indexOf(moment().startOf('day').format()) > -1) {
      reminder();
    }
  },
  null,
  true,
  'America/Chicago'
);

job.start();
console.log('Job started.');
