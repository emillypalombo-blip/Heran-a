class Usuario {
    id;
    email;
    senha;
    constructor(id, email, senha) {
        this.id = id;
        this.email = email;
    }
    login() {
        return this.email + "está logado"
    }
}