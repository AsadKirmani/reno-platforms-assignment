"use server";
import { db } from "./db/drizzle";
import { school } from "./db/schema";

export const getData = async () => {
    const data = await db.select().from(school)
    return data
}

export const addSchool = async (schoolName, contact, address, city, state, image_url, email) => {

    await db.insert(school).values({
        schoolName, contact, address, city, state, image_url, email
    })
}