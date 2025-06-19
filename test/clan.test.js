const request = require('supertest');
const express = require('express');
const apiRoutes = require('../src/routers/api');

const app = express();
app.use(express.json());
app.use('/api', apiRoutes);

let clanId;

describe('🛡️ CRUD Clanes API', () => {
  it('POST /api/clanes → crea un nuevo clan', async () => {
    const res = await request(app).post('/api/clanes').send({
      name: 'Clan Test',
      territory_id: 1
    });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    clanId = res.body.id;
  });

  it('GET /api/clanes → lista clanes', async () => {
    const res = await request(app).get('/api/clanes');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('GET /api/clanes/:id → obtener clan por ID', async () => {
    const res = await request(app).get(`/api/clanes/${clanId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id', clanId);
  });

  it('PUT /api/clanes/:id → actualizar clan', async () => {
    const res = await request(app).put(`/api/clanes/${clanId}`).send({
      name: 'Clan Actualizado',
      territory_id: 1
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Clan actualizado');
  });

  it('DELETE /api/clanes/:id → eliminar clan', async () => {
    const res = await request(app).delete(`/api/clanes/${clanId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Clan eliminado');
  });
});
