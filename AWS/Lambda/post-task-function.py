"""post-task-function.py

"""

import logging
import json
import boto3

#ロガーの設定
logger = logging.getLogger()
logger.setLevel(logging.INFO)


def lambda_handler(event, context):

    # DynamoDB テーブル名
    dynamodb = boto3.resource('dynamodb')
    taskTable = dynamodb.Table('task-table')

    try:
        #API Gateway経由からリクエストボディを取得
        params = json.loads(event['body'])

        #各パラメータの取得
        id = params['id']  #ID
        taskName = params['taskName']  #タスク名

        #DynamoDBに書き込み
        taskTable.put_item(
                    Item={
                        "id": id,
                        "task_name": taskName,
                    }
                )
    
        return {
            "statusCode": 200,
            "headers": {
                    "Access-Control-Allow-Origin": '*',
                    "Access-Control-Allow-Methods": "POST"
                    },
        }
    #例外エラー発生
    except Exception as e:
       logger.info(e)
       return {
          "statusCode": 500,
       }

