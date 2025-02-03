
import { Button, Divider, Paper, TextField } from '@mui/material'
import './App.css'
import Testcomponent from './Testcomponent'
import { useForm } from 'react-hook-form'

type FormInputs = {
  input1: string;
  input2: string;
};

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>()

  function submitFormInputs(values: FormInputs) {
    console.log("valuesFormInputs", values)
  }
  return (
    <div className='bg-slate-100'>
      <Paper className='my-8 py-4'>
        <div>
        <h2 className='text-2xl text-red-500'>Form1 -  với register reacthook form - Register được dùng với các input đơn giản, khi muốn dùng với các select hoặc datepicker hoặc các thành phần phức tạp khác của form, dùng Controller</h2>
        <form onSubmit={handleSubmit(submitFormInputs)}>
          <div>
            <div>Label input 1</div>
            <TextField
              id="standard-search"
              label="Search field"
              type="search"
              variant="standard"
              className='w-full'
              error={!!errors.input1}
              helperText={errors.input1 ? errors.input1.message : ''}
              {...register('input1', { required: "input1 is required" })}
            />
          </div>

          <div>
            <div>Label input 2</div>
            <TextField
              id="standard-search"
              label="Search field"
              type="search"
              variant="standard"
              className='w-full'
              error={!!errors.input2}
              helperText={errors.input2 ? errors.input2.message : ''}
              {...register('input2', { required: "input2 is required" })}
            />
          </div>

          <Button variant="contained" disableElevation type='submit'>
            Submit Form Inputs
          </Button>
        </form>
        </div>

      </Paper>
      <Divider />
      <Testcomponent />

    </div>
  )
}

export default App
