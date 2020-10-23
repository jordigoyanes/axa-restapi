import axios from 'axios';

export const login = async (req, res) => {
    axios.post(process.env.API_URL + "/login", req.body).then(response => {
        res.status(response.status);
        res.send(response.data);
    }).catch(err => {
        console.log(err.message)
        res.status(err.response.status);
        res.send(err.response.data);
    })
}