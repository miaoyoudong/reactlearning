import request from '../utils/request';
import { PAGE_SIZE } from '../constants';

export function fetch({ page }) {
	console.log("in fetch");
    return request(`/api/users?_page=${page}&_limit=${PAGE_SIZE}`);
}