/* specialize API */
CREATE SEQUENCE specialize_seq
  MINVALUE 1
  START WITH 1
  INCREMENT BY 1
  CACHE 20;

create table specialize(
  id number(10) not null,
  icon varchar2(50) not null,
  heading varchar2(50) not null,
  description varchar2(100) not null,
  constraint specialize_pk primary key(id)
  );