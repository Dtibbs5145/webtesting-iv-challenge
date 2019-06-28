const Users = require('./users');
const db = require('../data/dbConfig');

describe('users.js', () => {
  beforeEach(async () => {
      await db('users').truncate();
  });
  
  describe('insert()', () => {
      it('should add the user', async () => {
          await Users.insert({ name: 'Rhett' });
          await Users.insert({ name: 'Mason' });
          await Users.insert({ name: 'Destiny' });
          await Users.insert({ name: 'Megan' });
          const users = await db('users');
          expect(users).toHaveLength(5);
      });
      it('should show a 200 code', async () => {
          const user = await Users.insert({ name: 'Daisy' });
          expect(user.name).toBe('Daisy')
      });
  });
});