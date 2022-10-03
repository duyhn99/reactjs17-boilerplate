import Swal from 'sweetalert2';

/**
 * Hàm show thông báo xác nhận thao tác
 * @param {String} title Tiêu đề
 * @param {String} text Nội dung thông báo
 * @param {Function} onConfirm Hàm xử lý khi người dùng nhấn "Đồng ý"
 * @param {Function} onCancel Hàm xử lý khi người dùng nhân "Huỷ"
 */
export function showMsgConfirm(
  title,
  text,
  onConfirm = () => {},
  onCancel = () => {},
) {
  Swal.fire({
    title,
    text,
    icon: 'question',
    showCancelButton: true,
    cancelButtonText: 'Hủy',
    confirmButtonText: 'Đồng ý',
    allowOutsideClick: false,
    confirmButtonColor: '#2699fb',
    iconColor: '#2699fb',
  }).then((result) => {
    // Huỷ
    if (result.dismiss === 'cancel') {
      if (typeof onCancel === 'function') onCancel();
      return;
    }

    // Đồng ý
    if (typeof onConfirm === 'function') onConfirm();
  });
}

/**
 * Hàm show thông báo xác nhận thành công
 * @param {String} title Tiêu đề
 * @param {String} text Nội dung thông báo
 */
export function showMsgSuccess(title, text) {
  Swal.fire({
    title,
    text,
    icon: 'success',
    confirmButtonColor: '#2699fb',
    iconColor: '#2699fb',
  });
}

/**
 * Hàm show cảnh báo
 * @param {String} title Tiêu đề
 * @param {String} text Nội dung thông báo
 */
export function showMsgWarning(title, text) {
  Swal.fire({
    title,
    text,
    icon: 'warning',
    confirmButtonColor: '#2699fb',
    iconColor: '#2699fb',
  });
}

/**
 * Hàm show thông báo lỗi
 * @param {String} title Tiêu đề
 * @param {String} text Nội dung thông báo
 */
export function showMsgError(title, text) {
  Swal.fire({
    title,
    text,
    icon: 'error',
    confirmButtonColor: '#2699fb',
    iconColor: '#2699fb',
  });
}

/**
 * Hàm show thông tin bất kỳ
 * @param {String} title Tiêu đề
 * @param {String} text Nội dung thông báo
 */
export function showMsgInfo(title, text) {
  Swal.fire({
    title,
    text,
    icon: 'info',
    confirmButtonColor: '#2699fb',
    iconColor: '#2699fb',
  });
}

/**
 * Hàm show Dialog
 * @param {String} title Tiêu đề
 * @param {String} html Nội dung thông báo
 * @param {String} btn nut thao tác
 * @param {Function} onConfirm nut thao tác
 */
export function showXuLyThanhCong(title, html, btn, onConfirm = () => {}) {
  Swal.fire({
    title,
    html,
    color: '#3085d6',
    showCloseButton: false,
    showCancelButton: false,
    focusConfirm: false,
    confirmButtonText: btn,
    confirmButtonClass: 'btn btn-primary btn-300',
    confirmButtonColor: '#3085d6',
  }).then((result) => {
    if (typeof onConfirm === 'function') onConfirm();
  });
}

/**
 * Hàm show IMG
 * @param {String} imageUrl Tiêu đề
 * @param {String} imageAlt Tiêu đề
 */
export function showIMG(imageUrl, imageAlt) {
  Swal.fire({
    imageUrl,
    imageHeight: 500,
    imageAlt,
    showCloseButton: true,
    showCancelButton: false,
    showConfirmButton: false,
  });
}
