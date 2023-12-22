import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://server-techno-task.vercel.app'
})

const UseAxiosPublic = () => {
    return axiosPublic;
};


export default UseAxiosPublic;