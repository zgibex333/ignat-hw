import React from 'react';
import styled from "styled-components";

type messagePropType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}


function Message({avatar, name, message, time}: messagePropType) {
    return (
        <MessageContainer>
                <Avatar src={avatar} alt="avatar-logo"/>
            <div>
                <Angle/>
                <TextContainer>
                    <p>{name}</p>
                    <p>{message}</p>
                    <p>{time}</p>
                </TextContainer>
            </div>

        </MessageContainer>
    )
}


const MessageContainer = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 1rem;
  color: #bbe4e9;
  
  > div {
    display: flex;
    align-items: flex-end;
    
  }
`

const Angle = styled.div`
  width: 20px;
  height: 20px;
  background: radial-gradient(circle at 0 0, transparent 20px, #5585b5 0);
`

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`

const TextContainer = styled.div`
  background: #5585b5;
  padding: 0.75rem;
  border-radius: 10px 10px 10px 0px;
  display: flex;
  width: 300px;
  flex-direction: column;
  
  p:first-child {
    font-weight: 700;
  }
  
  p:last-child {
    align-self: flex-end;
  }
`


export default Message
