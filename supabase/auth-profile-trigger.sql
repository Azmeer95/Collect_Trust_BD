create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (
    id,
    full_name,
    phone_masked,
    demo_nid_masked,
    role
  )
  values (
    new.id,
    coalesce(
      new.raw_user_meta_data ->> 'full_name',
      'New User'
    ),
    new.raw_user_meta_data ->> 'phone_masked',
    null,
    case
      when new.raw_user_meta_data ->> 'role' = 'collector'
        then 'collector'
      else 'member'
    end
  );

  return new;
end;
$$;

drop trigger if exists on_auth_user_created
on auth.users;

create trigger on_auth_user_created
after insert on auth.users
for each row
execute procedure public.handle_new_user();