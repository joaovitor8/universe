import { FastifyInstance } from "fastify";
import sqlite3 from 'sqlite3';


export async function RouteNewsForm(app: FastifyInstance, db: sqlite3.Database) {

  // Criar um usuário
  app.post('/db/news/postUser', (request: any, reply: any) => {
    const { name, email, news } = request.body;
    const newsToSave = Array.isArray(news) ? JSON.stringify(news) : news;

    db.run('INSERT INTO users (name, email, news) VALUES (?, ?, ?)', [name, email, newsToSave],
      function (err) {
        if (err) {
          // Verifica se o erro é de email duplicado (violação UNIQUE)
          const sqliteErr = err as any; // or use sqlite3.SqliteError if available
          if (sqliteErr.code === 'SQLITE_CONSTRAINT' && sqliteErr.message.includes('UNIQUE')) {
            return reply.code(409).send({ error: 'Email já cadastrado.' });
          }
          return reply.code(500).send({ error: 'Erro ao criar usuário', details: err.message });
        } else {
          return reply.code(201).send({ message: 'Usuário criado com sucesso', id: this.lastID });
        }
      }
    );
  });


  // Pegar todos os usuários
  app.get('/db/news/getUsers', (request: any, reply: any) => {
    db.all('SELECT * FROM users', [], (err, rows) => {
      if (err) {
        return reply.code(500).send({ error: 'Erro ao buscar usuários', details: err.message });
      }
      return reply.send(rows);
    });
  });


  // Deletar um usuário pelo email
  app.delete('/db/news/deleteUser/:email', (request: any, reply: any) => {
    const { email } = request.params;
    
    db.run('DELETE FROM users WHERE email = ?', [email], function (err) {
      if (err) {
        return reply.code(500).send({ error: 'Erro ao deletar usuário', details: err.message });
      }
      if (this.changes === 0) {
        return reply.code(404).send({ error: 'Usuário não encontrado' });
      }
      return reply.send({ message: 'Usuário deletado com sucesso' });
    });
  });
}
