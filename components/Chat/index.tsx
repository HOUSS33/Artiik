import PanelMessage from "@/components/PanelMessage";
import Head from "./Head";
import { useEffect, useRef } from "react";



type Props = {
    titleHead?: React.ReactNode;
    hidePanelMessage?: boolean;
    children: React.ReactNode;
    onSend?: (message: string) => void; // function to call when sending
};



const Chat = ({ titleHead, hidePanelMessage, children, onSend }: Props) => {
    
    const scrollRef = useRef<HTMLDivElement>(null);
    const scrollToBottom = () => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    };


    useEffect(() => {
        scrollToBottom();
    }, [children]); // scroll whenever children change (new messages) & on initial mount


    return (
        <div className="chat-wrapper">

            {/* Ask your AI Beta                                                                        Share, documents, three dots Buttons */}
            <Head title={titleHead} />

            {/*Messages Section */}
            <div className={`flex flex-col gap-4.5 grow p-7.5 overflow-auto scrollbar-none max-md:gap-3 max-md:p-4 max-md:pb-8 ${ hidePanelMessage ? "" : "-mb-3 pb-10" }`} >

                {/*Answer & Question */}
                {children}
                <div ref={scrollRef} />

            </div >


            {/*Message Input Panel , Hide For Shared Convo*/}
            {!hidePanelMessage && <PanelMessage onSend={onSend} />}

        </div>
    );
};

export default Chat;
