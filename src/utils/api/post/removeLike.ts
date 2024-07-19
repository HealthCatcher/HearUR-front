import axios from 'axios'

export const removeLike = async (postNo: number) => {
    return axios.delete(`http://localhost:8080/api/v1/community/post/${postNo}/like`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('jwt')}`,
        }
    }).then(response => {
        if (response.status === 204) {
            return response.data;
        } else {
            throw new Error("좋아요를 삭제하는데 문제가 생겼습니다.");
        }
    }).catch(error => {
        console.error('Error: ', error);
        return [];
    });
}