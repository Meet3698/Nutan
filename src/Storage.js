
class Storage {
    setOrder(order) {
        localStorage.setItem('order', JSON.stringify(order));
    }

    setSize(size){
        localStorage.setItem('size', JSON.stringify(size));
    }

    removeLocal() {
        sessionStorage.removeItem("token")
        sessionStorage.removeItem("email")
    }

    getOrder(){
        return JSON.parse(localStorage.getItem('order'))
    }

    getSize(){
        return JSON.parse(localStorage.getItem('size'))
    }
}

export default new Storage()