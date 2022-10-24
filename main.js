const moment = require('moment-timezone');

let findStartEndOfMonth = (inputDate, tzString) => {
  let utcOffset = moment.tz(tzString).utcOffset();
  // Convert UTC back to the current date of the current TimeZone
  date = new Date(inputDate.getTime() + utcOffset * 60 * 1000);
  let startDate, endDate;
  startDate = new Date((new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), 1))).getTime() - utcOffset * 60 * 1000);
  endDate = new Date((new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + 1, 1))).getTime() - 1 - utcOffset * 60 * 1000);
  // Convert it back to the current date of the current TimeZone
  startDate = new Date(startDate.getTime());
  endDate = new Date(endDate.getTime());
  // return date.toLocaleString("en-US", {timeZone: tzString});
  return { startDate, endDate }
}

console.log(findStartEndOfMonth(new Date("2022-03-01"), 'America/New_York'))

let findMonthToDate = ((inputDate, tzString) => {
  let utcOffset = moment.tz(tzString).utcOffset();
  // Convert UTC back to the current date of the current TimeZone
  date = new Date(inputDate.getTime() + utcOffset * 60 * 1000);
  let startDate, endDate;
  startDate = new Date((new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), 1))).getTime() - utcOffset * 60 * 1000);
  endDate = new Date((new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + 1))).getTime() - 1 - utcOffset * 60 * 1000);
  // Convert it back to the current date of the current TimeZone
  startDate = new Date(startDate.getTime());
  endDate = new Date(endDate.getTime());
  // return date.toLocaleString("en-US", {timeZone: tzString});
  return { startDate, endDate }
})

console.log(findMonthToDate(new Date("2022-12-24T20:00:00"), 'Asia/Ho_Chi_Minh'))

let findLastWeekPeriod = ((date, tzString) => {
  let currentDate = moment(new Date(date.getTime() - 7 * 24 * 60 * 60 * 1000));
  let startOfWeek = currentDate.tz(tzString).startOf('isoWeek').toDate();
  let endOfWeek = currentDate.tz(tzString).endOf('isoWeek').toDate();
  return { startOfWeek, endOfWeek }
})

console.log(findLastWeekPeriod(new Date("2022-10-23T17:00:00Z"), 'Asia/Ho_Chi_Minh'))