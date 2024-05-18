import React, { useState } from "react";
import { Button } from "./Button";
import styles from "../css/Layout.module.css";

export const Task = ({taskName, id, onDelete, onUpdate}) => {
    //対象のタスクが編集中か否かの状態を管理
    const [isEditing, setEditing] = useState(false); 

    const [editingTaskName, setEditingTaskName] = useState("");

    const handleChangeTaskName= (e) => {
        setEditingTaskName(e.target.value);
    };

    const handleClickCancel = () => {
        setEditingTaskName(taskName);
        setEditing(false);
    };

    const handleClickUpdate = () => {
        onUpdate(id, editingTaskName);
        setEditing(false);
    };

    const handleClickEdit = () => {
        //編集前のタスク名をテキストボックスに表示させておく
        setEditingTaskName(taskName);
        setEditing(true);
    };

    const handleClickDelete = () => {
        onDelete(id);
    };

    return(
        <div className={styles.from_layout}>
            {isEditing ? (
                <>
                    <Button
                        text={"保存"}
                        onClick={handleClickUpdate}
                    />
                    <Button
                        text={"キャンセル"}
                        onClick={handleClickCancel}
                    />
                </>
            ):(
                <>
                    <Button
                        text={"編集"}
                        onClick={handleClickEdit}
                    />
                    <Button
                        text={"削除"}
                        onClick={handleClickDelete}
                    />
                </>
            )}
            {isEditing ? (
                <input
                    Name={"task_input"}
                    type="text"
                    value={editingTaskName}
                    onChange={handleChangeTaskName}
                />
                
            ):(
                <p className={"task_p"}>{taskName}</p>
            )}
        </div>
    )
}