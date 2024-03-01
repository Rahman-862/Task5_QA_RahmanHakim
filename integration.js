import http from 'k6/http';
import { check, sleep, group } from "k6";
const URL = 'https://reqres.in'

export default function (){
    // Scenario Test 1: Create User API
    group('API Create with valid request', function(){
        const URL_PARAMS = URL + '/api/users';
        const payload = JSON.stringify({
            name : 'morpheus', 
            job :  'leader'
        })
        const params = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        let res = http.post(URL_PARAMS, payload, params);

        check (res, {
            'response code was 201': (res) => res.status == 201,
        });
    });
    sleep(1);

    // Scenario Test 2: API Update
    group('API Update with Valid Request', function(){
        const URL_PARAMS = URL + '/api/users/2';
        const payload = JSON.stringify({
            name : 'morpheus', 
            job :  'zion resident'
        })
        const params = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        let res = http.put(URL_PARAMS, payload, params);

        check(res, {
            'response code was 200': (res) => res.status == 200,
            });  
    });
}
