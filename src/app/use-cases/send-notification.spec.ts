import { Notification } from '../entitties/notification';
import { SendNotification } from './send-notification';

const notifications: Notification[] = [];

const notificationsRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};

describe('Send notification', () => {
  test('it should be able to send notifications', async () => {
    await new SendNotification(notificationsRepository).execute({
      content: 'This is a notification.',
      category: 'social',
      recipientId: 'example-recipientId',
    });

    expect(notifications).toHaveLength(1);
  });
});
