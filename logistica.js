// Classe Pai (exemplo base Usuario)
class Usuario {
    constructor(id, email, senha) {
      this.id = id;
      this.email = email;
      this.senha = senha;
    }
  }
  
  // 1. Classe filha Logista (estendendo Usuario ou definindo os atributos do diagrama)
  class Logista extends Usuario {
    constructor(id, email, senha, razao_social, cnpj, idusuario) {
      super(id, email, senha); // Herda da classe pai, se aplicável
      this.razao_social = razao_social;
      this.cnpj = cnpj;
      this.idusuario = idusuario;
    }
  }
  
  