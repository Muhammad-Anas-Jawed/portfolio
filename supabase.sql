-- Supabase > SQL Editor me paste karke Run karo
create table if not exists messages (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 100),
  email text not null check (char_length(email) between 3 and 200),
  message text not null check (char_length(message) between 1 and 2000),
  created_at timestamptz not null default now()
);

alter table messages enable row level security;

-- Visitors sirf message bhej sakte hain, padh nahi sakte.
-- Messages aap Supabase dashboard > Table Editor me dekhoge.
create policy "anyone can send a message"
  on messages for insert to anon with check (true);
