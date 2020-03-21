declare namespace Auth {
    interface Modes {
        cli: 0;
        web: 1;
    }

    interface ConfigOptionsUsernamePassword {
        username: string;
        password: string;
    }

    interface ConfigOptionsIdSecret {
        id: string;
        secret: string;
    }

    interface LoginCallback<Result> {
        (error: Error | null, id: number, token: string, headers: Record<string, any> | undefined): Result;
    }

    type LoginScope =
        | 'repo'
        | 'repo:status'
        | 'repo_deployment'
        | 'public_repo'
        | 'repo:invite'
        | 'admin:repo_hook'
        | 'write:repo_hook'
        | 'read:repo_hook'
        | 'admin:org'
        | 'write:org'
        | 'read:org'
        | 'admin:public_key'
        | 'write:public_key'
        | 'read:public_key'
        | 'admin:org_hook'
        | 'gist'
        | 'notifications'
        | 'user'
        | 'read:user'
        | 'user:email'
        | 'user:follow'
        | 'delete_repo'
        | 'write:discussion'
        | 'read:discussion'
        | 'write:packages'
        | 'read:packages'
        | 'delete:packages'
        | 'admin:gpg_key'
        | 'write:gpg_key'
        | 'read:gpg_key'
        | 'workflow';

    interface LoginScopes {
        scopes: LoginScope[];
        note: string;
    }

    type LoginResult = string | import('request').Request;
}

interface Auth {
    modes: Auth.Modes;

    config(options: Auth.ConfigOptionsUsernamePassword): Auth;
    config(options: Auth.ConfigOptionsIdSecret): Auth;

    login<Result>(scopes: Auth.LoginScope[], callback: Auth.LoginCallback<Result>): Result | Auth.LoginResult;
    login<Result>(scopes: Auth.LoginScopes, callback: Auth.LoginCallback<Result>): Result | Auth.LoginResult;

    revoke<Result>(id: number, callback: (error: Error | null) => Result): Result;
}

export = Auth;
