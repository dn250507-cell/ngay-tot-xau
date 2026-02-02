/**
 * Tarot.js - Logic bói Tarot Whispers of Love Oracle
 */

const Tarot = (function () {
    let drawnCards = [];
    let currentSpread = null;
    let userQuestion = '';

    /**
     * Xáo bài (Fisher-Yates shuffle)
     */
    function shuffleCards() {
        const cards = [...WHISPERS_OF_LOVE_CARDS];
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        return cards;
    }

    /**
     * Rút bài
     */
    function drawCards(count) {
        const shuffled = shuffleCards();
        drawnCards = shuffled.slice(0, count);
        return drawnCards;
    }

    /**
     * Diễn giải tổng hợp
     */
    function getOverallReading(cards, question) {
        const keywords = cards.flatMap(c => c.keywords);
        const uniqueKeywords = [...new Set(keywords)];

        const positiveCards = cards.filter(c =>
            c.keywords.some(k => ['yêu', 'tình yêu', 'hạnh phúc', 'hy vọng', 'tốt', 'may mắn'].includes(k))
        );

        let overall = '';
        if (positiveCards.length >= cards.length * 0.6) {
            overall = '✨ Năng lượng tổng thể rất tích cực! Tình yêu đang mỉm cười với bạn.';
        } else if (positiveCards.length >= cards.length * 0.4) {
            overall = '🌙 Cần thêm một chút nỗ lực, nhưng triển vọng tốt đẹp đang chờ phía trước.';
        } else {
            overall = '🌱 Đây là thời điểm để suy ngẫm và chữa lành. Mọi thứ sẽ sáng tỏ dần.';
        }

        return overall;
    }

    /**
     * Render kết quả
     */
    function renderReading(cards, spreadType, question) {
        currentSpread = SPREAD_TYPES[spreadType];
        userQuestion = question;

        const container = document.getElementById('tarot-result');
        if (!container) return;

        const positions = currentSpread.positions;

        let html = `
            <div class="tarot-reading">
                <div class="reading-header">
                    <h3>🔮 Kết Quả Bói Bài</h3>
                    <p class="question-text">"${question}"</p>
                </div>
                
                <div class="cards-container spread-${spreadType}">
        `;

        cards.forEach((card, index) => {
            html += `
                <div class="tarot-card" data-index="${index}" style="animation-delay: ${index * 0.3}s">
                    <div class="card-inner">
                        <div class="card-front">
                            <div class="card-emoji">${card.emoji}</div>
                            <div class="card-position">${positions[index]}</div>
                            <h4 class="card-name-vi">${card.nameVi}</h4>
                            <p class="card-name-en">${card.name}</p>
                        </div>
                    </div>
                    <div class="card-meaning">
                        <p class="meaning-text">${card.meaning}</p>
                        <p class="advice-text">💡 ${card.advice}</p>
                        <div class="keywords">
                            ${card.keywords.map(k => `<span class="keyword">#${k}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `;
        });

        html += `
                </div>
                
                <div class="overall-reading">
                    <h4>📝 Tổng Kết</h4>
                    <p>${getOverallReading(cards, question)}</p>
                </div>
                
                <button class="btn-redraw" onclick="Tarot.reset()">
                    🔄 Rút Lại Bài Mới
                </button>
            </div>
        `;

        container.innerHTML = html;
        container.classList.add('show');

        // Trigger animations
        setTimeout(() => {
            document.querySelectorAll('.tarot-card').forEach((card, i) => {
                setTimeout(() => card.classList.add('revealed'), i * 400);
            });
        }, 100);
    }

    /**
     * Thực hiện reading
     */
    function performReading(spreadType, question) {
        const count = SPREAD_TYPES[spreadType].count;
        const cards = drawCards(count);
        renderReading(cards, spreadType, question);
        return cards;
    }

    /**
     * Reset để bói lại
     */
    function reset() {
        const result = document.getElementById('tarot-result');
        if (result) {
            result.classList.remove('show');
            result.innerHTML = '';
        }
        drawnCards = [];

        // Scroll back to form
        document.getElementById('tarot-form-section')?.scrollIntoView({ behavior: 'smooth' });
    }

    /**
     * Khởi tạo listeners
     */
    function init() {
        const form = document.getElementById('tarot-form');
        if (!form) return;

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const questionSelect = document.getElementById('tarot-question');
            const customQuestion = document.getElementById('custom-question');
            const spreadType = document.getElementById('spread-type').value;

            let question = questionSelect.value === 'other'
                ? customQuestion.value
                : questionSelect.options[questionSelect.selectedIndex].text;

            if (!question.trim()) {
                showTarotToast('Vui lòng chọn hoặc nhập câu hỏi!', 'error');
                return;
            }

            // Animation shuffle
            showShuffleAnimation(() => {
                performReading(spreadType, question);
            });
        });

        // Toggle custom question input
        const questionSelect = document.getElementById('tarot-question');
        if (questionSelect) {
            questionSelect.addEventListener('change', function () {
                const customInput = document.getElementById('custom-question-wrapper');
                if (customInput) {
                    customInput.style.display = this.value === 'other' ? 'block' : 'none';
                }
            });
        }
    }

    /**
     * Animation xáo bài
     */
    function showShuffleAnimation(callback) {
        const container = document.getElementById('tarot-result');
        container.innerHTML = `
            <div class="shuffle-animation">
                <div class="shuffle-cards">
                    <div class="shuffle-card"></div>
                    <div class="shuffle-card"></div>
                    <div class="shuffle-card"></div>
                </div>
                <p>🔮 Đang xáo bài và kết nối năng lượng...</p>
            </div>
        `;
        container.classList.add('show');

        setTimeout(callback, 2000);
    }

    /**
     * Toast notification
     */
    function showTarotToast(message, type) {
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

    return {
        init,
        performReading,
        reset,
        drawCards,
        shuffleCards
    };
})();

// Initialize when DOM ready
document.addEventListener('DOMContentLoaded', function () {
    Tarot.init();
});
