import React, { useState } from "react";
import { Button  } from "./Button";

export const TaskForm = ({onSave}) => {
    const [taskName, setTaskName] = useState("");

    const handleChangeTaskName = (e) => {
        console.log("handleChangeTaskName called");
        setTaskName(e.target.value);
    };

    const handleSave = () => {
        console.log("handle Save called");
        onSave(taskName);
        //登録ボタン押下後、入力した内容が消えるようにする
        setTaskName("");
    };

    return (
        <>
            <div className={"task_form"}>
                <input
                    type="text"
                    className={"tack_input"}
                    onChange={handleChangeTaskName}
                    value={taskName}
                />
                <Button
                    text={"登録"}
                    onClick={handleSave}
                />
            </div>
        </>
    )
};