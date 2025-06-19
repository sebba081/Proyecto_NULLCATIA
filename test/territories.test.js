const request = require('supertest');
const express = require('express');
const apiRoutes = require('../src/routers/api');

const app = express();
app.use(express.json());
app.use('/api', apiRoutes);

let territoryId;

describe('🌍 CRUD Territorios API', () => {
  it('POST /api/territorios → crear territorio', async () => {
    const res = await request(app).post('/api/territorios').send({
      name: 'Territorio Test',
      description: 'Zona de prueba'
    });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    territoryId = res.body.id;
  });

  it('GET /api/territorios → listar territorios', async () => {
    const res = await request(app).get('/api/territorios');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('GET /api/territorios/:id → obtener por ID', async () => {
    const res = await request(app).get(`/api/territorios/${territoryId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id', territoryId);
  });

  it('PUT /api/territorios/:id → actualizar', async () => {
    const res = await request(app).put(`/api/territorios/${territoryId}`).send({
      name: 'Territorio Actualizado',
      description: 'Modificado en test'
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Territorio actualizado');
  });

  it('DELETE /api/territorios/:id → eliminar', async () => {
    const res = await request(app).delete(`/api/territorios/${territoryId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Territorio eliminado');
  });
});
