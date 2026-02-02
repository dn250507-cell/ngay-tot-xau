/**
 * Constants - Dữ liệu cố định cho tính ngày tốt xấu
 */

// 10 Thiên Can
const THIEN_CAN = ['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'];

// 12 Địa Chi
const DIA_CHI = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];

// 12 Con Giáp
const CON_GIAP = ['Chuột', 'Trâu', 'Hổ', 'Mèo', 'Rồng', 'Rắn', 'Ngựa', 'Dê', 'Khỉ', 'Gà', 'Chó', 'Lợn'];

// 12 Trực (Kiến Trừ)
const TRUC = [
    { name: 'Kiến', quality: 'good', description: 'Tốt cho việc khởi công, động thổ' },
    { name: 'Trừ', quality: 'good', description: 'Tốt cho việc trừ tà, chữa bệnh' },
    { name: 'Mãn', quality: 'good', description: 'Tốt cho việc cưới hỏi, khai trương' },
    { name: 'Bình', quality: 'neutral', description: 'Ngày bình thường, việc nhỏ' },
    { name: 'Định', quality: 'good', description: 'Tốt cho việc ký kết, thỏa thuận' },
    { name: 'Chấp', quality: 'neutral', description: 'Ngày bình thường' },
    { name: 'Phá', quality: 'bad', description: 'Xấu, không nên làm việc quan trọng' },
    { name: 'Nguy', quality: 'bad', description: 'Ngày nguy hiểm, cẩn thận' },
    { name: 'Thành', quality: 'excellent', description: 'Rất tốt, việc gì cũng thành' },
    { name: 'Thu', quality: 'good', description: 'Tốt cho việc thu hoạch, nhập kho' },
    { name: 'Khai', quality: 'excellent', description: 'Rất tốt cho khai trương, khởi sự' },
    { name: 'Bế', quality: 'bad', description: 'Xấu, nên nghỉ ngơi' }
];

// 28 Tú (Nhị Thập Bát Tú)
const NHI_THAP_BAT_TU = [
    { name: 'Giác', quality: 'excellent', element: 'Mộc', animal: 'Giao', description: 'Đại cát - Tốt mọi việc' },
    { name: 'Cang', quality: 'bad', element: 'Kim', animal: 'Long', description: 'Hung - Không nên làm việc lớn' },
    { name: 'Đê', quality: 'bad', element: 'Thổ', animal: 'Lạc', description: 'Hung - Xấu cho xây dựng' },
    { name: 'Phòng', quality: 'excellent', element: 'Nhật', animal: 'Thố', description: 'Đại cát - Cưới hỏi tốt' },
    { name: 'Tâm', quality: 'bad', element: 'Nguyệt', animal: 'Hồ', description: 'Hung - Tránh việc quan trọng' },
    { name: 'Vĩ', quality: 'excellent', element: 'Hỏa', animal: 'Hổ', description: 'Đại cát - Tốt mọi việc' },
    { name: 'Cơ', quality: 'excellent', element: 'Thủy', animal: 'Báo', description: 'Cát - Tốt cho kinh doanh' },
    { name: 'Đẩu', quality: 'good', element: 'Mộc', animal: 'Giải', description: 'Cát - Tốt cho học hành' },
    { name: 'Ngưu', quality: 'bad', element: 'Kim', animal: 'Ngưu', description: 'Hung - Không nên cưới hỏi' },
    { name: 'Nữ', quality: 'bad', element: 'Thổ', animal: 'Bức', description: 'Hung - Xấu cho phụ nữ' },
    { name: 'Hư', quality: 'bad', element: 'Nhật', animal: 'Thử', description: 'Hung - Tránh xuất hành' },
    { name: 'Nguy', quality: 'bad', element: 'Nguyệt', animal: 'Yến', description: 'Hung - Ngày nguy hiểm' },
    { name: 'Thất', quality: 'excellent', element: 'Hỏa', animal: 'Trư', description: 'Đại cát - Xây dựng tốt' },
    { name: 'Bích', quality: 'excellent', element: 'Thủy', animal: 'Du', description: 'Đại cát - Tốt mọi việc' },
    { name: 'Khuê', quality: 'bad', element: 'Mộc', animal: 'Lang', description: 'Hung - Tránh kiện tụng' },
    { name: 'Lâu', quality: 'good', element: 'Kim', animal: 'Cẩu', description: 'Cát - Tốt cho may mặc' },
    { name: 'Vị', quality: 'excellent', element: 'Thổ', animal: 'Trĩ', description: 'Đại cát - Tốt cho ăn uống' },
    { name: 'Mão', quality: 'bad', element: 'Nhật', animal: 'Kê', description: 'Hung - Tránh khai trương' },
    { name: 'Tất', quality: 'excellent', element: 'Nguyệt', animal: 'Ô', description: 'Đại cát - Tốt mọi việc' },
    { name: 'Chủy', quality: 'bad', element: 'Hỏa', animal: 'Hầu', description: 'Hung - Tránh việc quan trọng' },
    { name: 'Sâm', quality: 'excellent', element: 'Thủy', animal: 'Viên', description: 'Đại cát - Tốt mọi việc' },
    { name: 'Tỉnh', quality: 'excellent', element: 'Mộc', animal: 'Ngạn', description: 'Đại cát - Khai trương tốt' },
    { name: 'Quỷ', quality: 'bad', element: 'Kim', animal: 'Dương', description: 'Hung - Tránh an táng' },
    { name: 'Liễu', quality: 'bad', element: 'Thổ', animal: 'Chương', description: 'Hung - Xấu cho xây dựng' },
    { name: 'Tinh', quality: 'excellent', element: 'Nhật', animal: 'Mã', description: 'Đại cát - Tốt mọi việc' },
    { name: 'Trương', quality: 'excellent', element: 'Nguyệt', animal: 'Lộc', description: 'Đại cát - Cưới hỏi tốt' },
    { name: 'Dực', quality: 'good', element: 'Hỏa', animal: 'Xà', description: 'Cát - Tốt cho học hành' },
    { name: 'Chẩn', quality: 'excellent', element: 'Thủy', animal: 'Dẫn', description: 'Đại cát - Tốt xuất hành' }
];

