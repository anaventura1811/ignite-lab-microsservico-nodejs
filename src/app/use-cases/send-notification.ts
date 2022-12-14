import { Injectable } from '@nestjs/common';
import { Notification } from '../entitties/notification';
import { NotificationsRepository } from '../repositories/notifications-repository';
import { Content } from './../entitties/content';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    // persistir os dados da notificacao no banco
    this.notificationsRepository.create(notification);

    return {
      notification,
    };
  }
}
