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
          // Checa se o erro é de email duplicado
          const sqliteErr = err as any;
          if (sqliteErr.code === 'SQLITE_CONSTRAINT' && sqliteErr.message.includes('UNIQUE')) {
            return reply.code(409).send({ error: 'Email already registered (Email já cadastrado).' });
          }
          return reply.code(500).send({ error: 'Error creating user (Erro ao criar usuário)', details: err.message });
        } else {
          return reply.code(201).send({ message: 'User created successfully (Usuário criado com sucesso)', id: this.lastID });
        }
      }
    );
  });


  // Pegar todos os usuários
  app.get('/db/news/getUsers', (request: any, reply: any) => {
    db.all('SELECT * FROM users', [], (err, rows) => {
      if (err) {
        return reply.code(500).send({ error: 'Error fetching users (Erro ao buscar usuários)', details: err.message });
      }
      return reply.send(rows);
    });
  });


  // Atualizar as preferências de notícias de um usuário pelo email
  app.put('/db/news/updateUser/:email', (request: any, reply: any) => {
    const { email } = request.params;
    const { news } = request.body;
    const {name} = request.body;
    const newsToSave = Array.isArray(news) ? JSON.stringify(news) : news;

    db.run('UPDATE users SET news = ?, name = ? WHERE email = ?', [newsToSave, name, email], function (err) {
      if (err) {
        return reply.code(500).send({ error: 'Error updating user (Erro ao atualizar usuário)', details: err.message });
      }
      if (this.changes === 0) {
        return reply.code(404).send({ error: 'User not found (Usuário não encontrado)' });
      }
      return reply.send({ message: 'User updated successfully (Usuário atualizado com sucesso)' });
    });
  });

  // Deletar um usuário pelo email
  app.delete('/db/news/deleteUser/:email', (request: any, reply: any) => {
    const { email } = request.params;
    
    db.run('DELETE FROM users WHERE email = ?', [email], function (err) {
      if (err) {
        return reply.code(500).send({ error: 'Error deleting user (Erro ao deletar usuário)', details: err.message });
      }
      if (this.changes === 0) {
        return reply.code(404).send({ error: 'User not found (Usuário não encontrado)' });
      }
      return reply.send({ message: 'User deleted successfully (Usuário deletado com sucesso)' });
    });
  });
}
