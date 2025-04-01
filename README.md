# ① AWS準備

+ AWSマネジメントコンソールにログインする

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/185df00f-2d8a-482a-a2a0-c0d1ca022a29" width="70%" />

<br><br>

+ AWSのマジメントコンソールを開き、リージョンを選択する
    + 本手順書では、「東京」リージョンに選択したうえで進めます。

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/6bbebbb5-c1ad-4e30-8e17-52fc83e0d91c" width="70%" />

<br><br>

+ 本GitHubプロジェクトファイル一式をダウンロードする
    + 「<>Code」⇒ 「Download Zip」ボタンをクリックするとダウンロードできる

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/fa12faa6-b5ae-499d-b383-d3c61c8e392a" width="70%" />


# ② AWS Lambdaの作成

+ マネジメントコンソールの検索部分に「Lambda」と入力・検索を行い、Lambdaサービスを選択する。

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/e92292e4-3083-4644-9ee1-b67a9c9c6e59" width="70%" />

<br><br>

+ 下記の関数を作成する

<br><br>
  
| 関数名 | 役割 | ランタイム設定 | 
| ---- | ---- | ---- | 
| get-task-list-function |  TODOタスク一覧をDynamoDBから取得する | Python 3.13 |
| post-task-function | TODOタスクをDynamoDBに登録する | Python 3.13 |
| put-task-function | 指定したTODOタスクの内容を変更する | Python 3.13 |
| delete-task-function | 指定したTODOタスクをDynamoDBから削除する | Python 3.13 |

<br><br>

## 【関数の作成の仕方】

<br><br>

+ 「関数の作成」ボタンを押す

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/de981108-0c58-4a9f-a9e7-5f177e31dfd7" width="70%" />

<br><br>

+ 「一から作成」、関数名には上記表の関数名、ランタイム設定には「Python3.13」を選択

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/bf4cb06d-dc68-4e71-a1a1-fe219bc4c2a9" width="70%" />

<br><br>

+ 入力後、「関数の作成」をクリック

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/0a5d283a-bbb1-4884-9105-35ba3778b90c" width="70%" />

<br><br>

上記手順で、関数4つ分作成する。

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/36209267-d737-4161-aa29-a1ff90b69f44" width="70%" />

<br><br>

## 【Lambdaコードの書き換え】

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/03c5f414-7da1-4ad4-8063-4d4cf71e3f62" width="70%" />

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/3480bfdb-c7bd-4da4-abeb-327e4323104b" width="70%" />

+ 本GitHubプロジェクトに置いてある「AWS/Lambda」フォルダのPythonコードに書き換える 
    + get-task-list-function関数の場合、「AWS/Lambda/get-task-list-function.py」の内容に書き換える
    + post-task-function関数の場合、「AWS/Lambda/post-task-function.py」の内容に書き換える
    + put-task-function関数の場合、「AWS/Lambda/put-task-function.py」の内容に書き換える
    + delete-task-function関数の場合、「AWS/Lambda/delete-task-function.py」の内容に書き換える

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/83a4538a-7e0a-44aa-a41e-96b64b39ea10" width="70%" />

<br><br>

+ コードの書き換え後、コードの保存をする
    + 「File」 ⇒ 「Save」を選択する

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/a74610ab-c17c-4192-a3ae-c2784120e777" width="70%" />

<br><br>

+ デプロイを行う
    + 「Deploy」ボタンを押す

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/98630b9a-b645-4714-9939-a70adc69e8ca" width="70%" />

<br><br>

## 【IAMの設定】

<br><br>

Lambdaは、DynamoDBにアクセスして、データの読み込み/書き込みを行う。

そのため、Lambdaに対して、DynamoDBへのアクセス権限を付与する。

<br><br>

+ Lambdaの「設定」タブ > 「一般設定」 > 「編集」ボタンをクリックする

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/44012845-0ff9-468b-9615-09cc57a78770" width="70%" />

<br>

+ 基本設定の下部にある「IAM コンソールでxxxxxxx-function-role-xxxxxx ロールを表示」のリンクをクリックする

<br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/1cdb89f6-8d74-4c4e-b129-486031faab7b" width="70%" />

<br>

