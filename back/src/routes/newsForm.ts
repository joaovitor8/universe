import { FastifyInstance } from "fastify"
import sqlite3 from 'sqlite3'


export async function RouteNewsForm(app: FastifyInstance, db: sqlite3.Database) {

  // Criar um usuário
  app.post('/db/news/user', async (request: any, reply: any) => {
    const { name, email, news } = request.body;
    db.run( 'INSERT INTO users (name, email, news) VALUES (?, ?, ?)', [name, email, JSON.stringify(news)],
      function (err) {
        if (err) {
          reply.code(500).send({ error: 'Erro ao criar usuário', details: err.message });
        } else {
          reply.code(201).send({ message: 'Usuário criado com sucesso', id: this.lastID });
        }
      }
    );
  })

  // Pegar todos os usuários
  app.get('/db/news/users', async (request: any, reply: any) => {
    db.all('SELECT * FROM users', [], (err, rows) => {
      if (err) {
        reply.code(500).send({ error: 'Erro ao buscar usuários', details: err.message });
      } else {
        // Converte o campo de notícias de volta para array
        const users = rows.map(user => ({
          ...user,
          news: user.news ? JSON.parse(user.news) : []
        }));
        reply.send(users);
      }
    });
  })

  // Pegar um usuário
  app.get('/db/news/users/:id', async (request: any, reply: any) => {
    const { id } = request.params;
    db.get('SELECT * FROM users WHERE id = ?', [id], (err, row) => {
      if (err) {
        reply.code(500).send({ error: 'Erro ao buscar usuário', details: err.message });
      } else if (!row) {
        reply.code(404).send({ error: 'Usuário não encontrado' });
      } else {
        row.news = row.news ? JSON.parse(row.news) : [];
        reply.send(row);
      }
    });
  })

  // Atualizar um usuário
  app.put('/db/news/users/:id', async (request: any, reply: any) => {
        const { id } = request.params;
    const { name, email, news } = request.body;
    db.run(
      'UPDATE users SET name = ?, email = ?, news = ? WHERE id = ?',
      [name, email, JSON.stringify(news), id],
      function (err) {
        if (err) {
          reply.code(500).send({ error: 'Erro ao atualizar usuário', details: err.message });
        } else if (this.changes === 0) {
          reply.code(404).send({ error: 'Usuário não encontrado' });
        } else {
          reply.send({ message: 'Usuário atualizado com sucesso' });
        }
      }
    );
  })

  // Deletar um usuário
  app.delete('/db/news/users/:id', async (request: any, reply: any) => {
    const { id } = request.params;
    db.run('DELETE FROM users WHERE id = ?', [id], function (err) {
      if (err) {
        reply.code(500).send({ error: 'Erro ao deletar usuário', details: err.message });
      } else if (this.changes === 0) {
        reply.code(404).send({ error: 'Usuário não encontrado' });
      } else {
        reply.send({ message: 'Usuário deletado com sucesso' });
      }
    });
  })

}
