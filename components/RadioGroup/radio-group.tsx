import { UseFormRegister } from 'react-hook-form'
import styles from './radio-group.module.scss'
import { IFormInput } from '@/pages/enlist/calendar/enlist-form'

interface RadioGroupProps {
  register: UseFormRegister<IFormInput>
  value: string
}

export default function RadioGroup({ register, value }: RadioGroupProps) {
  return (
    <>
      <input id={value} type='radio' className={styles.input} {...register('time')} value={value}></input>
      <label htmlFor={value} className={styles.field}>{value}</label>
    </>
  )
}