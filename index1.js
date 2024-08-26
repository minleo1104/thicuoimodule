
function processScore() {
    let diem = parseInt(document.getElementById('diemInput').value);

    if (isNaN(diem) || diem < 0 || diem > 100) {
        alert("Điểm số phải nằm trong khoảng từ 0 đến 100.");
        return;
    }

    if (diem < 50) {
        document.getElementById('ketqua').innerText = `Điểm số ${diem} là trượt.`;
        return;
    }

    let diemTron = diem;

    if (diem >= 48) {
        let BoiCua5 = Math.ceil(diem / 5) * 5;
        if (BoiCua5 - diem < 3) {
            diemTron = BoiCua5;
        }
    }

    document.getElementById('ketqua').innerText = `Điểm số làm tròn là: ${diemTron}`;
}