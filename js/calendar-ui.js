/**
 * Calendar UI - Giao diện lịch tháng
 */

const CalendarUI = (function () {
    let currentYear, currentMonth, birthYear, gender;
    let monthData = [];

    function init(bYear, gen) {
        birthYear = bYear;
        gender = gen;
        const now = new Date();
        currentYear = now.getFullYear();
        currentMonth = now.getMonth() + 1;
        render();
    }

    function render() {
        monthData = NgayTotXau.getMonthAnalysis(birthYear, gender, currentYear, currentMonth);
        renderCalendar();
        renderLegend();
    }

    function renderCalendar() {
        const container = document.getElementById('calendar-container');
        const firstDay = new Date(currentYear, currentMonth - 1, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
        const weekdays = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];

        let html = `
            <div class="calendar-header">
                <button class="nav-btn" onclick="CalendarUI.prevMonth()">❮</button>
                <h2 class="month-title">Tháng ${currentMonth}/${currentYear}</h2>
                <button class="nav-btn" onclick="CalendarUI.nextMonth()">❯</button>
            </div>
            <div class="calendar-grid">
                ${weekdays.map(d => `<div class="weekday">${d}</div>`).join('')}
        `;

        // Empty cells
        for (let i = 0; i < firstDay; i++) {
            html += '<div class="day-cell empty"></div>';
        }

        // Day cells
        for (let day = 1; day <= daysInMonth; day++) {
            const dayData = monthData.find(d => d.solar.day === day);
            const lunar = dayData?.lunar;
            const quality = dayData?.quality || 'neutral';
            const isToday = isCurrentDate(day);

            html += `
                <div class="day-cell quality-${quality} ${isToday ? 'today' : ''}" 
                     onclick="CalendarUI.showDetail(${day})">
                    <span class="solar-day">${day}</span>
                    <span class="lunar-day">${lunar?.day || ''}/${lunar?.month || ''}</span>
                </div>
            `;
        }

        html += '</div>';
        container.innerHTML = html;
    }

    function renderLegend() {
        const legend = document.getElementById('legend');
        legend.innerHTML = `
            <div class="legend-item"><span class="dot quality-excellent"></span>Đại Cát</div>
            <div class="legend-item"><span class="dot quality-good"></span>Tốt</div>
            <div class="legend-item"><span class="dot quality-neutral"></span>Bình thường</div>
            <div class="legend-item"><span class="dot quality-bad"></span>Xấu</div>
            <div class="legend-item"><span class="dot quality-terrible"></span>Đại Hung</div>
        `;
    }

    function showDetail(day) {
        const dayData = monthData.find(d => d.solar.day === day);
        if (!dayData) return;

        const modal = document.getElementById('detail-modal');
        const content = document.getElementById('detail-content');

        content.innerHTML = `
            <div class="detail-header quality-${dayData.quality}">
                <h3>${dayData.solar.day}/${dayData.solar.month}/${dayData.solar.year}</h3>
                <p class="lunar-info">Âm lịch: ${dayData.lunar.formatted}</p>
                <span class="quality-badge">${dayData.label}</span>
            </div>
            <div class="detail-body">
                <div class="info-row">
                    <span class="label">Can Chi ngày:</span>
                    <span class="value">${dayData.canChiDay.full}</span>
                </div>
                <div class="info-row">
                    <span class="label">Trực:</span>
                    <span class="value">${dayData.truc?.name || 'N/A'} - ${dayData.truc?.description || ''}</span>
                </div>
                <div class="info-row">
                    <span class="label">Sao:</span>
                    <span class="value">${dayData.tu?.name || 'N/A'} (${dayData.tu?.element || ''}) - ${dayData.tu?.description || ''}</span>
                </div>
                <div class="info-row">
                    <span class="label">Giờ Hoàng Đạo:</span>
                    <span class="value">${dayData.hoangDao?.join(', ') || 'N/A'}</span>
                </div>
                ${dayData.tamNuong ? '<div class="warning">⚠️ Ngày Tam Nương - Không nên làm việc lớn</div>' : ''}
                ${dayData.nguyetKy ? '<div class="warning">⚠️ Ngày Nguyệt Kỵ - Tránh xuất hành</div>' : ''}
                <div class="factors">
                    <h4>Phân tích chi tiết:</h4>
                    ${dayData.factors.map(f => `<p class="factor-${f.type}">${f.text}</p>`).join('')}
                </div>
            </div>
        `;

        modal.classList.add('show');
    }

    function closeModal() {
        document.getElementById('detail-modal').classList.remove('show');
    }

    function prevMonth() {
        currentMonth--;
        if (currentMonth < 1) { currentMonth = 12; currentYear--; }
        render();
    }

    function nextMonth() {
        currentMonth++;
        if (currentMonth > 12) { currentMonth = 1; currentYear++; }
        render();
    }

    function isCurrentDate(day) {
        const now = new Date();
        return day === now.getDate() && currentMonth === now.getMonth() + 1 && currentYear === now.getFullYear();
    }

    return { init, render, showDetail, closeModal, prevMonth, nextMonth };
})();
