<h1 align="center">
  E-lastic Case
</h1>

Case proposto pela empresa E-lastic para vaga de desenvolvedor react-native

<h2 align="left">
  Tecnologias usadas
</h2>

<h3> Mobile </h3>

React-native

<h2 align="left"> Como rodar o aplicativo em desenvolvimento: </h2>

```bash
$ MOBILE
$ na raiz do projeto:
$ npm i
$ npx react-native run-android
```

<h4>APK para teste:</h4>
https://drive.google.com/file/d/1XKtFCMcqtVW_oXE-O3_clDP2xtPwEGP1/view?usp=sharing


<h2 align="left">
  Comentários sobre o desenvolvimento do exercício:
</h2>

<h1>Quais as maiores dificuldades:</h1>

Criar a animação da barra de força;

Sincronizar a animação de entrada de dados no gráfico com a informação de máximo de força;

Pausar a animação quando clicar no botão pause;

<h1>O que não conseguiu fazer e o motivo:</h1>

Animação da barra de força - Fiz algumas tentativas para criar a animação com o Slider do react native, criando 2 ranges com a força mínima e máxima, mas não deu certo. Também tentei usar a lib https://www.npmjs.com/package/rn-range-slider com a mesma ideia de range, mas sem sucesso também;

Sincronizar a animação de entrada de dados no gráfico com a informação de máximo de força - Não achei uma forma de mostrar todos os dados que estão entrando no gráfico aparecer na informação de máximo de força(ícone do músculo) igual existe no app do E-lastic, tentei criando um setInterval e ir colocando cada dado numérico do gráfico na variável da força, mas não ficou nem parecido com o que existe no aplicativo do E-lastic. Também criei um loop nos dados do gráfico, e ir setando um número de cada vez na variável sem o setInterval, também não ficou legal.

Pausar a animação do gráfico ao clicar no botão de pausar: Não achei na lib de gráfico uma forma de pausar a animação e a entrada de dados no gráfico, mas se eu pesquisasse mais algum tempo, provavelmente eu acharia uma forma.
