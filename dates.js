let moment = require('moment');
let dates = [
  moment('2020-08-10').startOf('day').format(),
  moment('2020-08-24').startOf('day').format(),
  moment('2020-09-07').startOf('day').format(),
  moment('2020-09-21').startOf('day').format(),
  moment('2020-10-05').startOf('day').format(),
  moment('2020-10-19').startOf('day').format(),
  moment('2020-11-02').startOf('day').format(),
  moment('2020-11-16').startOf('day').format(),
  moment('2020-11-30').startOf('day').format(),
  moment('2020-12-01').startOf('day').format(),
  moment('2020-12-14').startOf('day').format(),
  moment('2020-12-28').startOf('day').format(),
];

// Moment objects.
function dateComparison(a, b) {
  if (a.isSame(b)) {
    return 1;
  } else {
    return -1;
  }
}
module.exports.dates = dates;
module.exports.dateComparison = dateComparison;
