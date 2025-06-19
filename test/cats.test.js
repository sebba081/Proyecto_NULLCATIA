const request = require('supertest');
const express = require('express');
const apiRoutes = require('../src/routers/api');

const app = express();
app.use(express.json());
app.use('/api', apiRoutes);

let gatoIdCreado = null;

describe('🐱 CRUD completo: Gatitos API', () => {

  it('POST /api/gatitos → crea un nuevo gato', async () => {
    const res = await request(app).post('/api/gatitos').send({
      name: 'Gato CRUD',
      age: 3,
      clan_id: 1
    });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    gatoIdCreado = res.body.id;
  });

  it('GET /api/gatitos → devuelve una lista de gatos', async () => {
    const res = await request(app).get('/api/gatitos');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('GET /api/gatitos/:id → obtiene un gato por ID', async () => {
    const res = await request(app).get(`/api/gatitos/${gatoIdCreado}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id', gatoIdCreado);
  });

  it('PUT /api/gatitos/:id → actualiza un gato', async () => {
    const res = await request(app).put(`/api/gatitos/${gatoIdCreado}`).send({
      name: 'Gato Actualizado',
      age: 4,
      clan_id: 1
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Gato actualizado');
  });

  it('DELETE /api/gatitos/:id → elimina un gato', async () => {
    const res = await request(app).delete(`/api/gatitos/${gatoIdCreado}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Gato eliminado');
  });

  it('GET /api/gatitos/:id → gato ya no existe', async () => {
    const res = await request(app).get(`/api/gatitos/${gatoIdCreado}`);
    expect(res.statusCode).toBe(404);
  });

});