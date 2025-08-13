# `react` + `typescript` + `vite` テンプレに`crxjs`を導入する

## 背景

1. `node.js`+`typescript`+`esbuild`の最小構成から拡張機能開発に着手

2. 機能を増やしていくうちに、素の DOM 操作が厳しくなり`React`+`Vite`を後追いで導入

3. 最後にホットリロードもほしくなったので`crxjs`の導入をしたい

※拡張機能自体はローカルの別プロジェクトで開発しているので、ここでは実装されていません。あくまで表題の技術調査を行うためのリポジトリです。

## 手順

[crxjs 公式の Installation](https://crxjs.dev/guide/installation/from-scratch/)を見ながらやってみたらあっけなくできた。メチャクチャ便利！

## 深堀り：どこまでホットリロードが効くか

拡張機能は`action`,`background`,`content_scripts`の 3 つのコンテクストから成る。それぞれのスクリプトがどのようにリロードされるか確認する。

### action

ポップアップを開きっぱなしにしてソースを更新すると、開き直すことなく反映された。通常の React アプリの開発と同じ感覚。

### background

ソースを更新するとホットリロードされる。

### content_scripts

ソースを更新しても再実行はされない。リロードすれば更新後の処理が実行される。（従来必要だった拡張機能自体の再読み込みが不要なので十分ラク）

## ディレクトリ構成

`src/contexts`配下にディレクトリを切り、それぞれのエントリーポイントを`vite.config.ts`の`build.rollupOptions`と`manifest.config.ts`で指定している。

```bash
├── README.md
├── eslint.config.js
├── manifest.config.ts
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── contexts
│   │   ├── action
│   │   │   ├── App.css
│   │   │   ├── App.tsx
│   │   │   ├── assets
│   │   │   │   └── react.svg
│   │   │   ├── index.css
│   │   │   ├── index.html
│   │   │   └── main.tsx
│   │   ├── background
│   │   │   └── main.ts
│   │   └── content-scripts
│   │       └── main.ts
│   └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── yarn.lock
```