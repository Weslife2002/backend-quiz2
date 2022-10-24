import moment from 'moment-timezone';

let findStartEndOfMonth = (inputDate, tzString) => {
  let utcOffset = moment.tz(tzString).utcOffset();
  // Convert input time to the current date of the current TimeZone
  let date = new Date(inputDate.getTime() + utcOffset * 60 * 1000);
  let startDate, endDate;
  startDate = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), 1));
  endDate = new Date((new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + 1, 1))).getTime() - 1);
  // Convert it back to the current date of the current TimeZone
  startDate = new Date(startDate.getTime() - utcOffset * 60 * 1000);
  endDate = new Date(endDate.getTime() - utcOffset * 60 * 1000);
  return { startDate, endDate }
}

console.log(findStartEndOfMonth(new Date("2022-03-01"), 'America/New_York'))

let findMonthToDate = ((inputDate, tzString) => {
  let utcOffset = moment.tz(tzString).utcOffset();
  // Convert input time to the current date of the current TimeZone
  let date = new Date(inputDate.getTime() + utcOffset * 60 * 1000);
  let startDate, endDate;
  startDate = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), 1));
  endDate = new Date((new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + 1))).getTime() - 1);
  // Convert it back to the current date of the current TimeZone
  startDate = new Date(startDate.getTime() - utcOffset * 60 * 1000);
  endDate = new Date(endDate.getTime() - utcOffset * 60 * 1000);
  return { startDate, endDate }
})

console.log(findMonthToDate(new Date("2022-12-24T20:00:00"), 'Asia/Ho_Chi_Minh'))

let findLastWeekPeriod = ((inputDate, tzString) => {
  let utcOffset = moment.tz(tzString).utcOffset();
  // Convert input time back to the current date of the current TimeZone
  let date = new Date(inputDate.getTime() + utcOffset * 60 * 1000);
  let day = (date.getUTCDay() ? date.getUTCDay() : 7);
  let startOfWeek = new Date((new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()))).getTime() - (6 + day) * 24 * 60 * 60 * 1000);
  let endOfWeek = new Date((new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()))).getTime() - (day - 1) * 24 * 60 * 60 * 1000 - 1);
  // Convert it back to the current date of the current TimeZone
  startOfWeek = new Date(startOfWeek.getTime() - utcOffset * 60 * 1000);
  endOfWeek = new Date(endOfWeek.getTime() - utcOffset * 60 * 1000);
  return { startOfWeek, endOfWeek }
})

console.log(findLastWeekPeriod(new Date("2022-10-23T19:00:00Z"), 'Asia/Ho_Chi_Minh'))
