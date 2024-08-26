let listKH = new List("Danh Sách Khách Hàng");
function add() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let email = document.getElementById("email").value;
    let newKhachHang = new KhachHang(id, name, phone, address, email);
    listKH.add(newKhachHang);
    getAll();
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("address").value = "";
    document.getElementById("email").value = "";
}

function getAll() {
    let list = listKH.getList();
    let html = ``;
    for (let i = 0; i < list.length; i++) {
        html = html + `
         <tr>
            <td>${list[i].id}</td>
            <td>${list[i].name}</td>
            <td>${list[i].phone}</td>
            <td>${list[i].address}</td>
            <td>${list[i].email}</td>
        </tr>
      `
    }
    document.getElementById("list-khachhang").innerHTML = html;
}
getAll();