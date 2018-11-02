import Vue from 'vue';
import axios from 'axios';

const client = axios.create({
    baseurl: 'http://localhost:4444',
    json: true;
});

const APIClient = {
    createGogeass(repo) {
        return this.perform('post','/gogeass',repo);
    },
    deleteGogeass(repo) {
        return this.perform('delete','/gogeass/${repo.id}');
    }

    updateGogeass(repo) {
        return this.perform('put','/gogeass/${repo.id}',repo);
    },

    getGogeasss(repo) {
        return this.perform('get','/gogeasss');
    },

    getGogeass(repo) {
        return this.perform('get','/gogeass/${repo.id}');
    },

    async perform(method,resource,data){
        let accessToken = await Vue.prototype.$auth.getAccessToken()
        return client({
            method,
            url: resource,
            data,
            headers: {
                Authorization: 'Bearer ${accessToken}'
            }
        }).then(req=> {
            return req.data
        })
    }
}
export default APIClient