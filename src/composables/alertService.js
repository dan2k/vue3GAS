import Swal from 'sweetalert2'
export const useAlert = () => {
  // Alert แบบยืนยัน
  const showConfirm = (title, text, confirmCallback, cancelCallback) => {
    Swal.fire({
      title: title,
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'ใช่',
      cancelButtonText: 'ยกเลิก'
    }).then((result) => {
      if (result.isConfirmed) {
        confirmCallback()
      } else if (cancelCallback) {
        cancelCallback()
      }
    })
  }

  // การตั้งค่า Alert ทั่วไป
  const showAlert = (title, text, icon = 'info') => {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      confirmButtonText: 'ตกลง'
    })
  }
  return {
    showConfirm,
    showAlert
  }
}
