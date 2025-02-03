import React from 'react'
import ButtonMUI from './mui/ButtonMUI'
import InputMui from './mui/InputMui'
import SelectMUI from './mui/SelectMUI'
import CheckboxMUI from './mui/CheckboxMUI'
import DatePickerMUI from './mui/DatePickerMUI'

export default function Testcomponent() {
  return (
    <div className='bg-neutral-50 flex gap-6 flex-col mt-6'>
          <ButtonMUI />
          <InputMui />
          <SelectMUI />
          <CheckboxMUI />
          <DatePickerMUI />
    </div>
  )
}
