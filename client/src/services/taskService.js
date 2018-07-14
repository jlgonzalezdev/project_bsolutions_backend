
import axios from 'axios'

var TaskService = {
    getAll: () => {
        var url = '/tasks/all';
        return axios.get(url).then((response) => {
            return response;
        });
    },
    insert: (item) => {
        var url =  '/tasks/insert';
        return axios.post(url, item).then((response) => {
            return response;
        });
    },
    delete: (item) => {
        var url =  '/tasks/delete/' +item._id ;
        return axios.delete(url).then((response) => {
            return response;
        });
    },
    update: (item) => {
        var url =  '/tasks/update';
        return axios.put(url, item).then((response) => {
            return response;
        });
    }
}


export default TaskService;