CREATE TABLE "Seekers" (
  "id" SERIAL PRIMARY KEY,
  "username" varchar UNIQUE NOT NULL,
  "email" varchar UNIQUE NOT NULL,
  "full_name" varchar NOT NULL,
  "current_job_title" varchar,
  "location" varchar NOT NULL,
  "salary_range" integer,
  "job_type" checkbox,
  "years_experience" integer,
  "skillset" varchar NOT NULL
);

CREATE TABLE "Corporations" (
  "id" SERIAL PRIMARY KEY,
  "location" varchar NOT NULL
);

CREATE TABLE "Listings" (
  "id" SERIAL PRIMARY KEY,
  "company_name" varchar UNIQUE NOT NULL,
  "industry" dropdown,
  "job_title" varchar NOT NULL,
  "qualifications" varchar NOT NULL,
  "posted_at" datetime DEFAULT (now()),
  "location" varchar,
  "status" varchar
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
