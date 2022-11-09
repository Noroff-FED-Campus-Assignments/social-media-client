import { logout } from './logout.js';

test('removes accesstoken on logout', async () => {
    await logout();
    const token = localStorage.getItem('token');
    expect(token).toBeNull();
});
