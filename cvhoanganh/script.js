// 1. Hiệu ứng chạy thanh kỹ năng mượt mà khi tải trang
window.addEventListener('DOMContentLoaded', () => {
    const skillBars = document.querySelectorAll('.skill-fill');
    setTimeout(() => {
        skillBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-width');
            bar.style.width = targetWidth;
        });
    }, 200);
});

// 2. Xử lý tải ảnh đại diện trực tiếp từ máy tính
const avatarInput = document.getElementById('avatarInput');
const avatarPreview = document.getElementById('avatarPreview');

avatarInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            avatarPreview.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// 3. Đổi màu nhấn (Accent Color) linh hoạt
function changeAccent(color) {
    document.documentElement.style.setProperty('--accent-color', color);
}