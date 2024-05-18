"""get-task-list-function.py

"""

import logging
import json
import boto3

#ロガーの設定
logger = logging.getLogger()
logger.setLevel(logging.INFO)


def lambda_handler(event, context):
    # DynamoDB テーブル名
    taskTable = 'task-table'

    # AWS SDKを使用してDynamoDBクライアントを作成
    dynamodb = boto3.client('dynamodb')

    try:
        # DynamoDBから全データを取得
        taskTableResponse = dynamodb.scan(
            TableName=taskTable ,
        ).get('Items', [])
        
        print(taskTableResponse)

        if len(taskTableResponse) > 0:

            # レスポンスを適切な形式に変換
            tasks = [
                {
                    'id': int(item['id']['N']),
                    'taskName': item['task_name']['S']
                }
                for item in taskTableResponse
            ]

            return {
                "statusCode": 200,
                "headers": {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": '*',
                    "Access-Control-Allow-Methods": "GET"
                    },
                "body": json.dumps({
                "tasks": tasks,
                }),
            }
        

    #例外エラー発生
    except Exception as e:
       logger.info(e)
       return {
          "statusCode": 500,
       }