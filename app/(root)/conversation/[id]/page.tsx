"use client";

import Layout from "@/components/Layout";
import Chat from "@/components/Chat";
import Question from "@/components/Question";
import Answer from "@/components/Answer";
import { useParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { fakeMessages } from "@/constant.ts";




type Message = {
  id: number;                                                                 // Defines a Message object, Helps TypeScript catch errors and ensures your messages array only contains valid message objects.
  sender: string;                                                             // role: either "user" (you) or "assistant" (AI).
  content: string;                                                             // the text content of the message
};






const WriteCopyPage = () => {


      const { id: conversationId } = useParams();                                  // conversationId – the ID of the current conversation, from the URL.
      const [messages, setMessages] = useState<Message[]>(fakeMessages);   
      

       

     
      const handleSendInConversation = async (userMessage: string) => {
        /*Logic here */
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