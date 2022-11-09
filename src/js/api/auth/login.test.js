import { login } from 'login.js';

test('login returns token', async () => {
    await login('newnewnewnew@stud.noroff.no', '12345jorgenyo');
    const token = localStorage.getItem('token');
    expect(token).toBeDefined();
    console.log(token);
    console.log(localStorage);
});
