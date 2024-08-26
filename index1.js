
function processScore() {
    let score = parseInt(document.getElementById('scoreInput').value);

    if (isNaN(score) || score < 0 || score > 100) {
        alert("Điểm số phải nằm trong khoảng từ 0 đến 100.");
        return;
    }

    if (score < 50) {
        document.getElementById('ketqua').innerText = `Điểm số ${score} là trượt.`;
        return;
    }

    let roundedScore = score;

    if (score >= 48) {
        let nextMultipleOf5 = Math.ceil(score / 5) * 5;
        if (nextMultipleOf5 - score < 3) {
            roundedScore = nextMultipleOf5;
        }
    }

    document.getElementById('ketqua').innerText = `Điểm số làm tròn là: ${roundedScore}`;
}