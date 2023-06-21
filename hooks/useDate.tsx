interface GetNextDatesInterval { (number: number, hour?: number): FormattedDate[] }
export interface FormattedDate {
  timestamp: number;
  day: string;
  month: string;
}


export default function useDate() {
  const dateNow = new Date();
  const hourNow = dateNow.getHours()
  const dayNow = dateNow.getDate()
  const monthNow = dateNow.getMonth()
  const yearNow = dateNow.getFullYear()
  const arrMonthName = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

  const getNextDatesInterval: GetNextDatesInterval = (number, hour) => {
    let arr: Array<FormattedDate> = []
    for (let i = 0; i < number; i++) {
      let date = new Date(yearNow, monthNow, dayNow + i)
      arr.push({
        timestamp: date.getTime(),
        day: date.getDate().toString(),
        month: arrMonthName[date.getMonth()]
      })
    }
    if (hour) if (hourNow >= hour) arr = arr.slice(1)
    return arr
  }

  return { getNextDatesInterval }
}
