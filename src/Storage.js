
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

    setNewArrival(data){
        localStorage.setItem('newArrival', JSON.stringify(data));
    }

    removeNewArrival(){
        sessionStorage.removeItem("newArrival")
    }

    getNewArrival(){
        return JSON.parse(localStorage.getItem('newArrival'))
    }
}

export default new Storage()