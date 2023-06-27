import { servicesData } from '@/config/servicesData'
import { UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { useEffect, useMemo } from 'react'
import styles from './inputs-group.module.scss'
import { IFormInput } from '@/pages/enlist/calendar/enlist-form'
import { ICalendarQuery } from '@/pages/enlist/calendar'

interface InputsGroupProps {
  register: UseFormRegister<IFormInput>;
  setValue: UseFormSetValue<IFormInput>;
  closeInputs: (arg: number) => void;
  index: number;
  watchServiceField: string | string[] | undefined;
  query: ICalendarQuery;
}

export default function InputsGroup({ register, setValue, closeInputs, index, watchServiceField, query }: InputsGroupProps) {

  const category = useMemo(() => {
    return servicesData.find((service) => service.name === watchServiceField)?.categories
  }, [watchServiceField])

  useEffect(() => {
    if (category) {
      setValue(`services.${index}.category`, query.category && index === 0 ? query.category : category[0].name)
    } else {
      setValue(`services.${index}.category`, '')
    }
  }, [category, index, query.category, setValue])

  return (
    <div className={styles.content}>
      <label className={styles.field}>Услуга</label>
      <select className={styles.select} {...register(`services.${index}.service` as const)}>
        {servicesData.map((service) =>
          <option key={service.name} value={service.name}>- {service.heading}</option>
        )}
      </select>
      {category &&
        <>
          <label className={styles.field}>Категория</label>
          <select className={styles.select} {...register(`services.${index}.category` as const)}>
            {category.map((category) =>
              <option key={category.name} value={category.name}>- {category.heading}</option>
            )}
          </select>
        </>
      }
      {index !== 0 && <button type="button" className={styles.button}
        onClick={() => closeInputs(index)}>
        X
      </button>}
    </div>
  )
}
