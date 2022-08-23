export const API_URL = 'https://dogsapi.origamid.dev/json'

export function TOKEN_POST(body) {
    return{
        url: API_URL + '/jwt-auth/v1/token',
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        },
    };
}

export function TOKEN_VALIDATE_POST(token) { //Validar o token do usuário
    return {
        url: API_URL + '/jwt-auth/v1/token/validate',
        options: {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + token, 
            },
        },
    };
}

export function GET_USER(token) {
    return{
        url: API_URL + '/api/user',
        options: {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token,
            },
        },
    };
}

export function USER_POST(body) { //Criar um usuário
    return{
        url: API_URL + '/api/user',
        options: {
            method: 'POsT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        },
    };
}

export function PHOTO_POST(formData, token) { //Publicar uma imagem
    return{
        url: API_URL + '/api/photo',
        options: {
            method: 'POsT',
            headers: {
                Authorization: 'Bearer ' + token,
            },
            body: formData,
        },
    };
}