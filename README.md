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

+ コードの保存をする
    + 「File」 ⇒ 「Save」を選択する

<br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/a74610ab-c17c-4192-a3ae-c2784120e777" width="70%" />

<br><br>

・デプロイを行う
    + 「Deploy」ボタンを押す

<br>

<img src="https://github.com/ryohei-adachi/aws_lectureaws_lecture2/assets/75190594/98630b9a-b645-4714-9939-a70adc69e8ca" width="70%" />
