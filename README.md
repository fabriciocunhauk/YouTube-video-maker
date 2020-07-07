# youtube-video-maker

video-maker
Projeto open source para fazer vídeos automatizados

Pré requisitos
Git (https://git-scm.com/)
Node (https://nodejs.org)
Instalação
Por Hebert Lima

Estou vendo que alguns devs aqui estão com problemas para rodar o projeto, talvez por que alguns não estão acompanhando a serie no YouTube e por pegarem o "bonde andando" estão pulando algumas etapas do projeto e indo direto para o node index.js, então aqui vai a transcrição do passo-a-passo (que está sendo explicado nos vídeos) detalhado de como rodar o projeto para os desavisados de primeira viagem 😜

Start
Vou partir do princípio que você caiu na playlist e é aspirantes a programação e não está familiarizados com o Git ou Node.js, então primeiro você precisa instalar o Node.js no seu pc e seguir o procedimento padrão de instalação next->next->ok, recomendo você baixar o Git e instalar na sua maquina, depois basta copiar a URL do projeto conforme abaixo:

Start

Clonando o Repositório
Com o Git e o Node.js instalado na sua maquina e a URL do projeto em mãos, cria em algum lugar do seu pc uma pasta para criarmos uma copia do repositório, dentro dela abra o cmd ou powershell e digite os comandos abaixo:

git clone https://github.com/filipedeschamps/video-maker.git
cd video-maker
npm install
Clone

Api: Algorithmia
É necessário criar a sua chave de acesso para poder testar os robôs, pra isso você precisa acessar o site do Algorithmia, aqui não tem muito segredo, basta acessar e se cadastrar, depois de logar na sua conta, na Dashboard procure no menu Api Keys e copie.

Algorithmin

vá até a pasta do projeto onde você clonou o repositório, navegue até a pasta video-maker\credentials, crie um arquivo de texto e renomeie para algorithmia.json, dentro desse arquivo você irá colocar a API que copiou do site Algorithmia na estrutura abaixo:

{
  "apiKey": "API_KEY_AQUI"
}
Api: Watson
