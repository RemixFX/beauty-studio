interface GetNextDatesInterval { (number: number, hour?: number): FormattedDate[] }
interface GetAvailableTime {
  (
    closedTime: string[],
    startWork: string | number,
    endWork: string | number,
    durationOfService?: number
  ): string[]
}
export interface FormattedDate {
  timestamp: number;
  dateString: string;
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
        dateString: date.toDateString(),
        day: date.getDate().toString(),
        month: arrMonthName[date.getMonth()],
      })
    }
    if (hour) if (hourNow >= hour) arr = arr.slice(1)
    return arr
  }

  const getAvailableTime: GetAvailableTime = (closedTime, startWork, endWork, durationOfService) => {

    if (closedTime.length >= 4) {
      return [];
    }

    const arr: number[] = []
    const duration = durationOfService ? durationOfService : 2
    const parsedStartWork = typeof startWork === 'string' ? parseInt(startWork) : startWork
    const parsedEndWork = typeof endWork === 'string' ? parseInt(endWork) : endWork
    const parsedClosedTime = closedTime.map(t => parseInt(t))
    
    let currentHour = parsedStartWork;
    while (currentHour + duration <= parsedEndWork) {

      if (!parsedClosedTime.includes(currentHour)
        && !parsedClosedTime.includes(currentHour + 1)
        && !parsedClosedTime.includes(currentHour - 1)
      ) {
        arr.push(currentHour);
      }
      currentHour++;
    }
    
    return arr.map(t => t.toString().padStart(2, '0') + ":00")
  }

  return { getNextDatesInterval, getAvailableTime }
}