+ IAMサービスを開くと、許可ポリシーの「許可追加」 > 「ポリシーをアタッチ」を選択
    + xxxxxxx-function-role-xxxxxxロールに対して、ポリシーを追加する

<br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/e258a13b-c3c4-460f-bde4-77ee53c51f78" width="70%" />

<br>

+ その他の許可ポリシー に「DynamoDB」と検索して、「AmazonDynamoDBFullAccess」にチェックを入れて、「許可を追加」を選択
    + 本来は関数ごとに適切な権限を設定する必要がある。(DBの読み込みしか行わない関数は、読み込み専用の権限を付与するなど。)

<br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/da2acebc-d053-491f-82f3-1e0335d0f937" width="70%" />

<br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/ec56780f-3dac-4530-b8d4-7a589bc9ea8e" width="70%" />

<br>
<br>

# ③ API Gatewayの作成

<br><br>

+ マネジメントコンソールの検索部分に「API Gateway」と入力・検索を行い、API Gatewayサービスを選択する。

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/2efdd326-ac45-4959-b220-7fccbd93a396" width="70%" />

<br><br>

+ API タイプを選択メニューでは、REST APIの「構築」をクリックする

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/e1308952-e153-46a6-9cd2-e7a2febaa892" width="70%" />

<br>
<br>

+ 下記の内容を入力して、「APIを作成」をクリックする
    + 「新しいAPI」を選択
    + API名: todo (何でもOK)
    + APIエンドポイントタイプ: リージョン

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/13dfe3cb-de4c-4929-97ae-aad0d5872e20" width="70%" />

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/cca1419f-889f-4f35-8fea-c6d99ce85514" width="70%" />

<br><br>
ここから、リソースパス、メソッドを作成していく。
<br><br>

▼完成した形
<br>
<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/6da1ccd3-7db7-4e0e-afba-a944458209a6" width="70%" />

<br><br>


## 【リソースの作成】

<br><br>

下記のリソース(パス)を作成する

<br><br>

| リソース名 |
| ---- |
| /task |
| /task/{id} |
| /task-list |

<br><br>

+ 親ディレクトリのパスを選択したうえで、「リソースを作成」をクリック
  + 「/task」を作る場合、「/」を選択したうえで、「リソースを作成」をクリック
  + 「/task/{id} 」を作る場合、「/task-list」を選択したうえで、「リソースを作成」をクリック
  + 「/task-list」を作る場合、「/」を選択したうえで、「リソースを作成」をクリック

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/0a3a8648-554c-4a22-8809-4282c910a4ee" width="70%" />

<br><br>

+ リソース名を入力して、「CORS (クロスオリジンリソース共有)」にチェックを入れて、「リソースを作成」をクリックする
    + 必ず「CORS (クロスオリジンリソース共有)」にチェックを入れてください！
    + リソース名の先頭に「/」は不要

<br>
<br>

<br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/1f622802-caed-447d-85dd-d0970b506043" width="70%" />

<br>
<br>

+ 上記の手順で、3種類のリソースを作成する

<br><br>


<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/7f500c56-a5b2-4a98-ba69-2817813bb7e0" width="70%" />

<br><br>
CORSにチェックを入れると、OPTIONSメソッドが作られる。
<br><br>
<br><br>

CORSのチェックを入れ忘れた場合、リソースの「CORSを有効にする」をクリックして、CORS許可の設定を行う。
<br><br>
※メソッドを作成した後に、「CORSを有効にする」がクリックできるようになる

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/c2fbc8f0-6f6e-4803-99b6-96a6d8071b4a" width="70%" />
<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/00c6d650-7dc7-4bdd-8a58-dc048e951fa6" width="70%" />

<br><br>

## 【メソッドの作成】

<br><br>

下記のメソッドを作成する。

<br><br>

| メソッド名 | パス | 紐づけるLambda関数 |
| ---- | ---- | ---- |
| GET | /task-list | get-task-list-function |
| POST | /task | post-task-function |
| PUT |  /task | put-task-function |
| DELETE | /task/{id} | delete-task-function |

<br>
<br>

+ 作成対象のパスを選択して、「メソッドを作成」をクリック
  + GETメソッドを作る場合、「/task-list」を選択して、「メソッドを作成」をクリック

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/e1eaf962-3796-49f3-b704-f59457a73d93" width="70%" />

