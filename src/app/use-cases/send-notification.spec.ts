import { SendNotification } from './send-notification';

describe('Send notification', () => {
  test('it should be able to send notifications', async () => {
    const { notification } = await new SendNotification().execute({
      content: 'This is a notification.',
      category: 'social',
      recipientId: 'example-recipientId',
    });

    expect(notification).toBeTruthy();
  });
});
