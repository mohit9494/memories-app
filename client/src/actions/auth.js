import * as api from "../api/index.js";

export const signin = (formData, navigate) => async (dispatch) => {
    try {

        // LogIn the user Successfully

        // Navigate To Home Page
        navigate('/')

    } catch (error) {
        console.log(error)
    }
}

export const signup = (formData, navigate) => async (dispatch) => {
    try {

        // Signup the user Successfully

        // Navigate To Home Page
        navigate('/')

    } catch (error) {
        console.log(error)
    }
}