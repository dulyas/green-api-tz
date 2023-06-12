import $api from "../http";
import { Notification } from "../types/types";

export default class MessageService {
    static async sendMessage(tel: string, message: string, idInstance: string, apiTokenInstance: string) {

        const chatId = `${tel}@c.us`

        $api.post(`/waInstance${idInstance}/sendMessage/${apiTokenInstance}`, {
            chatId,
            message
        })
    }

    static async getNotification(idInstance: string, apiTokenInstance: string): Promise<Notification> {
        const messages = await $api.get(`/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`)
        return messages.data
    }

    static async deleteNotification(idInstance: string, apiTokenInstance: string, receiptId: string) {
        const deleteStatus = await $api.delete(`/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`)
        // console.log(deleteStatus)
        return deleteStatus
    }

}
