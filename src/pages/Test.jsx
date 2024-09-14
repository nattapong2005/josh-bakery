import React from 'react';
import Swal from 'sweetalert2';

const SweetAlertWithProgress = () => {

  const showAlertWithProgress = () => {
    Swal.fire({
      title: 'ทำรายการสำเร็จ..',
      text: 'เข้าสู่ระบบสำเร็จ',
      timer: 1500,  // ตั้งเวลา 3 วินาที
      timerProgressBar: true,  // แสดง progress bar
      showConfirmButton: false,
      icon: 'success',

    });
  };

  return (
    <div>
      <button onClick={showAlertWithProgress}>
        แสดงผลลัพธ์
      </button>
    </div>
  );
};

export default SweetAlertWithProgress;
