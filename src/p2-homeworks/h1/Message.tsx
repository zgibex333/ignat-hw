import React from 'react';
import styles from "./Message.module.css";

type messagePropType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}


function Message({avatar, name, message, time}: messagePropType) {
    return (
        <div className={styles.messageContainer}>
            <div className={styles.avatarContainer}>
                <img className={styles.avatarLogo} src={avatar} alt="avatar-logo"/>
            </div>

            <div className={styles.message}>
                <div className={styles.corner}></div>

                <p className={styles.nickname}>{name}</p>
                <p className="message_text">{message}</p>
                <p className={styles.timestamp}>{time}</p></div>

        </div>
    )
}


export default Message
