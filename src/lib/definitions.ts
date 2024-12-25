export type Event = {
  id: number;
  name: string;
  categories: string[];
  location: string;
  date: string;
  time: string;
  isPublished: boolean;
};

export type CreateEvent = {
  // 1: event basics
  eventName: string;
  shortDescription: string;
  startsFromDate: string;
  endsOnDate: string;

  // 2: describe your event
  mainCategory: string;
  subCategories: string[];
  description: string;

  // 3: event location
  location: string;
  mapLink: string;
  address: string;

  // 4: tickets
  tickets: CreateTicket[];

  // 5: other details
  artistOrGuest: ArtistOrGuest[];

  // photos: Photos;
  coverPhoto: FileList | undefined;
  brochure: FileList | undefined;

  status: "draft" | "publish";

  // visibility: string; // private or public
};

export type MainCategory = {
  label: string;
  value: string;
};
export type SubCategory = {
  label: string;
  value: string;
};

export type CreateTicket = {
  ticketName: string; // eg: Platinum
  amount: number; // eg: 250rs OR keep it blank if it is free
  totalQuantity: number; // keep it blank if there is no limit
  allowBulkBooking: boolean;
  ticketSaleStartsFrom: Date;
  ticketSaleEndsOn: Date;
  messageToAttendee: string; // eg: The Best Tickets We Have
};

export type ArtistOrGuest = {
  name: string;
  tag: string;
  image: FileList;
};
