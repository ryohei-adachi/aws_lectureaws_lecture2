"""delete-task-function.py

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
        #API Gateway経由からクエリパスを取得
        id = event['pathParameters']['id']
        # idを数値に変換
        id = int(id)

        #該当レコードの削除
        taskTable.delete_item(
            Key={
                'id': id
            }
        )

        return {
            "statusCode": 200,
            "headers": {
                    "Access-Control-Allow-Origin": '*',
                    "Access-Control-Allow-Methods": "DELETE"
                    },
        }

    #例外エラー発生
    except Exception as e:
       logger.info(e)
       return {
          "statusCode": 500,
       }