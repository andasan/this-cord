import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import firebase from 'firebase';

import { selectUser } from "../../app/user.reducer";
import { selectChannelId, selectChannlName } from "../../app/app.reducer";
import db from "../../util/firebase";
import Chatheader from "./ChatHeader";
import "./Chat.css";
import Message from "./Message";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";

const Chat = () => {
    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannlName);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (channelId) {
            db.collection("channels")
                .doc(channelId)
                .collection("messages")
                .orderBy("timestamp", "desc")
                .onSnapshot((snapshot) => {
                    return setMessages(
                        snapshot.docs.map((doc) => {
                            return doc.data();
                        })
                    );
                });
        }
    }, [channelId]);

    const sendMessage = (e) => {
        e.preventDefault();

        db
            .collection("channels")
            .doc(channelId)
            .collection("messages")
            .add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                message: input,
                user: user,
            });

        setInput('');
    };

    return (
        <div className="chat">
            <Chatheader channel={channelName} />

            <div className="chat__messages">
                {messages.map((message) => (
                    <Message timestamp={message.timestamp} message={message.message} user={message.user} />
                ))}
            </div>

            <div className="chat__input">
                <AddCircleIcon fontSize="large" />
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={`Message #${channelName}`}
                        disabled={!channelId}
                    />
                    <button
                        onClick={sendMessage}
                        className="chat__inputButton"
                        type="submit"
                        disabled={!channelId}
                    >
                        Send Message
          </button>
                </form>

                <div className="chat__inputIcons">
                    <CardGiftcardIcon fontSize="large" />
                    <GifIcon fontSize="large" />
                    <EmojiEmotionsIcon fontSize="large" />
                </div>
            </div>
        </div>
    );
};

export default Chat;
