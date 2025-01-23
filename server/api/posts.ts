import { promises as fs } from 'fs';
import path from 'path';

const dbPath = path.resolve('db.json');

export default defineEventHandler(async (event) => {
  const method = getMethod(event);
  const body = await readBody(event);

  if (method === 'GET') {
    const data = await fs.readFile(dbPath, 'utf-8');
    const db = JSON.parse(data);
    return db.posts || [];
  }

  if (method === 'POST') {
    const data = await fs.readFile(dbPath, 'utf-8');
    const db = JSON.parse(data);
    db.posts.push(body);
    await fs.writeFile(dbPath, JSON.stringify(db, null, 2));
    return body;
  }

  return { error: 'Invalid method' };
});