<br><br>

+ 下記の内容を入力・選択して、「メソッドを作成」をクリック
  + メソッドタイプ: 作成するメソッド名を選択
  + 統合タイプ: Lambda関数
  + Lambdaプロキシ統合: チェックを入れる！
  + Lambda関数: 紐づけるLambda関数名を入力 (入力すると自動でARNに変換される)

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/7b5fbe58-dddc-40da-8ac1-0d5ef0331564" width="70%" />

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/b5c73dec-c9b4-4fcf-a1e9-ff32d38649e7" width="70%" />

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/07918b56-37e9-44e2-8ee2-b0c6daead48b" width="70%" />

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/67462e32-7e08-4f89-84ea-67abc4c1d946" width="70%" />

<br>
<br>

上記の流れで、GET、POST、PUT、DELETEメソッドを作成する。

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/6e8132d3-76bc-4f35-ae0e-6d9c2435a76f)" width="70%" />

<br><br>

## 【/taskのOPTIONSメソッドの修正】

<br><br>

/taskのOPTIONSメソッドで、レスポンスヘッダー"Access-Contorol-Allow-Methods"に設定されている不要なメソッドを削除する。

<br><br>

```
ブラウザの仕様で、PUTメソッドの通信の場合、プリフライトリクエストにより、通信前の検証を行なっている。

一方で、API GatewayのCORSの許可設定をすると、OPTIONSメソッドが生成され、統合レスポンスヘッダーのAccess-Contorol-Allow-Methodsに不要なメソッド(今回の場合、HEADやPATCH)が存在する。
/taskのOPTIONSメソッドのレスポンスヘッダー"Access-Contorol-Allow-Methods"に不要なメソッドが存在すると、
ブラウザ側で検証エラー(CORS違反)となり、PUTメソッドの通信が上手くいかなくなるらしい。
※ChromeとMicroEdgeで確認した結果
```

<br><br>

+ /taskのOPRIONSメソッドを選択して、統合レスポンスの編集をクリック

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/32f6e5f2-0ccf-4b84-8ec6-39290352353e" width="70%" />

<br><br>

+ ヘッダーのマッピングのAccess-Control-Allow-Methods項目欄に、下記内容に修正する

<br><br>

```
'OPTIONS,POST,GET,PUT,DELETE'
```

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/75bfd636-ef0d-4ab4-8a43-a187d7f1afa8" width="70%" />

<br><br>

+ 「保存」をクリックする

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/f5597e29-f0c8-463b-82db-5c6e39406aca" width="70%" />

<br><br>

## 【作成したAPIをデプロイする】

<br><br>

+ 「APIをデプロイ」をクリックする

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/45b93fcc-e6bb-45dd-97e3-7fb2ce5c49e5" width="70%" />

<br><br>

+ ステージに「新しいステージ」を選択して、ステージ名を入力して、「デプロイ」をクリックする
  + 本手順ではステージ名を「production」と入力

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/96e9a0a2-8050-4e57-8ae7-34c5483f27b4" width="70%" />

<br>
<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/7d6cdc5a-b27e-4965-92a2-09458dad3bfc" width="70%" />

<br><br>

+ 左メニューのステージを選択して、ステージ上にAPIがデプロイされていることを確認する
  + ここで、APIのURLが発行される

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/e5ecf762-502c-4859-aa8e-e46d4664d8c8" width="70%" />

<br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/c5eea8b7-fb9c-4b95-9dd7-7723201763c2" width="70%" />


<br><br><br>

# ④DynamoDBの構築

<br><br>

+ マネジメントコンソールの検索部分に「DynamoDB」と入力・検索を行い、DynamoDBサービスを選択する。

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/b776939f-ddc3-49db-8328-c58f6c3f9980" width="70%" />

<br><br>

+ 「テーブルの作成」をクリックする

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/590ca91c-d4b1-44e5-bc91-7bc7ff15d2b0" width="70%" />

<br><br>

+ 下記の内容を入力する
  + テーブル名: task-table
  + パーティションキー: id 数値
  + ソートキー: 空欄
  + テーブル設定: 設定をカスタマイズ
  + テーブルクラス: DynamoDB標準

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/5860ce21-aa1c-4db7-83e0-34f3ffbdd1e7" width="70%" />

