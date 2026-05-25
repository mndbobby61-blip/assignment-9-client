import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";
import { jwt } from "better-auth/plugins";

// ক্যাশড ক্লায়েন্ট তৈরি (Vercel serverless function-এর জন্য ভালো)
let client;
if (!global._mongoClient) {
  client = new MongoClient(process.env.MONGODB_URI);
  global._mongoClient = client.connect();
}

const db = (await global._mongoClient).db("docappointDB");

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
  database: mongodbAdapter(db),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
  plugins: [jwt()],
});