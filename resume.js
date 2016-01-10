'use strict';

var fs = require('fs'),
  hogan = require("hogan.js"),
  moment = require('moment');

var data;

try {
  data = JSON.parse(fs.readFileSync('./resume.json').toString());
  // console.log('resume', data);
}
catch (e) {
  throw new Error('Unable to parse JSON data: ' + e.message);
}



data.employmentPeriod = function () {

  var period = [];

  var start = moment(this.start).format('MMMM, YYYY');

  period.push(start);
  period.push('to');

  var end = this.end;

  if (this.end !== 'present') {
    end = moment(this.end).format('MMMM, YYYY');
  }

  period.push(end);

  return period.join(' ');

};

data.employmentPeriodHumanize = function () {

  var period = [];

  if (this.end !== 'present') {

    var milliseconds = moment(this.end).diff(moment(this.start));

    var years = moment.duration(milliseconds).years();
    var months = moment.duration(milliseconds).months();

    period.push('(');

    if (years) {
      period.push(years);
      if (years > 1) {
        period.push('years');
      }
      else {
        period.push('year');
      }
    }

    if (months) {

      if (years) {
        period.push(',');
      }

      period.push(months);

      if (months > 1) {
        period.push('months');
      }
      else {
        period.push('month');
      }
    }

    period.push(')');

  }

  return period.join(' ');

}


var template = hogan.compile(fs.readFileSync('./resume.tpl.html').toString());

var output = template.render(data);

console.log(output);
