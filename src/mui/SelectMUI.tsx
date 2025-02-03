import { MenuItem, Select, SelectChangeEvent } from '@mui/material'

export default function SelectMUI() {
    function handleChange(event: SelectChangeEvent) {
    console.log(11111, event.target.value)
    }
    return (
        <div>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={'10'}
                label="Age"
                onChange={handleChange}
                className='w-full'
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </div>
    )
}
