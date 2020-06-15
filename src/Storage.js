
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

    setStatus(id,status){
        localStorage.setItem(id, JSON.stringify(status));
    }

    getStatus(id){
        return JSON.parse(localStorage.getItem(id))
    }

    setKey(id){
        localStorage.setItem("key",id);
    }

    getKey(){
        return localStorage.getItem("key");
    }

    setArray(id,val){
        localStorage.setItem(id, JSON.stringify(val));
    }

    getArray(id){
        return JSON.parse(localStorage.getItem(id))
    }
}

export default new Storage()