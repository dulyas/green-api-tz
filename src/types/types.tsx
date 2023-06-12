export interface Notification {
    body: WebHookBody,
    receiptId: string
}


export interface WebHookBody {
    messageData: MessageData
    typeWebhook: 'outgoingAPIMessageReceived' | 'incomingMessageReceived'
}

export type MessageData = TextMessageData |  ExtendedMessageData

export type TextMessageData = {
    typeMessage: 'textMessage'
    textMessageData: {
        textMessage: string
    }
}

export type ExtendedMessageData = {
    typeMessage: 'extendedTextMessage',
    extendedTextMessageData: {
        text: string
        description: string
        title: string
        previewType: string
        jpegThumbnail: string
    }
}

export interface Message {
    id: string
    text: string
    type: 'outgoing' | 'incoming'
}