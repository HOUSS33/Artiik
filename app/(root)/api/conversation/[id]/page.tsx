"use client";

import Layout from "@/components/Layout";
import Chat from "@/components/Chat";
import Question from "@/components/Question";
import Answer from "@/components/Answer";
import { useParams } from "next/navigation";
import PanelMessage from "@/components/PanelMessage";
import { useState, useEffect, useRef } from "react";
import { fakeMessages } from "@/constant.ts";


export type Message = {
  id: number;                                                                 // Defines a Message object, Helps TypeScript catch errors and ensures your messages array only contains valid message objects.
  sender: "human" | "ai";                                                  // role: either "user" (you) or "assistant" (AI).
  content: string;                                                             // the text content of the message
};


const WriteCopyPage = () => {

    

      const { id: conversationId } = useParams();                                  // conversationId – the ID of the current conversation, from the URL.
      
      //const [messages, setMessages] = useState<Message[]>([]);                     // messages – state array that stores all messages in this conversation.
      const [messages, setMessages] = useState<Message[]>(fakeMessages);   
      const messagesEndRef = useRef<HTMLDivElement>(null);                         // messagesEndRef – reference to a dummy <div> at the bottom of the chat, used to scroll to the latest message.
    
    
      const scrollToBottom = () => {                                               // Ensures the chat scrolls down whenever new messages are added.
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });            // ?. is optional chaining in case messagesEndRef.current is null.
      };


       

      /*
      useEffect(() => {                                                            // Runs once when the component mounts (or when conversationId changes).
        const fetchMessages = async () => {                                        // Fetches all old messages from your backend for the current conversation and sets them in messages state. try/catch handles fetch errors.
          try {
            const res = await fetch(`/api/conversations/${conversationId}/messages`);
            const data = await res.json(); // assume [{role, content}, ...]
            setMessages(data);

            // If the latest message is from user and no AI response exists
            const lastMsg = data[data.length - 1];
            if (lastMsg && lastMsg.sender === "human") {
            handleSendInConversation(lastMsg.content);
            }
          } catch (err) {
            console.error("Error fetching messages:", err);
          }
        };
        fetchMessages();
      }, [conversationId]);
    
      useEffect(() => {                                                                // Runs whenever messages state changes (i.e., new message added). Whenever messages changes (new user or AI message), scroll to the bottom automatically.
        scrollToBottom();                                                              // Gives a real chat feel.
      }, [messages]);
      */
      
      const handleSendInConversation = async (userMessage: string) => {
        if (!userMessage.trim()) return;                                               // prevent sending empty messages
    
        try {
            /*
          // 1️⃣  Save user message in DB
          await fetch(`/api/conversations/${conversationId}/messages`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ role: "user", content: userMessage }),
          });

           // 2️⃣ Optimistically update UI with user message
          setMessages(prev => [...prev, { role: "user", content: userMessage }]);      // Adds the user's message immediately to the UI before saving it in DB or getting AI response. Makes the chat feel instant.
    
    
          // 3️⃣ Call GPT API
          const gptRes = await fetch("/api/gpt", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ conversationId, message: userMessage }),
          });
          const { text: aiResponse } = await gptRes.json();
    
          // 4️⃣ Save GPT response in DB
          await fetch(`/api/conversations/${conversationId}/messages`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ role: "assistant", content: aiResponse }),
          });
    
          // 5️⃣ Update UI with GPT response
          setMessages(prev => [...prev, { role: "assistant", content: aiResponse }]);*/
        } catch (err) {
          console.error("Error sending message:", err);
        }
      };



    return (
        <Layout>
            <Chat onSend={handleSendInConversation} hidePanelMessage={false}>
                
                {messages.map(msg =>
                    msg.sender === "human" ? (
                    <Question key={msg.id}>
                       <div>{msg.content}</div>
                    </Question>
                    ) : (
                    <Answer key={msg.id}>
                       <div>{msg.content}</div>
                    </Answer>
                    )
                )}

            </Chat>
        </Layout>

    );
};

export default WriteCopyPage;