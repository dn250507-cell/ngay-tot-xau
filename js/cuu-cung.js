/**
 * Cửu Cung - Tính Cung Phi và thông tin Cửu Tinh
 */

const CuuCung = (function () {

    /**
     * Tính tổng các chữ số của năm sinh
     * @param {number} year - Năm sinh
     * @returns {number} - Tổng các chữ số
     */
    function sumDigits(year) {
        let sum = 0;
        while (year > 0) {
            sum += year % 10;
            year = Math.floor(year / 10);
        }
        // Tiếp tục cộng nếu tổng > 9
        while (sum > 9) {
            let newSum = 0;
            while (sum > 0) {
                newSum += sum % 10;
                sum = Math.floor(sum / 10);
            }
            sum = newSum;
        }
        return sum;
    }

    /**
     * Tính Cung Phi (Cửu Cung) dựa trên năm sinh và giới tính
     * @param {number} yearOfBirth - Năm sinh dương lịch
     * @param {string} gender - 'male' hoặc 'female'
     * @returns {number} - Số cung (1-9)
     */
    function getCungPhi(yearOfBirth, gender) {
        const digitSum = sumDigits(yearOfBirth);
        let cung;

        if (gender === 'male') {
            // Nam: Cung = (10 - digitSum) % 9
            cung = (10 - digitSum) % 9;
        } else {
            // Nữ: Cung = (digitSum + 5) % 9
            cung = (digitSum + 5) % 9;
        }

        // Nếu kết quả = 0, thay bằng 9
        return cung === 0 ? 9 : cung;
    }

    /**
     * Lấy thông tin chi tiết của Cửu Tinh
     * @param {number} cungNumber - Số cung (1-9)
     * @returns {Object} - Thông tin Cửu Tinh
     */
    function getCungInfo(cungNumber) {
        const info = CUU_TINH.find(c => c.number === cungNumber);
        if (!info) return null;

        return {
            ...info,
            colorClass: getQualityClass(info.quality),
            icon: getCungIcon(cungNumber)
        };
    }

    /**
     * Lấy class CSS cho chất lượng
     */
    function getQualityClass(quality) {
        const classes = {
            excellent: 'quality-excellent',
            good: 'quality-good',
            neutral: 'quality-neutral',
            bad: 'quality-bad',
            terrible: 'quality-terrible'
        };
        return classes[quality] || 'quality-neutral';
    }

    /**
     * Lấy icon cho mỗi cung
     */
    function getCungIcon(cungNumber) {
        const icons = {
            1: '💧', // Thủy
            2: '🌍', // Thổ
            3: '🌳', // Mộc
            4: '🌿', // Mộc
            5: '⛰️', // Thổ (Đại hung)
            6: '🥇', // Kim
            7: '⚔️', // Kim
            8: '🏔️', // Thổ (Đại cát)
            9: '🔥'  // Hỏa
        };
        return icons[cungNumber] || '⭐';
    }

    /**
     * Tính sao chiếu mệnh theo năm
     * Mỗi năm có một sao chủ đạo chiếu xuống
     */
    function getYearlyStar(year) {
        // Bắt đầu từ năm 1900 là Nhất Bạch, đi ngược
        const baseStar = 1;
        const baseYear = 1900;
        const diff = year - baseYear;
        let star = baseStar - (diff % 9);
        if (star <= 0) star += 9;
        return getCungInfo(star);
    }

    /**
     * Tính sao chiếu mệnh theo tháng
     */
    function getMonthlyStar(year, month) {
        // Công thức tính sao tháng dựa vào năm và tháng
        const yearStar = ((1900 - year) % 9 + 9) % 9 || 9;
        let monthStar;

        // Năm Dương (Tý, Dần, Thìn, Ngọ, Thân, Tuất)
        const chiIndex = (year - 4) % 12;
        const isDuong = [0, 2, 4, 6, 8, 10].includes(chiIndex);

        if (isDuong) {
            monthStar = (8 - month + 12) % 9 || 9;
        } else {
            monthStar = (month + 2) % 9 || 9;
        }

        return getCungInfo(monthStar);
    }

    /**
     * Phân tích tổng hợp mệnh người theo Cửu Cung
     */
    function analyzeDestiny(yearOfBirth, gender) {
        const cungPhi = getCungPhi(yearOfBirth, gender);
        const cungInfo = getCungInfo(cungPhi);
        const canChi = LunarConverter.getCanChiYear(yearOfBirth);

        return {
            cungPhi,
            cungInfo,
            canChi,
            summary: `${gender === 'male' ? 'Nam' : 'Nữ'} mệnh ${cungInfo.name} (${cungInfo.element})`,
            advice: getAdvice(cungPhi)
        };
    }

    /**
     * Lời khuyên theo cung mệnh
     */
    function getAdvice(cungNumber) {
        const advice = {
            1: 'Hợp với công việc liên quan đến nước, du lịch, giao tiếp.',
            2: 'Nên cẩn thận trong các quyết định lớn, tránh mạo hiểm.',
            3: 'Cần kiểm soát cảm xúc, tránh xung đột không đáng có.',
            4: 'Phù hợp với công việc sáng tạo, nghệ thuật, văn chương.',
            5: 'Năm có nhiều biến động, nên giữ thái độ bình tĩnh.',
            6: 'Thuận lợi trong công việc, tài lộc, quyền quý.',
            7: 'Cần cẩn thận về sức khỏe và các mối quan hệ.',
            8: 'Đại cát, thuận lợi mọi việc, may mắn tài lộc.',
            9: 'Tốt cho việc học hành, thi cử, danh tiếng.'
        };
        return advice[cungNumber] || '';
    }

    return {
        getCungPhi,
        getCungInfo,
        getYearlyStar,
        getMonthlyStar,
        analyzeDestiny,
        sumDigits
    };
})();
