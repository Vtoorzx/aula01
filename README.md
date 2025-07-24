
# 🏨 Deluxy Hotel - Projeto Web Front-End

Este é um projeto simples de site com sistema de login e página principal, desenvolvido com **HTML**, **CSS** e **JavaScript puro**. Ele simula o acesso a uma área de apresentação de um hotel fictício chamado **Deluxy Hotel**, onde o usuário pode visualizar os tipos de quartos e fazer uma simulação de reserva.

## 📁 Estrutura do Projeto

```
📦 deluxy-hotel/
├── login.html           # Tela de login
├── principal.html       # Página principal após login
├── style.css            # Estilos da tela de login
├── principal.css        # Estilos da página principal
├── script.js            # Script JavaScript para login
└── imagens/             # (opcional) imagens dos quartos
```

---

## 🧠 Objetivo do Projeto

Criar uma aplicação simples com as seguintes funcionalidades:

* Tela de login com autenticação básica.
* Redirecionamento para a página principal ao efetuar login.
* Interface responsiva e agradável visualmente.
* Apresentação de três tipos de quartos com botões de “Reservar”.

---

## 📄 Descrição das Páginas

### 1. `login.html` - Tela de Login

Arquivo principal de entrada do sistema.

* Contém campos de **usuário** e **senha**.
* Botão "Entrar" que chama a função JavaScript `logar()` ao ser clicado.
* Links para "Cadastrar" e "Esqueci a senha" (sem funcionalidade ativa no momento).

🔐 **Credenciais válidas:**

* **Usuário:** `admin`
* **Senha:** `123`

Se as credenciais estiverem corretas, o usuário será redirecionado para `principal.html`. Caso contrário, verá um alerta: `"perdeu mané"`.

🔗 **Script vinculado:** [`script.js`](#3-scriptjs---lógica-de-login)

🎨 **Estilo:** [`style.css`](#2-stylecss---estilização-da-tela-de-login)

---

### 2. `style.css` - Estilização da Tela de Login

Define o layout e design da tela de login:

* Fundo com gradiente suave.
* Formulário centralizado com bordas arredondadas.
* Design responsivo para dispositivos móveis.
* Estilo dos inputs de login e senha.
* Botões estilizados com hover e cores consistentes.

---

### 3. `script.js` - Lógica de Login

Contém a função JavaScript responsável pela verificação do login:

```javascript
function logar(){
    let logar = document.querySelector("#nome").value;
    let senha = document.querySelector("#senha").value;

    if ( logar === "admin" && senha === "123")  {
        window.location.href = "principal.html";
    } else {
        alert ("perdeu mané");
    }
}
```

* Captura os valores dos campos `#nome` e `#senha`.
* Se os valores forem válidos, redireciona para a página principal.
* Caso contrário, exibe alerta com mensagem de erro.

---

### 4. `principal.html` - Página Principal

Após o login, o usuário é redirecionado para essa página.

📌 O que ela contém:

* Boas-vindas e descrição do hotel.
* Cards visuais para os três tipos de quartos:

  * **Quarto Standard**
  * **Quarto Executivo**
  * **Suíte Premium**
* Cada card possui um botão “RESERVAR” (sem funcionalidade ativa ainda).

🎨 **Estilo:** [`principal.css`](#5-principalcss---estilização-da-página-principal)

---

### 5. `principal.css` - Estilização da Página Principal

Define o visual da página `principal.html`:

* Layout com container centralizado.
* Cards com imagens de fundo (é esperado que imagens como `quartostandard.jpg`, `quartoexecutivo.jpg`, `quartopremium.jpg` estejam presentes na pasta do projeto).
* Botões de reserva estilizados e posicionados nos cards.
* Tipografia suave e elementos com sombra para melhorar a leitura.

---

## ▶️ Como Executar o Projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/deluxy-hotel.git
   cd deluxy-hotel
   ```

2. **Abra o arquivo `login.html` em um navegador:**

   * Você pode dar duplo clique nele, ou:

   ```bash
   start login.html  # no Windows
   ```

3. **Faça login com:**

   * Usuário: `admin`
   * Senha: `123`

---

## 📝 Melhorias Futuras (Ideias)

* Conectar o sistema a um **backend real** com banco de dados.
* Implementar sistema de **cadastro de usuários**.
* Criar página de **reserva funcional**.
* Adicionar autenticação com tokens (JWT, sessions).
* Tornar os botões de “RESERVAR” realmente funcionais.
* Criar páginas específicas para cada tipo de quarto.

---

## 📸 Imagens Recomendadas

Certifique-se de adicionar imagens com os seguintes nomes na mesma pasta do projeto:

```
📷 quartoexecutivo.jpg
📷 quartostandard.jpg
📷 quartopremium.jpg
```

Essas imagens serão usadas como plano de fundo dos cards dos quartos.

---

## 📌 Observações Técnicas

* O botão "Entrar" em `login.html` possui um link dentro dele que aponta para `principal.html`. Isso é redundante pois o JavaScript já redireciona. O ideal seria deixar o botão apenas com o `onclick="logar()"`.
* A autenticação é feita totalmente no lado do cliente (inseguro em projetos reais).
* Código HTML tem algumas tags `</article>` repetidas ou desnecessárias (pode ser ajustado futuramente).



## 🧑‍💻 Autor

Desenvolvido por **\[Victor Araújo]**
Projeto educativo para prática de front-end com HTML, CSS e JavaScript.




