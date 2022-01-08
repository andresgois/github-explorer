

## Aula 01 - Criando a estrutura do projeto
#### Instalações
- yarn add react react-dom

## Aula 02 - Configurando o Babel
#### Instalações
- yarn add @babel/cli @babel/core @babel/preset-env -D
- yarn add @babel/preset-react -D
#### Configurações 
- identifica oambiente para converte da melhor maneira possível
- babel.config.js
> Export de *presets: ['@babel/preset-env', '@babel/preset-react']*

#### Gera o arquivo convertido
- yarn babel ./src/index.js --out-file dist/bundle.js

## Aula 03 - Configurando o webpack
#### Instalações
- yarn add webpack webpack-cli -D
- yarn add babel-loader -D

#### Rodar webpack
- yarn webpack
#### Configurações 
- webpack.config.js
```
const path = require('path');

module.exports = {
    // Arqquivo a ser convertido
    entry: path.resolve(__dirname, "src", "index.jsx"),
    // arquivo de saída
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    // extersões permitidas
    resolve: {
        extensions: ['.js','.jsx'],
    },
    module: {
        rules: [
            // regras para importações de arquivos
            {
                // é ou não um arquivo javascript
                test: /\.jsx$/,
                // excluir a verificação na node_modules
                exclude: /node_modules/,
                // integração entre babel e o webpack
                // faz com que o webpack entenda os arquivos do babel
                use: 'babel-loader',
            }
        ],
    }
}
```
## Aula 04 - Estrutura do ReactJS
- adicionar div root e busca a dist no index.html
- Não precida importar o React nas páginas
> Export de *presets: ['@babel/preset-env', ['@babel/preset-react',{runtime: 'automatic',}]]*

## Aula 05 - Servindo HTML estático
#### Instalações
- yarn add html-webpack-plugin -D

## Aula 06 - Webpack Dev Server
#### Instalações
- yarn add webpack-dev-server -D
- webpack.config.js
> devServer: { static: path.resolve(__dirname, "public"),  },
#### Roda apenas uma vez
- yarn webpack server

## Aula 07 - Utilizando source maps
- Mostra o exato ponto de erro
- webpack.config.js
> devtool: 'eval-source-map',

## Aula 08 - Ambiente dev e produção
- webpack.config.js
> const isDevelopment = process.env.NODE_ENV !== 'production';
- Linux e Mac
    - NODE_ENV=production yarn webpack
- Windows
    - Instalação
    - yarn add cross-env -D
#### Script para build em prod
- package.json
> "build": "cross-env NODE_ENV=production webpack"

## Aula 09 - Importando arquivos CSS
#### Instalação
- yarn add style-loader css-loader -D
- webpack.config.js
> { test: /\.css$/, exclude: /node_modules/,  use: ['style-loader','css-loader'], }

## Aula 10 - Utilizando SASS
#### Instalação
- yarn add node-sass sass-loader css-loader -D
- webpack.config.js
> { test: /\.css$/, exclude: /node_modules/,  use: ['style-loader','css-loader', 'sass-loader'], }


## Aula 15 - Fast Refresh no Webpack
- Faça as alterações no código sem que os seus estados na aplicação voltem para o zero
[Documentação](https://github.com/pmmmwh/react-refresh-webpack-plugin)
- yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh

## CHAMADAS HTTP
