# ① AWS準備

+ AWSマネジメントコンソールにログインする

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/185df00f-2d8a-482a-a2a0-c0d1ca022a29" width="70%" />

<br><br>

+ AWSのマジメントコンソールを開き、リージョンを選択する
    + 本手順書では、「東京」リージョンに選択したうえで進めます。

<br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/6bbebbb5-c1ad-4e30-8e17-52fc83e0d91c" width="70%" />

<br><br>

+ 本GitHubプロジェクトファイル一式をダウンロードする
    + 「<>Code」⇒ 「Download Zip」ボタンをクリックするとダウンロードできる

<br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/fa12faa6-b5ae-499d-b383-d3c61c8e392a" width="70%" />


# ② AWS Lambdaの作成

+ マネジメントコンソールの検索部分に「Lambda」と入力・検索を行い、Lambdaサービスを選択する。

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/e92292e4-3083-4644-9ee1-b67a9c9c6e59" width="70%" />

<br><br>

+ 下記の関数を作成する

<br>
  
| 関数名 | 役割 | ランタイム設定 | 
| ---- | ---- | ---- | 
| get-task-list-function |  TODOタスク一覧をDynamoDBから取得する | Python 3.8 |
| post-task-function | TODOタスクをDynamoDBに登録する | Python 3.8 |
| put-task-function | 指定したTODOタスクの内容を変更する | Python 3.8 |
| delete-task-function | 指定したTODOタスクをDynamoDBから削除する | Python 3.8 |

<br>

## 【関数の作成の仕方】

<br>

+ 「関数の作成」ボタンを押す

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/de981108-0c58-4a9f-a9e7-5f177e31dfd7" width="70%" />

<br>

+ 「一から作成」、関数名には上記表の関数名、ランタイム設定には「Python3.8」を選択

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/bf4cb06d-dc68-4e71-a1a1-fe219bc4c2a9" width="70%" />

<br>

+ 入力後、「関数の作成」をクリック

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/0a5d283a-bbb1-4884-9105-35ba3778b90c" width="70%" />

<br>

上記手順で、関数4つ分作成する。

<br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/36209267-d737-4161-aa29-a1ff90b69f44" width="70%" />

<br>

## 【Lambdaコードの書き換え】

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/03c5f414-7da1-4ad4-8063-4d4cf71e3f62" width="70%" />

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/3480bfdb-c7bd-4da4-abeb-327e4323104b" width="70%" />

+ 本GitHubプロジェクトに置いてある「AWS/Lambda」フォルダのPythonコードに書き換える 
    + get-task-list-function関数の場合、「AWS/Lambda/get-task-list-function.py」の内容に書き換える
    + post-task-function関数の場合、「AWS/Lambda/post-task-function.py」の内容に書き換える
    + put-task-function関数の場合、「AWS/Lambda/put-task-function.py」の内容に書き換える
    + delete-task-function関数の場合、「AWS/Lambda/delete-task-function.py」の内容に書き換える

<br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/83a4538a-7e0a-44aa-a41e-96b64b39ea10" width="70%" />

<br><br>

+ コードの書き換え後、コードの保存をする
    + 「File」 ⇒ 「Save」を選択する

<br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/a74610ab-c17c-4192-a3ae-c2784120e777" width="70%" />

<br><br>

+ デプロイを行う
    + 「Deploy」ボタンを押す

<br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/98630b9a-b645-4714-9939-a70adc69e8ca" width="70%" />

<br><br>

## 【IAMの設定】

<br>

Lambdaは、DynamoDBにアクセスして、データの読み込み/書き込みを行う。

そのため、Lambdaに対して、DynamoDBへのアクセス権限を付与する。

<br>

+ Lambdaの「設定」タブ > 「一般設定」 > 「編集」ボタンをクリックする

<br>

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

<br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/2efdd326-ac45-4959-b220-7fccbd93a396" width="70%" />

<br>

+ API タイプを選択メニューでは、REST APIの「構築」をクリックする

<br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/e1308952-e153-46a6-9cd2-e7a2febaa892" width="70%" />

<br>
<br>

+ 下記の内容を入力して、「APIを作成」をクリックする
    + 「新しいAPI」を選択
    + API名: todo (何でもOK)
    + APIエンドポイントタイプ: リージョン

