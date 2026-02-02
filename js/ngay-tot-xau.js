/**
 * Ngày Tốt Xấu - Logic tính toán ngày tốt/xấu theo dân gian
 * CẬP NHẬT: Tính theo đầy đủ ngày, tháng, năm sinh
 */

const NgayTotXau = (function () {

    // Bảng Lục Hợp (6 cặp địa chi tương hợp)
    const LUC_HOP = {
        'Tý': 'Sửu', 'Sửu': 'Tý',
        'Dần': 'Hợi', 'Hợi': 'Dần',
        'Mão': 'Tuất', 'Tuất': 'Mão',
        'Thìn': 'Dậu', 'Dậu': 'Thìn',
        'Tỵ': 'Thân', 'Thân': 'Tỵ',
        'Ngọ': 'Mùi', 'Mùi': 'Ngọ'
    };

    // Bảng Lục Xung (6 cặp địa chi tương xung)
    const LUC_XUNG = {
        'Tý': 'Ngọ', 'Ngọ': 'Tý',
        'Sửu': 'Mùi', 'Mùi': 'Sửu',
        'Dần': 'Thân', 'Thân': 'Dần',
        'Mão': 'Dậu', 'Dậu': 'Mão',
        'Thìn': 'Tuất', 'Tuất': 'Thìn',
        'Tỵ': 'Hợi', 'Hợi': 'Tỵ'
    };

    // Tam Hợp (3 nhóm địa chi tương hợp)
    const TAM_HOP = {
        'Thân': ['Tý', 'Thìn'], 'Tý': ['Thân', 'Thìn'], 'Thìn': ['Thân', 'Tý'],
        'Hợi': ['Mão', 'Mùi'], 'Mão': ['Hợi', 'Mùi'], 'Mùi': ['Hợi', 'Mão'],
        'Dần': ['Ngọ', 'Tuất'], 'Ngọ': ['Dần', 'Tuất'], 'Tuất': ['Dần', 'Ngọ'],
        'Tỵ': ['Dậu', 'Sửu'], 'Dậu': ['Tỵ', 'Sửu'], 'Sửu': ['Tỵ', 'Dậu']
    };

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

    // Kiểm tra Lục Hợp (rất tốt)
    function isLucHop(birthChi, dayChi) {
        return LUC_HOP[birthChi] === dayChi;
    }

    // Kiểm tra Lục Xung (rất xấu)
    function isLucXung(birthChi, dayChi) {
        return LUC_XUNG[birthChi] === dayChi;
    }

    // Kiểm tra Tam Hợp (tốt)
    function isTamHop(birthChi, dayChi) {
        return TAM_HOP[birthChi] && TAM_HOP[birthChi].includes(dayChi);
    }

    // Tính tương hợp giữa ngày sinh và ngày xem
    function calculateCompatibility(birthDate, targetDate) {
        const birthCanChi = LunarConverter.getCanChiDay(
            birthDate.year, birthDate.month, birthDate.day
        );
        const targetCanChi = LunarConverter.getCanChiDay(
            targetDate.getFullYear(), targetDate.getMonth() + 1, targetDate.getDate()
        );

        const birthChi = birthCanChi.chi;
        const dayChi = targetCanChi.chi;

        const result = {
            birthChi,
            dayChi,
            lucHop: isLucHop(birthChi, dayChi),
            lucXung: isLucXung(birthChi, dayChi),
            tamHop: isTamHop(birthChi, dayChi),
            score: 0,
            description: ''
        };

        if (result.lucHop) {
            result.score = 25;
            result.description = `Lục Hợp (${birthChi} - ${dayChi}): Đại cát`;
        } else if (result.tamHop) {
            result.score = 15;
            result.description = `Tam Hợp (${birthChi} - ${dayChi}): Tốt`;
        } else if (result.lucXung) {
            result.score = -25;
            result.description = `Lục Xung (${birthChi} - ${dayChi}): Đại kỵ`;
        }

        return result;
    }

    // Tính sao chiếu mệnh theo tháng sinh
    function getBirthMonthStar(birthMonth) {
        // Sao chiếu theo tháng sinh (1-12)
        const monthStars = [
            { star: 'Thái Dương', quality: 'excellent', desc: 'Sáng suốt, thành công' },
            { star: 'Thái Âm', quality: 'good', desc: 'Bình an, thuận lợi' },
            { star: 'La Hầu', quality: 'bad', desc: 'Nhiều chướng ngại' },
            { star: 'Kế Đô', quality: 'bad', desc: 'Cần cẩn thận' },
            { star: 'Mộc Đức', quality: 'good', desc: 'Phát triển, sinh sôi' },
            { star: 'Vân Hán', quality: 'neutral', desc: 'Bình thường' },
            { star: 'Thái Bạch', quality: 'good', desc: 'Tài lộc, may mắn' },
            { star: 'Thủy Diệu', quality: 'good', desc: 'Thông minh, lanh lợi' },
            { star: 'Thổ Tú', quality: 'neutral', desc: 'Ổn định' },
            { star: 'Kim Tinh', quality: 'good', desc: 'Giàu có, sung túc' },
            { star: 'Hỏa Tinh', quality: 'bad', desc: 'Nóng nảy, xung đột' },
            { star: 'Thiên Đức', quality: 'excellent', desc: 'Được quý nhân phù trợ' }
        ];
        return monthStars[(birthMonth - 1) % 12];
    }

    // HÀM CHÍNH: Tính chất lượng ngày (ĐÃ CẬP NHẬT)
    function calculateDayQuality(birthInfo, gender, targetDate) {
        // birthInfo có thể là object {year, month, day} hoặc số (năm sinh - tương thích cũ)
        let birthYear, birthMonth, birthDay;

        if (typeof birthInfo === 'object') {
            birthYear = birthInfo.year;
            birthMonth = birthInfo.month;
            birthDay = birthInfo.day;
        } else {
            // Tương thích ngược với code cũ
            birthYear = birthInfo;
            birthMonth = 1;
            birthDay = 1;
        }

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

        // Tính tương hợp cá nhân
        const compatibility = calculateCompatibility(
            { year: birthYear, month: birthMonth, day: birthDay },
            targetDate
        );

        // Sao tháng sinh
        const birthMonthStar = getBirthMonthStar(birthMonth);

        let score = 50;
        const factors = [];

        // === YẾU TỐ CÁ NHÂN (dựa trên ngày tháng sinh) ===

        // Lục Hợp / Lục Xung / Tam Hợp
        if (compatibility.lucHop) {
            score += 25;
            factors.push({ text: compatibility.description, type: 'positive' });
        } else if (compatibility.tamHop) {
            score += 15;
            factors.push({ text: compatibility.description, type: 'positive' });
        } else if (compatibility.lucXung) {
            score -= 25;
            factors.push({ text: compatibility.description, type: 'negative' });
        }

        // Ảnh hưởng sao tháng sinh
        if (birthMonthStar.quality === 'excellent') {
            score += 5;
        } else if (birthMonthStar.quality === 'bad') {
            score -= 5;
        }

        // === YẾU TỐ CHUNG ===

        // Trực
        if (truc) {
            if (truc.quality === 'excellent') { score += 20; factors.push({ text: `Trực ${truc.name}: Đại cát`, type: 'positive' }); }
            else if (truc.quality === 'good') { score += 10; factors.push({ text: `Trực ${truc.name}: Tốt`, type: 'positive' }); }
            else if (truc.quality === 'bad') { score -= 15; factors.push({ text: `Trực ${truc.name}: Xấu`, type: 'negative' }); }
            else { factors.push({ text: `Trực ${truc.name}: Bình`, type: 'neutral' }); }
        }

        // 28 Tú
        if (tu) {
            if (tu.quality === 'excellent') { score += 15; factors.push({ text: `Sao ${tu.name}: Đại cát`, type: 'positive' }); }
            else if (tu.quality === 'good') { score += 8; factors.push({ text: `Sao ${tu.name}: Tốt`, type: 'positive' }); }
            else if (tu.quality === 'bad') { score -= 12; factors.push({ text: `Sao ${tu.name}: Hung`, type: 'negative' }); }
        }

        // Tam Nương, Nguyệt Kỵ
        if (tamNuong) { score -= 25; factors.push({ text: 'Ngày Tam Nương: Đại kỵ', type: 'negative' }); }
        if (nguyetKy) { score -= 20; factors.push({ text: 'Ngày Nguyệt Kỵ (Sát Chủ)', type: 'negative' }); }

        // Giới hạn điểm
        score = Math.max(0, Math.min(100, score));

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
            compatibility, birthMonthStar,
            score, quality, label, factors,
            color: QUALITY_COLORS[quality]
        };
    }

    function getMonthAnalysis(birthInfo, gender, year, month) {
        const days = [];
        const daysInMonth = new Date(year, month, 0).getDate();
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month - 1, day);
            const result = calculateDayQuality(birthInfo, gender, date);
            if (result) days.push(result);
        }
        return days;
    }

    return {
        isTamNuong, isNguyetKy, getTruc, getNhiThapBatTu,
        getHoangDaoHours, calculateDayQuality, getMonthAnalysis,
        calculateCompatibility, isLucHop, isLucXung, isTamHop
    };
})();
