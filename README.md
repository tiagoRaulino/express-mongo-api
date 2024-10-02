# API Histórico de trocas
## Execute o código:
### 1. Clone o repositório
* Crie ou escolha uma pasta na sua maquina para receber os arquivos do projeto
* Abra a pasta utilizando um terminal
* Digite o código: `git clone https://github.com/tiagoRaulino/portuno-next-radix.git` (lembre se de ter o git instalado antes de usar qualquer comando git)
  
### 2. Instale os pacotes necessários
* Em seguida digite `npm install` no seu terminal para instalar os pacotes necessários (lembre-se de ter o Node.js instalado antes usar qualquer comando npm)

### 3. Crie e conecte seu banco de dados MongoDB
* Começe criando seu banco de dados mongo caso ja não possua um; essa documentação explica como fazer isso https://www.mongodb.com/pt-br/docs/
* Depois crie um arquivo chamado .env (dotenv) e insira sua string de conexão do mongo. Exemplo: `DB_CONNECTION_STRING=mongodb+srv://<seuUsuarioDoBanco>:<suaSenhaDoBanco>@cluster0.i4wop.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

### 4. Inicie um Localhost no seu navegador
* Com os pacotes necessários instalados e o banco conectado, inicie um host local. Digite `npm run dev`
* Em seguida, acesse <http://localhost:5000/>
