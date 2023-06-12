import { MessageData } from "../types/types";

export default function getMessageText(messageData: MessageData): string {
    
    if (messageData.typeMessage === 'textMessage') {
        return messageData.textMessageData.textMessage
    }
    if (messageData.typeMessage === 'extendedTextMessage') return messageData.extendedTextMessageData
    ?.text ?? ''
    return ''
}