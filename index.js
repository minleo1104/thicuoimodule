let arr = [];

function addElement() {
    const inputElement = document.getElementById('arrayInput');
    const value = parseInt(inputElement.value, 10);

    if (isNaN(value)) {
        alert('Vui lòng nhập một số nguyên hợp lệ.');
        return;
    }
    
    if (arr.length >= 20) {
        alert('Mảng không được vượt quá 20 phần tử.');
        return;
    }

    arr.push(value);
    inputElement.value = '';

    document.getElementById('arrayDisplay').textContent = `Mảng hiện tại: [${arr.join(', ')}]`;
}

function calculateSum() {
    if (arr.length === 0) {
        alert('Mảng hiện tại trống.');
        return;
    }
    
    const multiples = arr.filter(num => num % 3 === 0 && num % 5 === 0);

    const totalSum = multiples.reduce((sum, num) => sum + num, 0);

    document.getElementById('result').textContent = `Các số là bội chung của 3 và 5: ${multiples.join(', ')}. Tổng: ${totalSum}`;
}
