# 🛍️ Easy Order

Este projeto é uma aplicação Angular que simula um sistema de pedidos, utilizando o **JSON Server** como banco de dados fake para testes locais.

---

## 🚀 Tecnologias

- [Angular](https://angular.io/)
- [PrimeNG](https://www.primefaces.org/primeng/)
- [JSON Server](https://github.com/typicode/json-server)

---

## 📁 Estrutura do Projeto

```
easy-order/
├── src/
│   ├── app/
│   │   ├── core/              # Serviços, guardas e interceptors
│   │   ├── features/          # Módulos de funcionalidades (ex: pedidos, produtos, etc.)
│   │   ├── shared/            # Componentes e diretivas compartilhadas
│   │   ├── app.component.ts   # Componente raiz
│   │   └── app.routes.ts      # Rotas principais
│   └── db.json                # Banco de dados fake (JSON Server)
└── README.md
```

---

## ⚙️ Configuração do Ambiente

### 1️⃣ Instale as dependências
```bash
npm install
```

### 2️⃣ Instale o JSON Server globalmente (se ainda não tiver)
```bash
npm install -g json-server
```

### 3️⃣ Inicie o servidor fake (banco de dados)
No diretório `src/app/features`, execute:
```bash
json-server --watch db.json --port 3000
```

Isso criará um servidor local disponível em:
```
http://localhost:3000
```

---

## 💾 Exemplo de `db.json`

```json
{
  "products": [
    { "id": 1, "name": "Camiseta", "price": 49.9 },
    { "id": 2, "name": "Calça Jeans", "price": 89.9 },
    { "id": 3, "name": "Tênis", "price": 199.9 }
  ],
  "orders": [
    { "id": 1, "productId": 1, "quantity": 2 },
    { "id": 2, "productId": 3, "quantity": 1 }
  ]
}
```

---

## 🖥️ Rodando o projeto

### Servidor Angular
```bash
ng serve
```

O app ficará disponível em:
```
http://localhost:4200
```

### Servidor JSON (Fake API)
```bash
json-server --watch db.json --port 3000
```

---

## 🔗 Exemplo de Consumo da API

```typescript
this.http.get('http://localhost:3000/products').subscribe((data) => {
  console.log(data);
});
```

---

## 🧱 Estrutura de Layout

- `HeaderComponent` → Cabeçalho principal (não aparece na tela de login)
- `SidebarComponent` → Menu lateral
- `AuthLayoutComponent` → Estrutura que agrupa header + sidebar + conteúdo

---

## 📌 Observações

- O `JSON Server` é usado apenas para simulação de dados.
- Em produção, o projeto deve consumir uma **API real**.
- Se o arquivo `db.json` não for encontrado, verifique se está na pasta correta (`src/app/features`).

---

## 👨‍💻 Autor

**Leonardo Rossi Quines**  
Desenvolvedor Web — Angular & .NET  
📧 [rossiquines@gmail.com](mailto:rossiquines@gmail.com)
