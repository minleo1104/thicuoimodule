class List {
    name
    listkhachhang

    constructor(nameInput) {
        this.name = nameInput;
        this.getStorage();
    }

    add(newKhachHang) {
        this.listKhachHang.push(newKhachHang);
        this.saveStorage();
    }

    getList() {
        return this.listKhachHang;
    }
    saveStorage() {
        localStorage.setItem("listkhachhang", JSON.stringify(this.listKhachHang));
    }

    getStorage() {
        let list = JSON.parse(localStorage.getItem("listkhachhang"));
        if (list == null) {
            this.listKhachHang = [];
        } else {
            this.listKhachHang = list;
        }
    }
}
