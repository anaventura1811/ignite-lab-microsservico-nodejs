import { InMemoryNotificationsRepository } from './../../../test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
  test('it should be able to send notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const { notification } = await new SendNotification(
      notificationsRepository,
    ).execute({
      content: 'This is a notification.',
      category: 'social',
      recipientId: 'example-recipientId',
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
