import { Checkbox, FormControlLabel } from '@mui/material'

export default function CheckboxMUI() {
    return (
        <div>
            <FormControlLabel
                control={
                    <Checkbox 
                    // {...register('acceptTerms')} // Kết hợp với register
                    /> 
                }
                label="Accept Terms"
            />
        </div>
    )
}
