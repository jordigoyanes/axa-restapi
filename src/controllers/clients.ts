import axios from 'axios';

export const getClients = (req, res) => {
    axios.get(process.env.API_URL + "/clients", { headers: { 'Authorization': req.headers.authorization } }).then(response => {
        res.status(response.status);
        res.send(response.data);
    }).catch(err => {
        console.log(err.message)
        res.status(err.response.status);
        res.send(err.response.data);
    })
}