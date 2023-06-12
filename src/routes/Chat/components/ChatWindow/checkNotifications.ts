import { Message } from "../../../../types/types";
import MessageService from "../../../../services/MessageService";
import getMessageText from "../../../../helpers/getMessageText";
import Store from "../../../../store/store";

export default async function checkNotifications(messages: Message[], setMessages: React.Dispatch<React.SetStateAction<Message[]>>, store: Store) {

    try {

        let response
        while (response = await MessageService.getNotification(store.idInstance, store.apiTokenInstance)) {
            const webhookBody = response.body;

            if (webhookBody.typeWebhook === 'outgoingAPIMessageReceived' || webhookBody.typeWebhook === 'incomingMessageReceived' && webhookBody?.messageData) {
                const messageText =  getMessageText(webhookBody.messageData)


                messages = [...messages, {
                    text: messageText,
                    type: webhookBody.typeWebhook === 'outgoingAPIMessageReceived' ? 'outgoing' : 'incoming',
                    id: response.receiptId
                }]

                setMessages(messages)


            }
            // setLoading(false)
            await MessageService.deleteNotification(store.idInstance, store.apiTokenInstance, response.receiptId);
        }
        
        checkNotifications(messages, setMessages, store)
    } catch (error) {
        console.log(error)
    }

}