// Cửu Tinh (9 sao Cửu Cung)
const CUU_TINH = [
    { number: 1, name: 'Nhất Bạch', quality: 'good', element: 'Thủy', description: 'Sao Tham Lang - Cát tinh' },
    { number: 2, name: 'Nhị Hắc', quality: 'bad', element: 'Thổ', description: 'Sao Cự Môn - Hung tinh' },
    { number: 3, name: 'Tam Bích', quality: 'bad', element: 'Mộc', description: 'Sao Lộc Tồn - Hung tinh' },
    { number: 4, name: 'Tứ Lục', quality: 'good', element: 'Mộc', description: 'Sao Văn Khúc - Cát tinh' },
    { number: 5, name: 'Ngũ Hoàng', quality: 'terrible', element: 'Thổ', description: 'Sao Liêm Trinh - Đại hung' },
    { number: 6, name: 'Lục Bạch', quality: 'good', element: 'Kim', description: 'Sao Vũ Khúc - Cát tinh' },
    { number: 7, name: 'Thất Xích', quality: 'bad', element: 'Kim', description: 'Sao Phá Quân - Hung tinh' },
    { number: 8, name: 'Bát Bạch', quality: 'excellent', element: 'Thổ', description: 'Sao Tả Phụ - Đại cát' },
    { number: 9, name: 'Cửu Tử', quality: 'good', element: 'Hỏa', description: 'Sao Hữu Bật - Cát tinh' }
];

// Ngày Tam Nương (âm lịch)
const TAM_NUONG_DAYS = [3, 7, 13, 18, 22, 27];

// Ngày Nguyệt Kỵ (âm lịch)
const NGUYET_KY_DAYS = [5, 14, 23];

// Ngày giờ Hoàng Đạo theo Địa Chi
const HOANG_DAO_GIO = {
    'Tý': ['Tý', 'Sửu', 'Mão', 'Ngọ', 'Mùi', 'Dậu'],
    'Sửu': ['Dần', 'Mão', 'Tỵ', 'Thân', 'Dậu', 'Hợi'],
    'Dần': ['Tý', 'Sửu', 'Thìn', 'Tỵ', 'Mùi', 'Tuất'],
    'Mão': ['Tý', 'Dần', 'Mão', 'Ngọ', 'Mùi', 'Dậu'],
    'Thìn': ['Dần', 'Mão', 'Tỵ', 'Thân', 'Dậu', 'Hợi'],
    'Tỵ': ['Tý', 'Sửu', 'Thìn', 'Tỵ', 'Mùi', 'Tuất'],
    'Ngọ': ['Tý', 'Sửu', 'Mão', 'Ngọ', 'Mùi', 'Dậu'],
    'Mùi': ['Dần', 'Mão', 'Tỵ', 'Thân', 'Dậu', 'Hợi'],
    'Thân': ['Tý', 'Sửu', 'Thìn', 'Tỵ', 'Mùi', 'Tuất'],
    'Dậu': ['Tý', 'Sửu', 'Mão', 'Ngọ', 'Mùi', 'Dậu'],
    'Tuất': ['Dần', 'Mão', 'Tỵ', 'Thân', 'Dậu', 'Hợi'],
    'Hợi': ['Tý', 'Sửu', 'Thìn', 'Tỵ', 'Mùi', 'Tuất']
};

// Màu sắc cho các mức độ
const QUALITY_COLORS = {
    excellent: '#22C55E',  // Xanh lá - Đại cát
    good: '#3B82F6',       // Xanh dương - Tốt
    neutral: '#9CA3AF',    // Xám - Bình thường
    bad: '#F97316',        // Cam - Xấu
    terrible: '#DC2626'    // Đỏ - Đại hung
};

// Nhãn tiếng Việt cho chất lượng ngày
const QUALITY_LABELS = {
    excellent: 'Đại Cát',
    good: 'Tốt',
    neutral: 'Bình thường',
    bad: 'Xấu',
    terrible: 'Đại Hung'
};
