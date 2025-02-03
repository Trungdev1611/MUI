import { Button, Card } from '@mui/material'

export default function ButtonMUI() {
  return (
    <div>
      <Card className='flex gap-4'>
        <Button variant="contained" color='secondary'>Hello world</Button>
        <Button variant="outlined">Outlined</Button>
        <Button disableRipple variant="outlined">Nút không có sóng</Button>

        <Button variant="contained" disableElevation>
          Nút không có bóng
        </Button>
      </Card>

    </div>
  )
}
