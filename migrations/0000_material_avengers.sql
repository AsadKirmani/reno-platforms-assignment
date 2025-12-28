CREATE TABLE "schools" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"contact" numeric,
	"address" text,
	"city" text,
	"state" text,
	"image_url" text,
	"email" text,
	CONSTRAINT "schools_email_unique" UNIQUE("email")
);
