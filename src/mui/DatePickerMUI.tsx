import React from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
export default function DatePickerMUI() {
    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker
                        label="Controlled picker"
                        value={null}
                        onChange={(newValue) => (newValue)}
                    />
                </DemoContainer>
            </LocalizationProvider>
        </div>
    )
}
/**
 * SOLID
 * S-Single repository: mỗi method, phương thức nên thực hiện một nhiệm vụ trong nó thay vì nhiều nhiệm vụ
 * O-Open/Closed - cho phép việc mở rộng phương thức, class và đóng với việc chỉnh sửa 
 * L - Liskov Substitution: lớp con có thể thay thế được các lớp cha, thực hiện được các chức năng của lớp cha
 * I: Interface Segeration: Phân tách giao diện: nên tách riêng thành các interface nhỏ thay vì đặt chúng trong giao diện
 * D: Dependency inversion: Các module cấp cao không nên phụ thuộc vào module cấp thấp mà thay vào đó chúng nên phụ thuộc vào lớp abstract
 


  OOP
  Tính đóng gói: không bộc lộ các thuộc tính và các phương thức ra ngoài mà chỉ cho bên ngoài truy cập qua các method được cung cấp sẵn như Setter và getter
  Tính kế thừa: lớp con có thể các phương thức và thuộc tính từ lớp cha
  tính đa hình: các đối tượng trong lớp có thể có các đặc điểm hình thái khác nhau
  tính trừu tượng: chỉ bộc lộ các đặc điểm thuộc tính cần thiết và ẩn đi các chi tiết k cần thiết và phức tạp
  
*/
