--this is a rough initial draft for what the database structure could look like. Obviously, our MVP would be simpler and I don't know exactly what the python_scraper team be able to gather in terms of data for the listings. I put a link to the dbdiabram.io model in the Slack channel. feel free to copy and edit it with any changes or suggestions you have; I wasn't at last Saturday's meetup so if you discussed anything regarding the db dtructure it hasn't been reflected in this commit ("db structure").
DROP DATABASE IF EXISTS "job-scraper";
CREATE DATABASE "job-scraper";
  
\cc "job-scraper";

CREATE TABLE "Seekers" (
  "id" SERIAL PRIMARY KEY,
  "username" VARCHAR NOT NULL,
  "email" VARCHAR NOT NULL,
  "full_name" VARCHAR NOT NULL,
  "current_job_title" VARCHAR,
  "location" VARCHAR NOT NULL,
  "salary_range" integer,
  "job_type" VARCHAR,
  "years_experience" integer,
  "skillset" VARCHAR NOT NULL
);

CREATE TABLE "Corporations" (
  "id" SERIAL PRIMARY KEY,
  "location" VARCHAR NOT NULL,

);

CREATE TABLE "Listings" (
  "id" SERIAL PRIMARY KEY,
  "company_name" VARCHAR NOT NULL,
  "industry" VARCHAR,
  "job_title" VARCHAR NOT NULL,
  "qualifications" VARCHAR NOT NULL,
  "posted_at" datetime DEFAULT (now()),
  "location" VARCHAR,
  "status" BOOLEAN
);

ALTER TABLE "Listings" ADD FOREIGN KEY ("id") REFERENCES "Corporations" ("id");

ALTER TABLE "Seekers" ADD FOREIGN KEY ("id") REFERENCES "Listings" ("id");

COMMENT ON COLUMN "Seekers"."location" IS 'zipcode-based, or City & State';

COMMENT ON COLUMN "Seekers"."salary_range" IS 'numeric-slider';

COMMENT ON COLUMN "Seekers"."job_type" IS 'entry-level, temp., temp-to-hire, part-time, full-time';

COMMENT ON COLUMN "Seekers"."skillset" IS 'can break into categories, or just keywords';

COMMENT ON COLUMN "Corporations"."location" IS 'zipcode-based, or City & State';

COMMENT ON COLUMN "Listings"."industry" IS 'Accounting,

Administration & Office Support,

Advertising, Arts & Media,

Banking & Financial Services,

Customer Service,

Community Services & Development,

Construction,

Consulting & Strategy,

Design & Architechture,

Education & Training,

Engineering,

Farming, Animals & Conservation,

Government & Defence,

Healthcare & Medical,

Hospitality & Tourism,

Human Resources & Recruitment,

Information & Communication Technology,

Insurance & Superannuation,

Legal,

Manufacturing, Transport & Logistics,

Marketing & Communications,

Mining, Resources & Energy,

Property & Real-Estate,

Retail & Consumer Products,

Sales,

Science & Technology,

Sport & Recreation,

Trades & Services';

COMMENT ON COLUMN "Listings"."qualifications" IS 'keywords';
