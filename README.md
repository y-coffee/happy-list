サイト名
====

うれしかったリスト

概要
===

![ureshii-list-firstview](https://user-images.githubusercontent.com/68333078/92333410-4037b080-f0c0-11ea-9900-9a46ef2cfaa7.jpg)

Vue.jsで制作したログイン認証付きWebアプリケーションです。このアプリケーションでは、ユーザーがうれしいと思ったことをポストし他のメンバーとそれを反映・共有することができます。PC・スマートフォン・タブレットのレスポンシブ対応。

## テストユーザー情報

- テストユーザーメールアドレス: list-tester@example.com

- テストユーザーパスワード: tester8888

サイトURL
===
サイトはこちらからどうぞ:[リンク](https://happy-list.netlify.app/login)

※ログインページが開かれるので、上記のテストユーザー情報を入力して下さい。

使用技術一覧(言語・ライブラリ・ツール)
===

- Vue.js 2.6.11

- Vue Router 3.5.1

- Vuex 3.6.2

- axios 0.21.1

- Firebase 8.3.0

  - Authentication/Firestore

- Adobe Photoshop(画像の編集加工)

## Vue.js

入力された情報をFirestoreへ保存する機能のための「うれしいを追加する」ボタンとそこに保存された情報を閲覧する機能のための「みんなのうれしいを見る」ボタンにv-on、登録されたデータをリスト表示するためにv-forといったようにVue.jsが持つ各種ディレクティブを使用しています。CSSやJavaScriptメソッドのレスポンシブ対応はプラグインを使わずコーディングしています。

※Firebaseに関するデータはenvファイル内で環境変数にしています。

機能一覧
===

- ページ遷移機能(Vue Router)

- ユーザー登録/ログイン認証機能(FirebaseのAuthenticationを利用)

- ユーザー情報の保持機能(ログアウトされない限りページが閉じられてもログイン状態が保持されます/async/await及びdispatchを利用した非同期処理/Vuex)

- 投稿機能(FirebaseのFirestoreをデータベースに利用)

- 表示機能(Firestoreから取得したデータの表示)
