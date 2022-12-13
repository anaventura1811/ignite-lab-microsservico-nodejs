import { Content } from '../content';

interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readtAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private props: NotificationProps;

  constructor(props: NotificationProps) {
    this.props = props;
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