<br>
<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/271acb86-8d84-4439-b3f4-9d9cf15cd841" width="70%" />

<br>
<br>

+ 「読み込み/書き込みキャパシティーの設定」には下記の項目を入力する
  + キャパシティーモード: プロビジョンド
  + Auto Scaling(読み込みキャパシティー)　: OFF
  + プロビジョンドキャパシティーユニット(読み込みキャパシティー)　: 1
  + Auto Scaling(書き込みキャパシティー)　: OFF
  + プロビジョンドキャパシティーユニット(書き込みキャパシティー)　: 1 

<br>
<br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/6f39702f-1558-4cf0-9ae4-30cdce151bbd" width="70%" />

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/09328422-2fd1-42bd-8334-44e1b53519d9" width="70%" />

<br><br>

+ 上記以外の設定項目は変更なしで、「テーブルの作成」をクリック

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/69b775e3-b766-4fd7-b801-7709cb99a481" width="70%" />

<br><br>

+ 左のメニューの「テーブル」から「task-table」テーブルが作られていることを確認する 

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/5bffc12c-1437-41e5-90c0-17ce93ddddca" width="70%" />

<br><br>

# ⑤フロントの実装

<br><br>

フロントではReactを使用する。

<br><br>

## 【node.jsのインストール】

<br><br>

+ 下記サイトにアクセスして、偶数バージョンのnode.jsをダウンロードする。
  
※偶数バージョンのnode.jsは長期間サポートしてくれるバージョン(LTSと呼ぶ)


https://nodejs.org/ja/download/

<br><br>

+ ダウンロードしたexeファイルを実行して、「next」で進んでいき、node.jsをインストールする

<br><br>

<img src="https://github.com/ryohei-adachi/chat_app_lecture/assets/75190594/da009876-d3f5-4664-af5f-aeee071ec34f" width="70%" />

<br><br>

<img src="https://github.com/ryohei-adachi/chat_app_lecture/assets/75190594/da0361a3-1207-47ca-b4f8-cc30acb791fd" width="70%" />

<br><br>

<img src="https://github.com/ryohei-adachi/chat_app_lecture/assets/75190594/afaf0753-27f9-4c87-9081-6872d375da10" width="70%" />

<br><br>

<img src="https://github.com/ryohei-adachi/chat_app_lecture/assets/75190594/8f9433c7-e290-4009-b6d1-61bfd5ac57af" width="70%" />

<br><br>

<img src="https://github.com/ryohei-adachi/chat_app_lecture/assets/75190594/3513c2cd-56fa-4e0d-9eec-d8667f8938cb" width="70%" />

<br><br>

<img src="https://github.com/ryohei-adachi/chat_app_lecture/assets/75190594/49429347-318f-4bdf-b893-e87900dc5a17" width="70%" />

<br><br>

<img src="https://github.com/ryohei-adachi/chat_app_lecture/assets/75190594/544d2d63-b8f5-4ba6-8a47-27a0e27e34c3" width="70%" />

<br><br>

<img src="https://github.com/ryohei-adachi/chat_app_lecture/assets/75190594/cca226d5-d1cd-4597-8a5b-c89ce0541d7c" width="70%" />

<br><br>

+ コマンドプロンプトを開いて、以下コマンドを打ってnode.jsのバージョンが表示されることを確認(Windows)
+ ターミナルを開いて、以下コマンドを打ってnode.jsのバージョンが表示されることを確認(Mac)

<br><br>

```
node -v
```

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/92f2730c-894a-4af2-8977-c2f31f2f89da" width="70%" />

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/2672b5bd-c276-4c52-9734-036b12d385cb" width="70%" />

<br><br>

## 【Reactプロジェクトの作成】

<br><br>

+ デスクトップ上に作業用フォルダを作成する

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/27978b17-2762-44cd-9821-41cbbe3ecd95" width="70%" />

<br><br>

+ 再度ターミナルを開く (Windowsの人はコマンドプロンプト)

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/92f2730c-894a-4af2-8977-c2f31f2f89da" width="70%" />

<br><br>

+ ターミナル上に下記のコマンドを入力する

<br><br>

