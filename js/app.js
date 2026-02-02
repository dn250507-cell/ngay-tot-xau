/**
 * App.js - Main Application
 */

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('birth-form');
    const resultSection = document.getElementById('result-section');
    const userInfoSection = document.getElementById('user-info');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const day = parseInt(document.getElementById('birth-day').value);
        const month = parseInt(document.getElementById('birth-month').value);
        const year = parseInt(document.getElementById('birth-year').value);
        const gender = document.getElementById('gender').value;

        // Validate
        if (!day || !month || !year || !gender) {
            showToast('Vui lòng nhập đầy đủ thông tin!', 'error');
            return;
        }

        if (year < 1900 || year > 2100) {
            showToast('Năm sinh phải từ 1900 đến 2100!', 'error');
            return;
        }

        // Phân tích mệnh
        const destiny = CuuCung.analyzeDestiny(year, gender);
        const canChi = LunarConverter.getCanChiYear(year);

        // Hiển thị thông tin người dùng
        userInfoSection.innerHTML = `
            <div class="user-card">
                <div class="user-avatar">${destiny.cungInfo.icon}</div>
                <div class="user-details">
                    <h3>${gender === 'male' ? '👨 Nam' : '👩 Nữ'} - Sinh năm ${year}</h3>
                    <p class="can-chi">Năm ${canChi.full} (${canChi.conGiap})</p>
                    <p class="cung-menh ${destiny.cungInfo.colorClass}">
                        Mệnh: ${destiny.cungInfo.name} (${destiny.cungInfo.element})
                    </p>
                    <p class="description">${destiny.cungInfo.description}</p>
                    <p class="advice">💡 ${destiny.advice}</p>
                </div>
            </div>
        `;

        // Khởi tạo lịch
        CalendarUI.init(year, gender);

        // Hiển thị phần kết quả
        resultSection.classList.add('show');
        resultSection.scrollIntoView({ behavior: 'smooth' });

        showToast('Đã tính toán xong! Xem lịch bên dưới.', 'success');
    });

    // Modal close
    document.getElementById('detail-modal').addEventListener('click', function (e) {
        if (e.target === this) {
            CalendarUI.closeModal();
        }
    });

    document.querySelector('.close-btn')?.addEventListener('click', function () {
        CalendarUI.closeModal();
    });
});

function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
