import { Collection, Db, MongoClient } from 'mongodb';
import { Comment } from '../types';
import { config } from 'dotenv';

config();

const uri = process.env.MONGO_URL as string;

const mongoClient = new MongoClient(uri);

const seedDb = (collection: Collection<Comment>) => {
  const comments = [
    {
      date: '2023-10-22T00:00:00.000Z',
      content: 'OMG, this is fire 🔥',
      user: {
        name: 'GenZKid123',
      },
    },
    {
      date: '2023-10-21T00:00:00.000Z',
      content: 'Yas queen! 💁‍♀️',
      user: {
        name: 'TikTokTrendsetter',
      },
    },
    {
      date: '2023-10-20T00:00:00.000Z',
      content: 'No cap, this is lit fam 🔥🧢',
      user: {
        name: 'CoolCat23',
      },
    },
    {
      date: '2023-10-19T00:00:00.000Z',
      content: 'This vibe is on point 💯',
      user: {
        name: 'ChillMaster',
      },
    },
    {
      date: '2023-10-18T00:00:00.000Z',
      content: "Spillin' the tea ☕",
      user: {
        name: 'SipSipMemes',
      },
    },
    {
      date: '2023-10-17T00:00:00.000Z',
      content: "That's a major flex 💪",
      user: {
        name: 'FlexyGenZer',
      },
    },
    {
      date: '2023-10-16T00:00:00.000Z',
      content: "It's a mood 😎",
      user: {
        name: 'MoodSwinger',
      },
    },
    {
      date: '2023-10-15T00:00:00.000Z',
      content: 'On fleek! 🙌',
      user: {
        name: 'Fashionista22',
      },
    },
    {
      date: '2023-10-14T00:00:00.000Z',
      content: "Slayin' it, queen! 👑",
      user: {
        name: 'SlayMaster',
      },
    },
    {
      date: '2023-10-13T00:00:00.000Z',
      content: 'Shooketh! 😲',
      user: {
        name: 'ShookDude',
      },
    },
    {
      date: '2023-10-12T00:00:00.000Z',
      content: 'Yeet! 🚀',
      user: {
        name: 'YeetMaster',
      },
    },
    {
      date: '2023-10-11T00:00:00.000Z',
      content: 'This is lowkey lit 🔥',
      user: {
        name: 'LowkeyCool',
      },
    },
    {
      date: '2023-10-10T00:00:00.000Z',
      content: 'Stay woke! 👁️',
      user: {
        name: 'WokeWarrior',
      },
    },
    {
      date: '2023-10-09T00:00:00.000Z',
      content: 'Vibing with the trends 🎵',
      user: {
        name: 'TrendyViber',
      },
    },
    {
      date: '2023-10-08T00:00:00.000Z',
      content: 'Living my best life 💃',
      user: {
        name: 'BestLifeLover',
      },
    },
  ];

  // You can access the comments as follows:
  console.log(comments[0]); // Accesses the first comment

  collection.insertMany(comments);
};

export const initMongo = async () => {
  try {
    await mongoClient.connect();
    const collection = mongoClient
      .db('test-db')
      .collection<Comment>('comments');

    /*     seedDb(collection);
     */
    return collection;
  } catch (error) {
    console.error(error);
  }
};
