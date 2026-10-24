# Bollo’s | Bolo no pote

Landing page da Bollo’s (doces, games e diversão), de Uberlândia, MG. É um site estático: HTML, CSS e JavaScript em um único arquivo, sem etapa de build.

## Estrutura

```
index.html      página completa
assets/logo.png logo com fundo transparente
.nojekyll       evita o processamento do Jekyll no GitHub Pages
```

## Antes de publicar

Abra o `index.html` e ajuste:

1. **WhatsApp:** procure `wa.me/5534900000000` e troque pelo número real, com 55 + DDD + número, sem espaços.
2. **Chave Pix:** procure `var PIX=""` perto do final do arquivo e coloque a chave entre as aspas.
3. **Preços e sabores:** ficam na lista `var F=[...]`, também no final do arquivo.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub (por exemplo, `bollos`) e envie estes arquivos para a raiz.
2. Vá em **Settings > Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**, selecione a branch `main` e a pasta `/ (root)`, e salve.
4. Em 1 a 2 minutos o site fica em `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

## Testar no computador

Abra o `index.html` no navegador. As fontes vêm do Google Fonts, então é preciso internet.
