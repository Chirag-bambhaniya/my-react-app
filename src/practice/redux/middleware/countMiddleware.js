export const countMiddleware = (store) => (next) => (action) => {

    console.log('This is count middleware');
    return next(action);

}