```
cd
cd Desktop/(作業用フォルダ名)
npx create-react-app (Reactプロジェクト名)
cd (Reactプロジェクト名)
```
※(Reactプロジェクト名)は好きな名前を入力

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/6f1fbb2c-a1ca-4e73-81e9-a36775e68777" width="70%" />

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/51e49b5f-9096-414c-aeaf-5ba703144afc" width="70%" />

+ さらに下記のコマンドを入力して、必要なライブラリ(プログラムの部品)をインストールする

<br><br>

```
npm install axios normalize.css
```

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/25130c90-aac2-47a8-8b8e-480a5e03f52d" width="70%" />

<br><br>

+ 作成したプロジェクトフォルダ内の「src」を本GitHubリポジトリからダウンロードした「React/src」フォルダに置き換える

▽GitHubからダウンロードしたReact/srcプロジェクト

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/f9139a61-b46b-43c9-bf54-4ef4a4578fbb" width="70%" />

<br><br>

▽作成プロジェクトの「src」フォルダをダウンロードした「React/src」フォルダに置き換える
<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/ea822153-5af5-4b8a-b675-fd3888fac6cb" width="70%" />

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/fdf5ec15-1810-43cd-a770-8f3920f73c55" width="70%" />

<br><br>

+ 置き換えた「src」を開き、「config.js」をVisual Studioで開く
  + 「config.js」を「control」 + クリック > このアプリケーションで開く > Visual Studioを選択

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/cb9cb6a8-c751-4f93-978f-e907efb89216" width="70%" />

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/a7e4fe04-6950-43ff-af57-b279877f8f48" width="70%" />

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/07afd724-1799-4ffc-9e80-9997bf9e6e55" width="70%" />

<br><br>

+ AWSのAPI Gatewayサービスを開き、各メソッドのAPIのURLを確認し、「config.js」の「https://XXXXXXXX」の箇所を書き換える

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/6c010571-1eb3-45a6-8e4e-1d937ae62707" width="70%" />

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/c12477e9-d51b-43c6-80fd-87ff84701262" width="70%" />

<br>

DELETEについては、「https://XXXXXXXX.execute-api.ap-northeast-1.amazonaws.com/production/task」というように、{id}を付与しない。

<br><br>



## 【API接続テスト】

<br><br>

この時点で、パソコンからAWSへの接続確認ができる。

<br><br>

下記のコマンドを入力して、TODOアプリを開き、動作確認を行う

<br><br>

```
cd
cd Desktop/(作業用フォルダ名)/(Reactプロジェクト名)
npm start
```

<br><br>

以下のURLにアクセスする

<br><br>

