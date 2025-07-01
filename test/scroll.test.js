const request = require('supertest');
const express = require('express');
const apiRoutes = require('../src/routers/api');

const app = express();
app.use(express.json());
app.use('/api', apiRoutes);

let scrollId;

describe('📜 CRUD Pergaminos API', () => {
  it('POST /api/pergaminos → crear pergamino', async () => {
    const res = await request(app).post('/api/pergaminos').send({
      title: 'Pergamino de prueba',
      content: 'Contenido de prueba',
      clan_id: 1
    });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    scrollId = res.body.id;
  });

  it('GET /api/pergaminos/:id → obtener por ID', async () => {
    const res = await request(app).get(`/api/pergaminos/${scrollId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id', scrollId);
  });

  it('PUT /api/pergaminos/:id → actualizar', async () => {
    const res = await request(app).put(`/api/pergaminos/${scrollId}`).send({
      title: 'Pergamino actualizado',
      content: 'Nuevo contenido',
      clan_id: 1
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Pergamino actualizado');
  });

  it('DELETE /api/pergaminos/:id → eliminar', async () => {
    const res = await request(app).delete(`/api/pergaminos/${scrollId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Pergamino eliminado');
  });
});
