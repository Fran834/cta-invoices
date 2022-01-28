ALTER TABLE "public"."clients" ALTER COLUMN "address" TYPE Text;
alter table "public"."clients" alter column "address" drop not null;
