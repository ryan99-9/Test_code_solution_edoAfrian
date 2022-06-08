import Axios from 'axios'
const APIUser = 'https://jsonplaceholder.typicode.com/users'
export const login = (username) => {
    return (dispatch) => {
        Axios.get(`${APIUser}?username=${username}`)
            .then(res => {
                //Jika inputan salah
                if (res.data.length === 0) {
                    console.log(res.data);
                    return alert('Data tidak ada')
                }//jika inputan benar
                else {
                    console.log(res.data);
                    //Menyimpan data idUser ke local storage
                    // localStorage.setItem('idUser', res.data[0].id)
                    //Mengirim data ke userReducer
                    return dispatch({
                        type: 'LOGIN',
                        payload: res.data[0]
                    })

                }
            })
    }
}

export const errLoginfalse = () => {
    return (dispatch) => {
        return dispatch({
            type: 'ERROR_LOGIN_FALSE'
        })
    }
}



export const keepLogin = (id) => {
    return (dispatch) => {
        Axios.get(`${APIUser}/${id}`)
            .then(res => {
                return dispatch({
                    type: 'LOGIN',
                    payload: res.data
                })
            })

    }
}