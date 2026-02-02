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

        // Tạo object thông tin sinh
        const birthInfo = { year, month, day };

        // Phân tích đầy đủ theo NGÀY, THÁNG, NĂM
        const destiny = CuuCung.analyzeDestiny(year, gender);

        // NĂM SINH: Can Chi năm
        const canChiYear = LunarConverter.getCanChiYear(year);

        // NGÀY SINH: Can Chi ngày (dương lịch)
        const canChiDay = LunarConverter.getCanChiDay(year, month, day);

        // NGÀY SINH: Chuyển sang Âm lịch
        const lunarBirth = LunarConverter.solarToLunar(year, month, day);
        const lunarBirthFormatted = lunarBirth ?
            LunarConverter.formatLunarDate(lunarBirth) : null;

        // THÁNG SINH: Can Chi tháng
        const canChiMonth = LunarConverter.getCanChiMonth(year, month);

        // Lục Hợp với Chi ngày sinh
        const lucHopChi = {
            'Tý': 'Sửu', 'Sửu': 'Tý',
            'Dần': 'Hợi', 'Hợi': 'Dần',
            'Mão': 'Tuất', 'Tuất': 'Mão',
            'Thìn': 'Dậu', 'Dậu': 'Thìn',
            'Tỵ': 'Thân', 'Thân': 'Tỵ',
            'Ngọ': 'Mùi', 'Mùi': 'Ngọ'
        };

        // Hiển thị thông tin người dùng đầy đủ
        userInfoSection.innerHTML = `
            <div class="user-card">
                <div class="user-avatar">${destiny.cungInfo.icon}</div>
                <div class="user-details">
                    <h3>${gender === 'male' ? '👨 Nam' : '👩 Nữ'} - Sinh ngày ${day}/${month}/${year}</h3>
                    
                    <div class="birth-info-grid">
                        <div class="birth-info-item">
                            <span class="info-label">📅 Ngày sinh (Âm lịch):</span>
                            <span class="info-value">${lunarBirthFormatted ? lunarBirthFormatted.formatted : 'N/A'}</span>
                        </div>
                        <div class="birth-info-item">
                            <span class="info-label">🌙 Can Chi NGÀY sinh:</span>
                            <span class="info-value highlight">${canChiDay.full}</span>
                        </div>
                        <div class="birth-info-item">
                            <span class="info-label">📆 Can Chi THÁNG sinh:</span>
                            <span class="info-value">${canChiMonth.full}</span>
                        </div>
                        <div class="birth-info-item">
                            <span class="info-label">🎋 Can Chi NĂM sinh:</span>
                            <span class="info-value">${canChiYear.full} (${canChiYear.conGiap})</span>
                        </div>
                    </div>
                    
                    <p class="cung-menh ${destiny.cungInfo.colorClass}">
                        🔮 Cung mệnh: ${destiny.cungInfo.name} (${destiny.cungInfo.element})
                    </p>
                    <p class="description">${destiny.cungInfo.description}</p>
                    <p class="advice">💡 ${destiny.advice}</p>
                    
                    <div class="compat-box">
                        <p class="compat-title">🎯 Ngày đặc biệt TỐT cho bạn:</p>
                        <p class="compat-detail">Chi ngày sinh của bạn là <strong>${canChiDay.chi}</strong> → Ngày có Chi <strong>${lucHopChi[canChiDay.chi]}</strong> sẽ <strong>Lục Hợp</strong> với bạn (đánh dấu 💑)</p>
                    </div>
                </div>
            </div>
        `;

        // Khởi tạo lịch với đầy đủ thông tin ngày sinh
        CalendarUI.init(birthInfo, gender);

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