```
http://localhost:3000/
````

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/6fbd78bc-fe80-4170-a63e-fc7c609546d8" width="70%" />

<br><br>

タスクの登録、編集、削除などを行なってみる。
<br><br>
※API通信に遅れが発生して、ブラウザに結果が反映するのが遅れる可能性がある

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/9927e943-51f9-46b3-9608-3e89e5802dff" width="70%" />

<br>
<br>

## 【Reactのビルド】

<br><br>

+ 下記のコマンドを実行して、React全体をビルドする
  + ビルドとは、人間が読めるソースコードから機械(パソコン・サーバ)が実行可能な状態に変換すること

<br><br>

```
cd
cd Desktop/(作業用フォルダ名)/(Reactプロジェクト名)
npm run build
```

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/143cceea-72f1-409e-a9ae-e27f36b9d7b5" width="70%" />

<br><br>

▽ビルド完了

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/0aef5d85-a91d-4775-8e2e-ff140930548b" width="70%" />
<br><br>

+ Reactプロジェクトフォルダ内に「bin」というフォルダが作成されていることを確認する

<br>><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/629bd194-17c2-439a-9d68-254aa31b5d1f" width="70%" />

<br>
<br>

# ⑥ Webサイトの公開

<br>><br>

Amazon S3のホスティングサービスを使って、TODOアプリを公開する。

<br><br>

+ マネジメントコンソールの検索部分に「S3」と入力・検索を行い、S3サービスを選択する。

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/f12186eb-be0b-4460-8c98-ac2ab80b7d2a" width="70%" />

<br><br>

+ S3トップ画面の「バケットの作成」をクリックする

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/0fc09c94-edbb-494f-9b1f-865ec0784724" width="70%" />

<br><br>

+ 下記の項目の入力を行う
  + バケット名: (好きな名前) ※但し、世界中の全AWSユーザ間で唯一(一意)の名前にしないといけない
  + パブリックアクセスをすべてブロックのチェックを外す
  + 現在の設定により、このバケットとバケット内のオブジェクトが公開される可能性があることを承認します。にチェックを入れる

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/68f0cf77-5fdc-4f0c-b30f-13afe7707195" width="70%" />

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/f46a6745-6d91-4101-8711-b77bfd3e4586" width="70%" />

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/abed2e67-9b69-4fd3-af1e-c50863840f2a" width="70%" />

<br><br>
上記以外の項目は、変更なしで、「バケットの作成」をクリックする

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/0f5bcebb-a4cc-428c-8883-d505a1a232f2" width="70%" />

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/f62b5885-ae68-41c0-b00e-c4188d4c91ce" width="70%" />

<br><br>

+ 作成したバケットを選択して、「プロパティ」を選択する

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/e300f69a-53cb-445c-ae84-78195ed80a3d" width="70%" />

<br><br>

+ 一番下にある「静的ウェブサイトホスティング」の編集ボタンをクリックする

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/3b211eb9-8fb9-48dd-a91b-3bb2df5b2136" width="70%" />

<br><br>

+ 「静的ウェブサイトホスティングを編集」において、静的ウェブサイトホスティングを「有効」にする

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/31e09796-5917-4b20-bcfe-4ec587c09fbf" width="70%" />

<br><br>

+ インデックスドキュメントに「index.html」と入力する

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/bc49c7c5-4827-4676-87f7-9524a61d4d1c" width="70%" />

<br><br>

+ 「変更の保存」をクリックする

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/54c4c4c4-f213-487c-9c2f-457756909613" width="70%" />

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/7da1b415-dd08-4a90-9186-a5251d812e0c" width="70%" />

<br><br>

+ 作成したバケットの「アクセス許可」の設定を選択する

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/f854471f-20a2-473c-9323-4ce11da08b23" width="70%" />

<br><br>

+ 「バケットポリシー」の「編集」をクリック

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/62800372-5cef-4bae-a325-d77025d63121" width="70%" />

<br><br>

+ バケットポリシーの「ポリシー」に下記の内容を入力する
  
<br><br>

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::(バケット名)/*"
        }
    ]
}
```

<br><br>

※(バケット名)には作成したバケット名を入力する

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/c60d31ff-03b6-4f71-bde0-57802d1e34f8" width="70%" />

<br><br>

+ ポリシーの記載が完了したら、「変更の保存」をクリックする

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/c4da764c-ddd5-4a49-9b91-7127db407dfd" width="70%" />

<br><br>

+ バケットの「オブジェクト」タブを開く

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/3a6cba3f-3bb2-46f6-a3f4-5067c45d887f" width="70%" />

<br><br>

+ Reactプロジェクトをビルドして生成された「bin」フォルダ配下の全ファイルをS3にアップロードする
    +　ドラッグ&ドロップでアップロードできる

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/ed303888-be52-4f9e-9efe-cfeff9c32941" width="70%" />

<br><br>


<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/6bc9eeda-62a4-49aa-870c-e5834352ab1a" width="70%" />

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/7a0292d8-8897-4948-b5c1-851ca7ddf35b" width="70%" />

<br><br>

+ 「アップロード」をクリックする

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/de0d6d87-4a4c-41e0-a1d3-4fb9316f3b00" width="70%" />

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/6e50251e-2d96-48f6-853a-cb48b81a24e7" width="70%" />

<br><br>

+ 再びバケットの「プロパティ」タブを開き、「静的ウェブホスティング」のバケットウェブサイトエンドポイントURLを確認する

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/d0940feb-8cc5-466c-85b2-c0d0c48cd9d0" width="70%" />

<br><br>

```
http://(バケット名).s3-website-ap-northeast-1.amazonaws.com
```

<br><br>

+ エンドポイントURLを開くと、TODOアプリが開くことを確認する

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/f8325120-49f1-410f-a914-1b1752bf453b" width="70%" />

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/d84ea3d6-3210-4c27-ae56-a73fed5af01b" width="70%" />

<br><br>

以上、TODOアプリをインターネットに公開することができた。
