"""get-task-list-function.py

"""
import psycopg2
import time
import datetime
import logging
import sys
import os
import json
import boto3

#ロガーの設定
logger = logging.getLogger()
logger.setLevel(logging.INFO)


def lambda_handler(event, context):
    # DynamoDB テーブル名
    taskTable = 'task-table'

    #API Gateway経由からクエリパスを取得
    id = event['pathParameters']['id']

    # AWS SDKを使用してDynamoDBクライアントを作成
    dynamodb = boto3.client('dynamodb')

    try:
        # DynamoDBから最新データを取得（ソートキーを降順でソート）
        server_status_response = dynamodb.query(
            TableName=taskTable ,
            KeyConditionExpression="id = :id",
            ExpressionAttributeValues={":id": {"N": id} },
            ScanIndexForward=False,  # ソートキーを降順でソート
        ).get('Items', [])[:1]   # 1レコードのみ取得
        print(server_status_response)


        return {
                "statusCode": 200,
                "headers": {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": '*',
                    "Access-Control-Allow-Methods": "GET"
                    },
                "body": json.dumps({
                "message": None,
                }),
            }

    #例外エラー発生
    except psycopg2.Error as e:
        logger.info("Database Error: "+ e)
        print(e)
        return {
            "statusCode": 500,
        }