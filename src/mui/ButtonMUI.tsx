import { Button } from '@mui/material'

export default function ButtonMUI() {
  return (
    <div>
      <div className='flex gap-4'>
        <Button variant="contained" color='secondary'>Hello world</Button>
        <Button variant="outlined">Outlined</Button>
        <Button >Outlined</Button>

        <Button variant="contained" disableElevation>
          Nút không có bóng
        </Button>
      </div>

    </div>
  )
}
