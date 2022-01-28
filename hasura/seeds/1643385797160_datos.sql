SET check_function_bodies = false;
INSERT INTO public.clients (id, name, vat, address) VALUES (2, 'Francisco Javier', '75110036V', 'C/ Betania');
INSERT INTO public.invoices (id, number, date, client_id, client_name, client_vat, base, vat, total) VALUES (1, '1-000001', '2022-01-28', 2, 'Francisco Javier', '75110036V', '$100.00', '$21.00', '$121.00');
INSERT INTO public.users (id, name) VALUES (1, 'Fran');
INSERT INTO public.users (id, name) VALUES (3, 'Manu');
SELECT pg_catalog.setval('public.clients_id_seq', 2, true);
SELECT pg_catalog.setval('public.invoices_id_seq', 1, true);
SELECT pg_catalog.setval('public.users_id_seq', 3, true);
