interface GetNextDatesInterval { (number: number, hour?: number): Date[] }


export default function useDate() {
  const dateNow = new Date();
  const hourNow = dateNow.getHours()
  const dayNow = dateNow.getDate()
  const monthNow = dateNow.getMonth()
  const yearNow = dateNow.getFullYear()

  const getNextDatesInterval: GetNextDatesInterval = (number, hour) => {
    let arr: Array<Date> = []
    for (let i = 0; i < number; i++) {
      arr.push(new Date(yearNow, monthNow, dayNow + i))
    }
    if (hour) if (hourNow >= hour) arr = arr.slice(1)
    return arr
  }

  return { getNextDatesInterval }
}
