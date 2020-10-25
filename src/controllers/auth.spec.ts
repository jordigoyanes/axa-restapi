import * as request from 'supertest';
import app from '../index';

it('Should return bearer token', async () => {
    await request(app).post('/api/login')
        .send({
            client_id: "axa",
            client_secret: "s3cr3t"
        }).expect(200);
})