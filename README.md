# `react` + `typescript` + `vite` 環境に後からchromium拡張機能開発環境をマニュアル構築する

※拡張機能自体は実装されていません。あくまで表題の技術調査を行うためのリポジトリです。


## 背景

1. `node.js`+`typescript`+`esbuild`の最小構成から拡張機能開発に着手

2. 機能を増やしていくうちに、素のDOM操作が厳しくなり`React`+`Vite`を後追いで導入

3. 最後にホットリロードもほしくなったので`crxjs`の導入を試みる

## 手順

[crxjs公式のInstallation](https://crxjs.dev/guide/installation/from-scratch/)を見ながらやってみる。