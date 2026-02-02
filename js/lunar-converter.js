/**
 * Lunar Converter - Chuyển đổi Dương lịch ⇔ Âm lịch
 * Thuật toán dựa trên Vietnamese Lunar Calendar
 */

const LunarConverter = (function () {
    // Bảng số ngày của từng tháng âm lịch từ 1900-2100
    // Mỗi số là một số 16-bit chứa thông tin về tháng nhuận và số ngày
    const LUNAR_INFO = [
        0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2,
        0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977,
        0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970,
        0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950,
        0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557,
        0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0,
        0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0,
        0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6,
        0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570,
        0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x05ac0, 0x0ab60, 0x096d5, 0x092e0,
        0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5,
        0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930,
        0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530,
        0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45,
        0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0,
        0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0,
        0x0a2e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4,
        0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0,
        0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160,
        0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a2d0, 0x0d150, 0x0f252,
        0x0d520
    ];

    const BASE_YEAR = 1900;
    const BASE_MONTH = 1;
    const BASE_DAY = 31; // 31/01/1900 là ngày 1/1 âm lịch năm Canh Tý

    // Lấy số ngày của tháng nhuận trong năm (0 nếu không có tháng nhuận)
    function leapDays(year) {
        if (leapMonth(year)) {
            return (LUNAR_INFO[year - BASE_YEAR] & 0x10000) ? 30 : 29;
        }
        return 0;
    }

    // Lấy tháng nhuận của năm (0 nếu không có)
    function leapMonth(year) {
        return LUNAR_INFO[year - BASE_YEAR] & 0xf;
    }

    // Lấy tổng số ngày trong năm âm lịch
    function yearDays(year) {
        let sum = 348;
        for (let i = 0x8000; i > 0x8; i >>= 1) {
            sum += (LUNAR_INFO[year - BASE_YEAR] & i) ? 1 : 0;
        }
        return sum + leapDays(year);
    }

    // Lấy số ngày của tháng trong năm âm lịch
    function monthDays(year, month) {
        if (month > 12 || month < 1) return -1;
        return (LUNAR_INFO[year - BASE_YEAR] & (0x10000 >> month)) ? 30 : 29;
    }

    // Chuyển đổi Dương lịch sang Âm lịch
    function solarToLunar(year, month, day) {
        if (year < 1900 || year > 2100) {
            return null;
        }

        let offset = daysBetween(BASE_YEAR, BASE_MONTH, BASE_DAY, year, month, day);

        let lunarYear = BASE_YEAR;
        let lunarMonth = 1;
        let lunarDay = 1;
        let isLeapMonth = false;

        // Tìm năm âm lịch
        let daysInYear = yearDays(lunarYear);
        while (offset >= daysInYear) {
            offset -= daysInYear;
            lunarYear++;
            if (lunarYear > 2100) break;
            daysInYear = yearDays(lunarYear);
        }

        // Tìm tháng âm lịch
        let leap = leapMonth(lunarYear);
        let isAfterLeap = false;

        for (let i = 1; i <= 12; i++) {
            let daysInMonth;

            if (leap > 0 && i === leap + 1 && !isAfterLeap) {
                // Tháng nhuận
                daysInMonth = leapDays(lunarYear);
                isAfterLeap = true;
                i--;
            } else {
                daysInMonth = monthDays(lunarYear, i);
            }

            if (offset < daysInMonth) {
                lunarMonth = i;
                isLeapMonth = (leap > 0 && i === leap && isAfterLeap);
                break;
            }
            offset -= daysInMonth;
        }

        lunarDay = offset + 1;

        return {
            year: lunarYear,
            month: lunarMonth,
            day: lunarDay,
            isLeapMonth: isLeapMonth
        };
    }

    // Tính số ngày giữa 2 ngày dương lịch
    function daysBetween(y1, m1, d1, y2, m2, d2) {
        const date1 = new Date(y1, m1 - 1, d1);
        const date2 = new Date(y2, m2 - 1, d2);
        return Math.round((date2 - date1) / (1000 * 60 * 60 * 24));
    }

    // Lấy Can Chi của năm
    function getCanChiYear(year) {
        const canIndex = (year - 4) % 10;
        const chiIndex = (year - 4) % 12;
        return {
            can: THIEN_CAN[canIndex],
            chi: DIA_CHI[chiIndex],
            full: THIEN_CAN[canIndex] + ' ' + DIA_CHI[chiIndex],
            conGiap: CON_GIAP[chiIndex]
        };
    }

    // Lấy Can Chi của tháng
    function getCanChiMonth(year, month) {
        // Công thức: Can tháng = (năm * 2 + tháng) % 10
        const canIndex = (year * 2 + month) % 10;
        // Chi tháng cố định theo tháng
        const chiIndex = (month + 1) % 12;
        return {
            can: THIEN_CAN[canIndex],
            chi: DIA_CHI[chiIndex],
            full: THIEN_CAN[canIndex] + ' ' + DIA_CHI[chiIndex]
        };
    }

    // Lấy Can Chi của ngày
    function getCanChiDay(year, month, day) {
        // Sử dụng công thức Julius Day
        const a = Math.floor((14 - month) / 12);
        const y = year + 4800 - a;
        const m = month + 12 * a - 3;
        const jdn = day + Math.floor((153 * m + 2) / 5) + 365 * y +
            Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;

        const canIndex = (jdn + 9) % 10;
        const chiIndex = (jdn + 1) % 12;

        return {
            can: THIEN_CAN[canIndex],
            chi: DIA_CHI[chiIndex],
            full: THIEN_CAN[canIndex] + ' ' + DIA_CHI[chiIndex],
            jdn: jdn
        };
    }

    // Chuyển đổi Âm lịch sang Dương lịch
    function lunarToSolar(lunarYear, lunarMonth, lunarDay, isLeapMonth = false) {
        if (lunarYear < 1900 || lunarYear > 2100) {
            return null;
        }

        let offset = 0;

        // Tính số ngày từ 1900
        for (let y = BASE_YEAR; y < lunarYear; y++) {
            offset += yearDays(y);
        }

        // Tính số ngày trong năm hiện tại
        let leap = leapMonth(lunarYear);
        let isAfterLeap = false;

        for (let m = 1; m < lunarMonth; m++) {
            if (leap > 0 && m === leap && !isAfterLeap) {
                offset += leapDays(lunarYear);
                isAfterLeap = true;
                m--;
                continue;
            }
            offset += monthDays(lunarYear, m);
        }

        // Nếu là tháng nhuận
        if (isLeapMonth && leap === lunarMonth) {
            offset += monthDays(lunarYear, lunarMonth);
        }

        offset += lunarDay - 1;

        // Tính ngày dương lịch
        const baseDate = new Date(BASE_YEAR, BASE_MONTH - 1, BASE_DAY);
        const resultDate = new Date(baseDate.getTime() + offset * 24 * 60 * 60 * 1000);

        return {
            year: resultDate.getFullYear(),
            month: resultDate.getMonth() + 1,
            day: resultDate.getDate()
        };
    }

    // Format ngày âm lịch
    function formatLunarDate(lunar) {
        const canChi = getCanChiYear(lunar.year);
        return {
            ...lunar,
            formatted: `${lunar.day}/${lunar.month}${lunar.isLeapMonth ? ' (nhuận)' : ''} năm ${canChi.full}`,
            shortFormat: `${lunar.day}/${lunar.month}`,
            canChiYear: canChi
        };
    }

    return {
        solarToLunar,
        lunarToSolar,
        getCanChiYear,
        getCanChiMonth,
        getCanChiDay,
        formatLunarDate,
        monthDays,
        leapMonth
    };
})();
