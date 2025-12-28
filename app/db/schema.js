import { text, serial, pgTable, numeric } from "drizzle-orm/pg-core";

export const school = pgTable('schools', {
    id: serial('id').primaryKey(),
    schoolName: text('name'),
    contact: numeric('contact'),
    address: text('address'),
    city: text('city'),
    state: text('state'),
    image_url: text('image_url'),
    email: text('email').unique()
})