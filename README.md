## The React Way

[React の流儀](https://ja.reactjs.org/docs/thinking-in-react.html)を読んで学んだコンポーネントの階層構造などを意識した開発の練習

### 手順

1.  UI をコンポーネント階層に落とし込む

- 単一責任の原則 (single responsibility principle) を意識
- コンポーネントを階層構造に並べてみる

2.  React で静的なバージョンを作成する

- 最初は、データモデルを受け取って UI の描画だけを行う、ユーザーからの操作ができないというバージョンを作る
- props を通じてデータを渡す形で、自分のコンポーネントを組み上げていく
- 静的なな Version を作成する際には state は必須ではない（動的なデータデータを扱うための機能）
- コンポーネントはボトムアップでもトップダウンで作っても問題ない。大きなプロジェクトではテストを書きながら前者を、シンプルなアプリでは後者の方がら楽

3.  UI 状態を表現する必要かつ十分な state を決定する

- アプリに求められている更新可能な状態の最小構成を、最初に考えておく
- 動的に変化するもの、そうでないものを考えて props か state か判断する

4.  state をどこに配置するべきなのかを明確にする

- どのコンポーネントが state を所有するのかを明確にする
- 共通の親コンポーネントを見つけ state を与える
- 単方向データフローを意識する

5.  逆方向のデータフローを追加する

- 解読中...

### Sketch でモックアップ作成

**ドキュメントにあるモックアップを参考に、Sketch でつくる**

![ItemList](https://user-images.githubusercontent.com/10560950/61163395-a4a4c180-a548-11e9-9774-a7471ef1c0f0.png)

**フォルダ構成および階層を書き出す**

![component](https://user-images.githubusercontent.com/10560950/61163441-f77e7900-a548-11e9-8b91-97408010c949.jpeg)

###　コメント

- コードを書く前段階で考えるべきことが想像以上に多くあった。
- モックアップと JSON API のデータを元にどのようにコンポーネントに情報を持たせるか落とし込むことが大切。
- React に限らず、設計という概念を持つ必要があると学べた。
