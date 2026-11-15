-- Lets comovendermicasarapido.online save its leads with site = 'owners2' (the .org keeps 'owners').
-- Run in the AiroBase SQL Editor (port 5432 is firewalled): on the SANDBOX database first, then on each country
-- database the .online form writes to (Paraguay only, for now). Do not run on production without Omar's go-ahead.
-- Until this runs, the site still works: a lead the database refuses as 'owners2' is saved as 'owners' with
-- form_location = 'online' (app/api/lead/route.js), so it reaches Admin -> Funnels either way.

-- 1) See the check constraint's real name (expected: funnel_leads_site_check)
select conname, pg_get_constraintdef(oid)
from pg_constraint
where conrelid = 'public.funnel_leads'::regclass and contype = 'c';

-- 2) Allow the second owners site
alter table public.funnel_leads drop constraint if exists funnel_leads_site_check;
alter table public.funnel_leads
  add constraint funnel_leads_site_check check (site in ('owners', 'owners2', 'agents'));
