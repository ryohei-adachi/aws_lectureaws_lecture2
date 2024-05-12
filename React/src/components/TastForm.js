import React, { useState } from "react";
import { Button  } from "./Button";

export const TaskForm = ({onSave}) => {
    const [content, setContent] = useState("");

    const handleChangeContent = (e) => {
        console.log("handleChangeContent called");
        setContent(e.target.value);
    };

    const handleSave = () => {
        console.log("handle Save called");
        onSave(content);
        //登録ボタン押下後、入力した内容が消えるようにする
        setContent("");
    };

    return (
        <>
            <div className={"task_form"}>
                <input
                    type="text"
                    className={"tack_input"}
                    onChange={handleChangeContent}
                    value={content}
                />
                <Button
                    text={"登録"}
                    onClick={handleSave}
                />
            </div>
        </>
    )
};