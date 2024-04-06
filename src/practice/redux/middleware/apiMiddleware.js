function apiMiddleware(store){

    return function (next){
        return function (action) {
            console.log('this is api middleware component');
            return next(action);
        }
    }

}

export default apiMiddleware;