import { Card, Input, TextField } from '@mui/material'

export default function InputMui() {
    return (
        <div className='flex flex-col gap-3 mt-6'>
            <Card className='p-3 rounded'>
                <div>TextField input (màu dựa trên primary color ở cấu hình)</div>
                <div className='flex flex-col gap-6 mt-2'>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" className='w-full' />
                    <div>
                        <div>TextField varriant field</div>
                        <TextField id="filled-basic" label="Filled" variant="filled" className='w-full' />
                    </div>
                    <div>
                        <div>TextField Search</div>
                        <TextField
                            id="standard-search"
                            label="Search field"
                            type="search"
                            variant="standard"
                            className='w-full'
                        />
                    </div>

                    <div>
                    <div>Input normal</div>
                    <Input placeholder="Enter text" className='w-full' />
                    </div>
             
                </div>



            </Card>



        </div>
    )
}
