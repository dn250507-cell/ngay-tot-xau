/**
 * Ngày Tốt Xấu - Logic tính toán ngày tốt/xấu theo dân gian
 */

const NgayTotXau = (function () {

    function isTamNuong(lunarDay) {
        return TAM_NUONG_DAYS.includes(lunarDay);
    }

    function isNguyetKy(lunarDay) {
        return NGUYET_KY_DAYS.includes(lunarDay);
    }

    function getTruc(solarYear, solarMonth, solarDay) {
        const canChiDay = LunarConverter.getCanChiDay(solarYear, solarMonth, solarDay);
        const lunar = LunarConverter.solarToLunar(solarYear, solarMonth, solarDay);
        if (!lunar) return null;

        const chiDayIndex = DIA_CHI.indexOf(canChiDay.chi);
        const chiMonthIndex = (lunar.month + 1) % 12;
        let trucIndex = (chiDayIndex - chiMonthIndex + 14) % 12;

        return { ...TRUC[trucIndex], index: trucIndex };
    }

    function getNhiThapBatTu(solarYear, solarMonth, solarDay) {
        const canChiDay = LunarConverter.getCanChiDay(solarYear, solarMonth, solarDay);
        const baseJdn = 2415021;
        const baseTuIndex = 10;
        const tuIndex = (canChiDay.jdn - baseJdn + baseTuIndex) % 28;
        const adjustedIndex = tuIndex < 0 ? tuIndex + 28 : tuIndex;

        return { ...NHI_THAP_BAT_TU[adjustedIndex], index: adjustedIndex };
    }

    function getHoangDaoHours(solarYear, solarMonth, solarDay) {
        const canChiDay = LunarConverter.getCanChiDay(solarYear, solarMonth, solarDay);
        return HOANG_DAO_GIO[canChiDay.chi] || [];
    }

    function calculateDayQuality(birthYear, gender, targetDate) {
        const year = targetDate.getFullYear();
        const month = targetDate.getMonth() + 1;
        const day = targetDate.getDate();
        const lunar = LunarConverter.solarToLunar(year, month, day);
        if (!lunar) return null;

        const canChiDay = LunarConverter.getCanChiDay(year, month, day);
        const canChiYear = LunarConverter.getCanChiYear(lunar.year);
        const truc = getTruc(year, month, day);
        const tu = getNhiThapBatTu(year, month, day);
        const hoangDao = getHoangDaoHours(year, month, day);
        const tamNuong = isTamNuong(lunar.day);
        const nguyetKy = isNguyetKy(lunar.day);
        const cungPhi = CuuCung.getCungPhi(birthYear, gender);
        const cungInfo = CuuCung.getCungInfo(cungPhi);

        let score = 50;
        const factors = [];

        if (truc) {
            if (truc.quality === 'excellent') { score += 20; factors.push({ text: `Trực ${truc.name}: Đại cát`, type: 'positive' }); }
            else if (truc.quality === 'good') { score += 10; factors.push({ text: `Trực ${truc.name}: Tốt`, type: 'positive' }); }
            else if (truc.quality === 'bad') { score -= 15; factors.push({ text: `Trực ${truc.name}: Xấu`, type: 'negative' }); }
            else { factors.push({ text: `Trực ${truc.name}: Bình`, type: 'neutral' }); }
        }

        if (tu) {
            if (tu.quality === 'excellent') { score += 15; factors.push({ text: `Sao ${tu.name}: Đại cát`, type: 'positive' }); }
            else if (tu.quality === 'good') { score += 8; factors.push({ text: `Sao ${tu.name}: Tốt`, type: 'positive' }); }
            else if (tu.quality === 'bad') { score -= 12; factors.push({ text: `Sao ${tu.name}: Hung`, type: 'negative' }); }
        }

        if (tamNuong) { score -= 25; factors.push({ text: 'Ngày Tam Nương: Đại kỵ', type: 'negative' }); }
        if (nguyetKy) { score -= 20; factors.push({ text: 'Ngày Nguyệt Kỵ (Sát Chủ)', type: 'negative' }); }

        let quality, label;
        if (score >= 80) { quality = 'excellent'; label = 'Đại Cát'; }
        else if (score >= 60) { quality = 'good'; label = 'Tốt'; }
        else if (score >= 40) { quality = 'neutral'; label = 'Bình thường'; }
        else if (score >= 20) { quality = 'bad'; label = 'Xấu'; }
        else { quality = 'terrible'; label = 'Đại Hung'; }

        return {
            date: targetDate, solar: { year, month, day },
            lunar: LunarConverter.formatLunarDate(lunar),
            canChiDay, canChiYear, truc, tu, hoangDao,
            cungPhi, cungInfo, tamNuong, nguyetKy,
            score, quality, label, factors,
            color: QUALITY_COLORS[quality]
        };
    }

    function getMonthAnalysis(birthYear, gender, year, month) {
        const days = [];
        const daysInMonth = new Date(year, month, 0).getDate();
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month - 1, day);
            const result = calculateDayQuality(birthYear, gender, date);
            if (result) days.push(result);
        }
        return days;
    }

    return {
        isTamNuong, isNguyetKy, getTruc, getNhiThapBatTu,
        getHoangDaoHours, calculateDayQuality, getMonthAnalysis
    };
})();
