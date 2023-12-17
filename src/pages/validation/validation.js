const validation = (url,object) => {
    if(url === null){
        throw Error("url is empty!");
    }else if (object === null) {
        throw Error("object is empty!");
    }
}
export default validation;