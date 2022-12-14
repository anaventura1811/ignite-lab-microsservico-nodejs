import { Replace } from './../../../helpers/Replace';
import { Content } from '../content';
import { randomUUID } from 'node:crypto';

interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readtAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private props: NotificationProps;
  private _id: string;

  constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public set content(content: Content) {
    this.props.content = content;
  }

  public get content(): Content {
    return this.props.content;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public get category(): string {
    return this.props.category;
  }

  public set recipientId(id: string) {
    this.props.recipientId = id;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set readAt(readAt: Date | null | undefined) {
    this.props.readtAt = readAt;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readtAt;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
