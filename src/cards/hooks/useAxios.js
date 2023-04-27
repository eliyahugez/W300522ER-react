import axios from "axios";

const useAxios = () => {

    axios.interceptors.request.use(data => {
        console.log('in useAxios Request Interceptor', data);
        return Promise.resolve(data);
    }, null);

    axios.interceptors.response.use(
        data => {
            console.log('in useAxios Response Interceptor', data);
            return Promise.resolve(data);
        }, 
        error => {
            console.log('in useAxios Response Interceptor', error);
            return Promise.reject(error);
        });
}

export default useAxios;