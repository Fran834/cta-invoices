alter table "public"."invoices"
  add constraint "invoices_client_id_fkey"
  foreign key ("client_id")
  references "public"."clients"
  ("id") on update restrict on delete cascade;
