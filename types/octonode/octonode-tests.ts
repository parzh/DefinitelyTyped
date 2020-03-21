import { auth } from '.';

// $ExportType Modes
auth.modes;

// $ExpectError
auth.config();

// $ExpectError
auth.config({
    password: 'password',
    secret: 'secret',
});

// $ExpectType Auth
auth.config({
    username: 'username',
    password: 'password',
});

// $ExpectType Auth
auth.config({
    id: 'id',
    secret: 'secret',
});

// $ExpectError
auth.login();

// $ExpectType string | number | Request
auth.login(['read:org'], () => 42);

// $ExpectError
auth.revoke();

// $ExpectError
auth.revoke('id', () => {});

// $ExpectError
auth.revoke(42);

// $ExpectType Error | 'success'
auth.revoke(42, err => err ?? 'success');
