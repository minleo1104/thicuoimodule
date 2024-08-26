
function countPairs() {
    const arrayInput = document.getElementById('arrayInput').value;
    const kInput = parseInt(document.getElementById('kInput').value);

    const array = arrayInput.split(',').map(Number);

    if (array.some(isNaN) || kInput <= 0) {
        document.getElementById('ketqua').innerText = 'Vui lòng nhập mảng số nguyên hợp lệ và số nguyên dương k.';
        return;
    }

    let count = 0;
    let pairs = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if ((array[i] + array[j]) % kInput === 0) {
                count++;
                pairs.push(`(${array[i]}, ${array[j]})`);
            }
        }
    }

    document.getElementById('ketqua').innerText = `Số lượng cặp số có tổng chia hết cho ${kInput} là: ${count}. Các cặp số là: ${pairs.join(', ')}.`;
}