<br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/13dfe3cb-de4c-4929-97ae-aad0d5872e20" width="70%" />

<br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/cca1419f-889f-4f35-8fea-c6d99ce85514" width="70%" />

<br><br>
ここから、リソースパス、メソッドを作成していく。
<br>

▼完成した形
<br>
<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/6da1ccd3-7db7-4e0e-afba-a944458209a6" width="70%" />

<br>


## 【リソースの作成】

<br>

下記のリソース(パス)を作成する

<br>

| リソース名 |
| ---- |
| /task |
| /task/{id} |
| /task-list |

<br>

+ 親ディレクトリのパスを選択したうえで、「リソースを作成」をクリック
  + 「/task」を作る場合、「/」を選択したうえで、「リソースを作成」をクリック
  + 「/task/{id} 」を作る場合、「/task-list」を選択したうえで、「リソースを作成」をクリック
  + 「/task-list」を作る場合、「/」を選択したうえで、「リソースを作成」をクリック

<br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/0a3a8648-554c-4a22-8809-4282c910a4ee" width="70%" />

<br>

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

<br>


<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/7f500c56-a5b2-4a98-ba69-2817813bb7e0" width="70%" />

<br><br>
CORSにチェックを入れると、OPTIONSメソッドが作られる。
<br><br>
<br><br>

CORSのチェックを入れ忘れた場合、リソースの「CORSを有効にする」をクリックして、CORS許可の設定を行う。
<br>
※メソッドを作成した後に、「CORSを有効にする」がクリックできるようになる

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/c2fbc8f0-6f6e-4803-99b6-96a6d8071b4a" width="70%" />
<br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/00c6d650-7dc7-4bdd-8a58-dc048e951fa6" width="70%" />

<br><br>

## 【メソッドの作成】

<br>

下記のメソッドを作成する。

<br>

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

<br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/e1eaf962-3796-49f3-b704-f59457a73d93" width="70%" />

<br>

+ 下記の内容を入力・選択して、「メソッドを作成」をクリック
  + メソッドタイプ: 作成するメソッド名を選択
  + 統合タイプ: Lambda関数
  + Lambdaプロキシ統合: チェックを入れる！
  + Lambda関数: 紐づけるLambda関数名を入力 (入力すると自動でARNに変換される)

<br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/7b5fbe58-dddc-40da-8ac1-0d5ef0331564" width="70%" />

<br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/b5c73dec-c9b4-4fcf-a1e9-ff32d38649e7" width="70%" />

<br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/07918b56-37e9-44e2-8ee2-b0c6daead48b" width="70%" />

<br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/67462e32-7e08-4f89-84ea-67abc4c1d946" width="70%" />

<br>
<br>

上記の流れで、GET、POST、PUT、DELETEメソッドを作成する。

<br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/6e8132d3-76bc-4f35-ae0e-6d9c2435a76f)" width="70%" />

<br>

## 【/taskのOPTIONSメソッドの修正】

<br>

```
ブラウザの仕様で、PUTメソッドの通信の場合、プリフライトリクエストにより、通信前の検証を行なっている。
一方で、API GatewayのCORSの許可設定をすると、OPTIONSメソッドが生成され、統合レスポンスヘッダーのAccess-Contorol-Allow-Methodsに不要なメソッド(今回の場合、HEADやPATCH)が存在する。
/taskのOPTIONSメソッドのレスポンスヘッダー"Access-Contorol-Allow-Methods"に不要なメソッドが存在すると、
ブラウザ側で検証エラー(CORS違反)となり、PUTメソッドの通信が上手くいかなくなるらしい。
※ChromeとMicroEdgeで確認した結果
```

<br><br>

+ /taskのOPRIONSメソッドを選択して、統合レスポンスの編集をクリック

<br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/32f6e5f2-0ccf-4b84-8ec6-39290352353e" width="70%" />

<br>

+ ヘッダーのマッピングのAccess-Control-Allow-Methods項目欄に、下記内容に修正する

<br>

'OPTIONS,POST,GET,PUT,DELETE'

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/75bfd636-ef0d-4ab4-8a43-a187d7f1afa8" width="70%" />

+ 「保存」をクリックする

<br><br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/f5597e29-f0c8-463b-82db-5c6e39406aca" width="70%" />

<br><br>

## 【作成したAPIをデプロイする】

<br><br>



