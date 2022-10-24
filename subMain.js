import moment from 'moment-timezone';

let findStartEndOfMonth = (date, tzString) => {
  startDate = moment(date).tz(tzString).startOf('month').toDate();
  endDate = moment(date).tz(tzString).endOf('month').toDate();
  return { startDate, endDate }
}

console.log(findStartEndOfMonth(new Date("2022-03-01"), 'America/New_York'))

let findMonthToDate = ((date, tzString) => {
  startDate = moment(date).tz(tzString).startOf('month').toDate();
  endDate = moment(date).tz(tzString).endOf('day').toDate();
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
