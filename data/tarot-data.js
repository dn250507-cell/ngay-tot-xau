/**
 * Whispers of Love Oracle - 50 lá bài
 * Tác giả: Angela Hartfield | Họa sĩ: Josephine Wall
 */

const WHISPERS_OF_LOVE_CARDS = [
    {
        id: 1,
        name: "Listen with Your Heart",
        nameVi: "Lắng Nghe Bằng Trái Tim",
        meaning: "Hãy lắng nghe không chỉ bằng tai mà còn bằng trái tim. Đôi khi người yêu không nói ra lời, nhưng tâm hồn họ đang gửi gắm thông điệp.",
        advice: "Dành thời gian lắng nghe người ấy thực sự muốn gì, thay vì chỉ nghe những gì họ nói.",
        keywords: ["lắng nghe", "đồng cảm", "thấu hiểu"],
        emoji: "👂💕"
    },
    {
        id: 2,
        name: "Like Attracts Like",
        nameVi: "Đồng Thanh Tương Ứng",
        meaning: "Năng lượng bạn phát ra sẽ thu hút năng lượng tương tự. Nếu bạn tràn đầy tình yêu, tình yêu sẽ đến với bạn.",
        advice: "Hãy trở thành phiên bản tốt nhất của chính mình để thu hút người phù hợp.",
        keywords: ["thu hút", "năng lượng", "tích cực"],
        emoji: "🧲💖"
    },
    {
        id: 3,
        name: "Back to What You Love",
        nameVi: "Quay Về Với Đam Mê",
        meaning: "Đừng quên những điều bạn yêu thích. Khi bạn sống đúng với đam mê, tình yêu đích thực sẽ tìm đến bạn.",
        advice: "Hãy dành thời gian làm những gì bạn yêu thích, điều này sẽ mang tình yêu đến gần hơn.",
        keywords: ["đam mê", "niềm vui", "tự do"],
        emoji: "🎨❤️"
    },
    {
        id: 4,
        name: "You Are Limitless",
        nameVi: "Bạn Không Có Giới Hạn",
        meaning: "Đừng tự giới hạn khả năng yêu thương của mình. Trái tim bạn có sức chứa vô tận.",
        advice: "Mở rộng tâm hồn, đừng sợ bị tổn thương, vì tình yêu đích thực sẽ chữa lành mọi vết thương.",
        keywords: ["vô hạn", "tiềm năng", "mở lòng"],
        emoji: "✨💫"
    },
    {
        id: 5,
        name: "Simple Acts of Kindness",
        nameVi: "Những Hành Động Tử Tế Nhỏ",
        meaning: "Tình yêu được xây dựng từ những điều nhỏ bé hàng ngày. Một cái ôm, một lời khen, một ly trà ấm.",
        advice: "Thể hiện tình yêu qua những hành động nhỏ nhưng ý nghĩa mỗi ngày.",
        keywords: ["tử tế", "quan tâm", "chăm sóc"],
        emoji: "🌸💝"
    },
    {
        id: 6,
        name: "Be Willing to Express Love",
        nameVi: "Sẵn Sàng Bày Tỏ Tình Yêu",
        meaning: "Đừng giữ tình yêu trong lòng. Hãy nói ra, hãy thể hiện. Người kia cần được nghe và cảm nhận.",
        advice: "Nói 'Anh/Em yêu' mỗi ngày. Đừng chờ đến khi quá muộn.",
        keywords: ["bày tỏ", "dũng cảm", "chân thành"],
        emoji: "💬❤️"
    },
    {
        id: 7,
        name: "The Only Thing Real is Love",
        nameVi: "Chỉ Có Tình Yêu Là Thật",
        meaning: "Mọi thứ khác đều tạm thời - tiền bạc, danh vọng, vẻ đẹp bề ngoài. Chỉ có tình yêu là vĩnh cửu.",
        advice: "Đặt tình yêu lên hàng đầu trong mọi quyết định của cuộc sống.",
        keywords: ["chân thật", "vĩnh cửu", "giá trị"],
        emoji: "💎💕"
    },
    {
        id: 8,
        name: "Love Who You Are",
        nameVi: "Yêu Chính Mình",
        meaning: "Trước khi yêu ai, hãy học cách yêu bản thân mình. Bạn xứng đáng được yêu thương vô điều kiện.",
        advice: "Dành thời gian chăm sóc bản thân, đừng tìm kiếm giá trị từ người khác.",
        keywords: ["tự yêu", "tự tin", "giá trị bản thân"],
        emoji: "🪞💗"
    },
    {
        id: 9,
        name: "Slow Down",
        nameVi: "Chậm Lại",
        meaning: "Tình yêu cần thời gian để phát triển. Đừng vội vàng, đừng hấp tấp. Hãy để mọi thứ diễn ra tự nhiên.",
        advice: "Đừng ép buộc mối quan hệ tiến triển quá nhanh. Hãy tận hưởng từng khoảnh khắc.",
        keywords: ["kiên nhẫn", "từ từ", "tự nhiên"],
        emoji: "🐢💚"
    },
    {
        id: 10,
        name: "Treasure Your Loved Ones",
        nameVi: "Trân Quý Người Thương",
        meaning: "Những người yêu thương bạn là báu vật quý giá nhất. Đừng đợi mất đi mới biết trân trọng.",
        advice: "Hãy nói lời cảm ơn và thể hiện sự trân trọng với người thân yêu ngay hôm nay.",
        keywords: ["trân trọng", "biết ơn", "gia đình"],
        emoji: "👨‍👩‍👧‍👦💛"
    },
    {
        id: 11,
        name: "Look to Your Inner Strength",
        nameVi: "Nhìn Vào Sức Mạnh Nội Tâm",
        meaning: "Bạn mạnh mẽ hơn bạn nghĩ. Sức mạnh để vượt qua mọi thử thách tình cảm nằm trong bạn.",
        advice: "Tin tưởng vào bản thân, bạn có thể vượt qua giai đoạn khó khăn này.",
        keywords: ["sức mạnh", "nội tâm", "can đảm"],
        emoji: "💪✨"
    },
    {
        id: 12,
        name: "Have Faith",
        nameVi: "Hãy Có Niềm Tin",
        meaning: "Dù tình yêu có vẻ xa vời, hãy tin rằng nó sẽ đến đúng lúc với đúng người.",
        advice: "Giữ vững niềm tin, vũ trụ đang sắp xếp những điều tốt đẹp cho bạn.",
        keywords: ["niềm tin", "hy vọng", "số phận"],
        emoji: "🙏💜"
    },
    {
        id: 13,
        name: "Miracles and Blessings",
        nameVi: "Phép Màu Và Phước Lành",
        meaning: "Phép màu tình yêu có thể xảy ra khi bạn ít mong đợi nhất. Hãy mở lòng đón nhận.",
        advice: "Hãy để ý những điều kỳ diệu nhỏ bé xung quanh, tình yêu có thể đến từ nơi bất ngờ.",
        keywords: ["phép màu", "may mắn", "bất ngờ"],
        emoji: "🌟🎁"
    },
    {
        id: 14,
        name: "Ask for Help",
        nameVi: "Đừng Ngại Nhờ Giúp Đỡ",
        meaning: "Bạn không cần một mình gánh vác mọi thứ. Hãy nhờ sự giúp đỡ từ bạn bè, gia đình hoặc chuyên gia.",
        advice: "Chia sẻ với người bạn tin tưởng về những khó khăn trong tình cảm.",
        keywords: ["giúp đỡ", "chia sẻ", "hỗ trợ"],
        emoji: "🤝💙"
    },
    {
        id: 15,
        name: "Practice Compassion",
        nameVi: "Thực Hành Lòng Từ Bi",
        meaning: "Hãy đối xử với người khác bằng lòng từ bi, kể cả khi họ làm bạn tổn thương.",
        advice: "Hiểu rằng mọi người đều có câu chuyện riêng, hãy tha thứ và thấu hiểu.",
        keywords: ["từ bi", "tha thứ", "thấu hiểu"],
        emoji: "🕊️💚"
    },
    {
        id: 16,
        name: "Love is All Around You",
        nameVi: "Tình Yêu Ở Khắp Nơi",
        meaning: "Tình yêu không chỉ đến từ nửa kia. Nó ở trong bạn bè, gia đình, thú cưng và thiên nhiên.",
        advice: "Mở mắt và nhìn thấy tình yêu trong mọi thứ xung quanh bạn.",
        keywords: ["khắp nơi", "nhận ra", "biết ơn"],
        emoji: "🌍❤️"
    },
    {
        id: 17,
        name: "Have Patience",
        nameVi: "Hãy Kiên Nhẫn",
        meaning: "Tình yêu đích thực cần thời gian. Đừng nản lòng nếu mọi thứ chưa như ý muốn.",
        advice: "Tiếp tục làm việc trên bản thân, người phù hợp sẽ xuất hiện khi bạn đã sẵn sàng.",
        keywords: ["kiên nhẫn", "chờ đợi", "tin tưởng"],
        emoji: "⏰💝"
    },
    {
        id: 18,
        name: "Embrace Your Emotions",
        nameVi: "Đón Nhận Cảm Xúc",
        meaning: "Đừng kìm nén cảm xúc. Hãy để bản thân cảm nhận - vui, buồn, hạnh phúc hay đau khổ.",
        advice: "Cho phép mình khóc khi cần, cười khi vui. Cảm xúc là món quà của tạo hóa.",
        keywords: ["cảm xúc", "chấp nhận", "thể hiện"],
        emoji: "🎭💕"
    },
    {
        id: 19,
        name: "Express Love Through Gifts",
        nameVi: "Bày Tỏ Qua Quà Tặng",
        meaning: "Món quà không cần đắt tiền, chỉ cần xuất phát từ trái tim. Một bông hoa, một bức thư viết tay.",
        advice: "Hãy tặng người ấy một món quà nhỏ để thể hiện tình yêu của bạn.",
        keywords: ["quà tặng", "quan tâm", "bất ngờ"],
        emoji: "🎁💐"
    },
    {
        id: 20,
        name: "I Love You",
        nameVi: "Anh/Em Yêu",
        meaning: "Ba từ đơn giản nhưng có sức mạnh phi thường. Đừng tiếc lời nói yêu thương.",
        advice: "Nói 'Anh yêu em / Em yêu anh' ngay bây giờ với người bạn yêu.",
        keywords: ["yêu", "nói ra", "thể hiện"],
        emoji: "💕💕💕"
    },
    {
        id: 21,
        name: "Choose Love",
        nameVi: "Chọn Tình Yêu",
        meaning: "Mỗi ngày bạn có sự lựa chọn: yêu thương hay oán hận. Hãy luôn chọn tình yêu.",
        advice: "Trong mọi xung đột, hãy tự hỏi: 'Nếu tôi chọn yêu thương, tôi sẽ làm gì?'",
        keywords: ["lựa chọn", "yêu thương", "tha thứ"],
        emoji: "☯️❤️"
    },
    {
        id: 22,
        name: "The Heart of the Matter",
        nameVi: "Cốt Lõi Vấn Đề",
        meaning: "Đừng để những chuyện vặt che khuất điều quan trọng thực sự. Hãy tập trung vào cốt lõi.",
        advice: "Tự hỏi điều gì thực sự quan trọng trong mối quan hệ này.",
        keywords: ["cốt lõi", "quan trọng", "tập trung"],
        emoji: "❤️‍🔥🎯"
    },
    {
        id: 23,
        name: "Take a Chance on Love",
        nameVi: "Liều Lĩnh Vì Tình Yêu",
        meaning: "Đôi khi bạn cần mạo hiểm. Tình yêu không đến với người ngồi yên một chỗ.",
        advice: "Hãy bước ra khỏi vùng an toàn, mở lòng với những cơ hội mới.",
        keywords: ["mạo hiểm", "cơ hội", "dũng cảm"],
        emoji: "🎲💘"
    },
    {
        id: 24,
        name: "Focus on Love",
        nameVi: "Tập Trung Vào Tình Yêu",
        meaning: "Nơi bạn đặt sự chú ý, năng lượng sẽ chảy về đó. Hãy tập trung vào tình yêu.",
        advice: "Thay vì nghĩ về những điều tiêu cực, hãy nghĩ về những khoảnh khắc yêu thương.",
        keywords: ["tập trung", "năng lượng", "tích cực"],
        emoji: "🔍💗"
    },
    {
        id: 25,
        name: "Romance",
        nameVi: "Sự Lãng Mạn",
        meaning: "Đừng để cuộc sống bận rộn làm mất đi sự lãng mạn. Hãy tạo những khoảnh khắc đặc biệt.",
        advice: "Lên kế hoạch cho một buổi hẹn hò lãng mạn hoặc một bất ngờ nhỏ.",
        keywords: ["lãng mạn", "hẹn hò", "bất ngờ"],
        emoji: "🌹🕯️"
    },
    {
        id: 26,
        name: "New Love",
        nameVi: "Tình Yêu Mới",
        meaning: "Một tình yêu mới đang đến hoặc mối quan hệ hiện tại đang được làm mới.",
        advice: "Mở lòng đón nhận. Đây là thời điểm tuyệt vời cho những khởi đầu mới.",
        keywords: ["mới", "bắt đầu", "hy vọng"],
        emoji: "🌱💕"
    },
    {
        id: 27,
        name: "Spiritual Connection",
        nameVi: "Kết Nối Tâm Linh",
        meaning: "Mối quan hệ của bạn có chiều sâu tâm linh. Hai linh hồn đã gặp nhau không phải ngẫu nhiên.",
        advice: "Cùng nhau thiền, cầu nguyện hoặc thảo luận về những điều sâu sắc trong cuộc sống.",
        keywords: ["tâm linh", "linh hồn", "định mệnh"],
        emoji: "🔮✨"
    },
    {
        id: 28,
        name: "The Union of Hearts",
        nameVi: "Sự Hợp Nhất Của Hai Trái Tim",
        meaning: "Hai trái tim đang hòa làm một. Đây là dấu hiệu của tình yêu sâu đậm và bền vững.",
        advice: "Hãy trân trọng sự kết nối đặc biệt này, nó rất hiếm có.",
        keywords: ["hợp nhất", "bền vững", "sâu sắc"],
        emoji: "💑💞"
    },
    {
        id: 29,
        name: "Forgiveness",
        nameVi: "Sự Tha Thứ",
        meaning: "Tha thứ không phải cho người khác, mà cho chính bạn. Buông bỏ oán hận để mở đường cho tình yêu.",
        advice: "Hãy tha thứ cho những tổn thương trong quá khứ để tiến về phía trước.",
        keywords: ["tha thứ", "buông bỏ", "chữa lành"],
        emoji: "🕊️💚"
    },
    {
        id: 30,
        name: "True Love",
        nameVi: "Tình Yêu Đích Thực",
        meaning: "Tình yêu đích thực đang ở đây hoặc sắp đến. Đây là loại tình yêu vượt qua mọi thử thách.",
        advice: "Tin tưởng vào tình yêu này, nó là thật và xứng đáng được trân trọng.",
        keywords: ["đích thực", "chân thành", "vĩnh cửu"],
        emoji: "💎❤️"
    },
    {
        id: 31,
        name: "Love Makes the Difference",
        nameVi: "Tình Yêu Tạo Nên Sự Khác Biệt",
        meaning: "Tình yêu có sức mạnh thay đổi mọi thứ. Một mối quan hệ yêu thương sẽ biến đổi cuộc sống bạn.",
        advice: "Đầu tư vào mối quan hệ, tình yêu sẽ mang đến những điều kỳ diệu.",
        keywords: ["thay đổi", "sức mạnh", "biến đổi"],
        emoji: "🦋💖"
    },
    {
        id: 32,
        name: "Relationship Patterns",
        nameVi: "Mô Hình Quan Hệ",
        meaning: "Hãy nhìn lại những mô hình lặp lại trong các mối quan hệ của bạn. Học hỏi từ quá khứ.",
        advice: "Nhận diện những thói quen không lành mạnh và thay đổi chúng.",
        keywords: ["mô hình", "học hỏi", "thay đổi"],
        emoji: "🔄💭"
    },
    {
        id: 33,
        name: "Appreciate this Moment",
        nameVi: "Trân Trọng Khoảnh Khắc Này",
        meaning: "Đừng sống trong quá khứ hay lo lắng tương lai. Hãy tận hưởng khoảnh khắc hiện tại với người bạn yêu.",
        advice: "Bỏ điện thoại xuống, nhìn vào mắt người ấy và thực sự hiện diện.",
        keywords: ["hiện tại", "tận hưởng", "trân trọng"],
        emoji: "🕐💝"
    },
    {
        id: 34,
        name: "Receive with Love",
        nameVi: "Nhận Với Tình Yêu",
        meaning: "Học cách nhận, không chỉ cho. Khi ai đó trao tặng, hãy đón nhận với lòng biết ơn.",
        advice: "Đừng từ chối sự quan tâm của người khác, hãy mở lòng đón nhận.",
        keywords: ["nhận", "biết ơn", "cân bằng"],
        emoji: "🤲💕"
    },
    {
        id: 35,
        name: "Speak the Language of Love",
        nameVi: "Nói Ngôn Ngữ Của Tình Yêu",
        meaning: "Mỗi người có ngôn ngữ yêu thương riêng. Hãy học ngôn ngữ của người bạn yêu.",
        advice: "Tìm hiểu người ấy thích được yêu thương theo cách nào: lời nói, hành động, quà tặng, thời gian hay cử chỉ.",
        keywords: ["ngôn ngữ", "thấu hiểu", "giao tiếp"],
        emoji: "💬💗"
    },
    {
        id: 36,
        name: "Dance of Love",
        nameVi: "Vũ Điệu Tình Yêu",
        meaning: "Tình yêu như một vũ điệu, cần sự phối hợp nhịp nhàng giữa hai người.",
        advice: "Học cách nhường nhịn và hòa hợp với đối phương.",
        keywords: ["hòa hợp", "nhịp nhàng", "phối hợp"],
        emoji: "💃🕺"
    },
    {
        id: 37,
        name: "Trust Your Heart",
        nameVi: "Tin Vào Trái Tim",
        meaning: "Trái tim bạn biết điều gì tốt nhất. Hãy tin vào trực giác của mình trong tình yêu.",
        advice: "Lắng nghe tiếng nói bên trong, nó sẽ dẫn đường cho bạn.",
        keywords: ["trực giác", "tin tưởng", "nội tâm"],
        emoji: "❤️‍🔥🧭"
    },
    {
        id: 38,
        name: "Open Your Heart",
        nameVi: "Mở Rộng Trái Tim",
        meaning: "Cánh cửa trái tim bạn có thể đang đóng vì những tổn thương. Đã đến lúc mở ra.",
        advice: "Dũng cảm buông bỏ nỗi sợ và cho phép tình yêu bước vào.",
        keywords: ["mở lòng", "dũng cảm", "chữa lành"],
        emoji: "🚪❤️"
    },
    {
        id: 39,
        name: "Unconditional Love",
        nameVi: "Tình Yêu Vô Điều Kiện",
        meaning: "Yêu không đòi hỏi điều kiện. Chấp nhận người ấy với tất cả ưu và khuyết điểm.",
        advice: "Hãy yêu người ấy vì con người họ, không vì những gì bạn muốn họ trở thành.",
        keywords: ["vô điều kiện", "chấp nhận", "trọn vẹn"],
        emoji: "💕♾️"
    },
    {
        id: 40,
        name: "Healing Love",
        nameVi: "Tình Yêu Chữa Lành",
        meaning: "Tình yêu có sức mạnh chữa lành mọi vết thương. Cả bạn và người ấy đều đang được chữa lành.",
        advice: "Hãy kiên nhẫn trong quá trình chữa lành, tình yêu cần thời gian.",
        keywords: ["chữa lành", "phục hồi", "kiên nhẫn"],
        emoji: "🩹💚"
    },
    {
        id: 41,
        name: "Commitment",
        nameVi: "Sự Cam Kết",
        meaning: "Đây là lúc để cam kết sâu sắc hơn trong mối quan hệ. Tình yêu cần sự chắc chắn.",
        advice: "Hãy suy nghĩ nghiêm túc về tương lai và thể hiện sự cam kết của bạn.",
        keywords: ["cam kết", "nghiêm túc", "tương lai"],
        emoji: "💍💝"
    },
    {
        id: 42,
        name: "Protected Love",
        nameVi: "Tình Yêu Được Bảo Vệ",
        meaning: "Mối quan hệ của bạn đang được vũ trụ bảo vệ. Hãy yên tâm và tin tưởng.",
        advice: "Đừng lo lắng về những thế lực bên ngoài, tình yêu của bạn được che chở.",
        keywords: ["bảo vệ", "an toàn", "tin tưởng"],
        emoji: "🛡️💕"
    },
    {
        id: 43,
        name: "Passion",
        nameVi: "Đam Mê",
        meaning: "Ngọn lửa đam mê đang bùng cháy. Đây là thời kỳ tình yêu nồng nhiệt và mãnh liệt.",
        advice: "Tận hưởng cảm xúc mãnh liệt này, nhưng đừng quên nuôi dưỡng nó để ngọn lửa không tắt.",
        keywords: ["đam mê", "nồng nhiệt", "mãnh liệt"],
        emoji: "🔥❤️‍🔥"
    },
    {
        id: 44,
        name: "Gratitude",
        nameVi: "Lòng Biết Ơn",
        meaning: "Biết ơn những gì bạn có trong tình yêu. Sự biết ơn sẽ thu hút thêm điều tốt đẹp.",
        advice: "Mỗi ngày, hãy liệt kê 3 điều bạn biết ơn về mối quan hệ của mình.",
        keywords: ["biết ơn", "trân trọng", "tích cực"],
        emoji: "🙏💛"
    },
    {
        id: 45,
        name: "Soul Mate",
        nameVi: "Tri Kỷ",
        meaning: "Bạn đã hoặc sắp gặp người tri kỷ của đời mình. Linh hồn đôi đang kết nối.",
        advice: "Hãy mở lòng và nhận ra người đặc biệt này khi họ xuất hiện.",
        keywords: ["tri kỷ", "linh hồn", "định mệnh"],
        emoji: "👫✨"
    },
    {
        id: 46,
        name: "Letting Go",
        nameVi: "Buông Bỏ",
        meaning: "Đôi khi yêu là buông tay. Buông bỏ không phải là từ bỏ, mà là tin tưởng vào điều tốt đẹp hơn.",
        advice: "Nếu một mối quan hệ không còn phục vụ sự phát triển của bạn, hãy can đảm buông bỏ.",
        keywords: ["buông bỏ", "tự do", "tin tưởng"],
        emoji: "🍂💔"
    },
    {
        id: 47,
        name: "Time for Love",
        nameVi: "Thời Điểm Cho Tình Yêu",
        meaning: "Đây là thời điểm hoàn hảo cho tình yêu. Vũ trụ đang mở cánh cửa cho bạn.",
        advice: "Hành động ngay bây giờ. Đừng bỏ lỡ thời cơ này.",
        keywords: ["thời điểm", "cơ hội", "hành động"],
        emoji: "⏰💘"
    },
    {
        id: 48,
        name: "Divine Love",
        nameVi: "Tình Yêu Thiêng Liêng",
        meaning: "Tình yêu của bạn được ban phước từ nguồn năng lượng cao hơn. Đây là mối duyên tiền định.",
        advice: "Hãy biết ơn và trân trọng tình yêu thiêng liêng này.",
        keywords: ["thiêng liêng", "ban phước", "tiền định"],
        emoji: "👼💕"
    },
    {
        id: 49,
        name: "Renew Your Love",
        nameVi: "Làm Mới Tình Yêu",
        meaning: "Mối quan hệ cần được làm mới. Hãy thêm sự tươi mới và hứng khởi.",
        advice: "Thử những điều mới cùng nhau, đi đến nơi mới, tạo kỷ niệm mới.",
        keywords: ["làm mới", "tươi mới", "sáng tạo"],
        emoji: "🔄💝"
    },
    {
        id: 50,
        name: "Everlasting Love",
        nameVi: "Tình Yêu Vĩnh Cửu",
        meaning: "Tình yêu đích thực không có hồi kết. Dù qua bao nhiêu kiếp, các linh hồn vẫn tìm đến nhau.",
        advice: "Hãy tin vào sức mạnh vĩnh cửu của tình yêu. Nó sẽ không bao giờ tàn phai.",
        keywords: ["vĩnh cửu", "bất diệt", "mãi mãi"],
        emoji: "♾️❤️"
    }
];

// Các kiểu trải bài
const SPREAD_TYPES = {
    single: {
        name: "1 lá - Thông điệp chính",
        count: 1,
        positions: ["Thông điệp cho bạn"]
    },
    threeCard: {
        name: "3 lá - Quá khứ, Hiện tại, Tương lai",
        count: 3,
        positions: ["Quá khứ", "Hiện tại", "Tương lai"]
    },
    fiveCard: {
        name: "5 lá - Trải bài tình yêu",
        count: 5,
        positions: ["Bạn", "Người ấy", "Mối quan hệ", "Thử thách", "Kết quả"]
    }
};

// Các câu hỏi mẫu
const SAMPLE_QUESTIONS = [
    { value: "current_love", text: "💕 Tình yêu hiện tại của tôi như thế nào?" },
    { value: "heal_relationship", text: "💔 Làm sao để hàn gắn mối quan hệ?" },
    { value: "find_love", text: "🌹 Khi nào tôi sẽ gặp được tình yêu đích thực?" },
    { value: "continue_relationship", text: "💑 Mối quan hệ này có nên tiếp tục?" },
    { value: "improve_love", text: "✨ Làm thế nào để cải thiện tình yêu?" },
    { value: "other", text: "✍️ Câu hỏi khác..." }
];
