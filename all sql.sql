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

  /* Stats API */
  CREATE SEQUENCE stats_seq
  MINVALUE 1
  START WITH 1
  INCREMENT BY 1
  CACHE 20;

create table stats(
  id number(10) not null,
  icon varchar2(50) not null,
  heading varchar2(50) not null,
  description varchar2(100) not null,
  constraint stats_pk primary key(id)
  );

  /* Creative Process API */
  CREATE SEQUENCE creative_process_seq
  MINVALUE 1
  START WITH 1
  INCREMENT BY 1
  CACHE 20;

create table creative_process(
  id number(10) not null,
  icon varchar2(50) not null,
  badge number(10) not null,
  heading varchar2(50) not null,
  description varchar2(100) not null,
  constraint creative_process_pk primary key(id)
  );

  /* Knowldge Resume API */
  CREATE SEQUENCE knowldge_resume_seq
  MINVALUE 1
  START WITH 1
  INCREMENT BY 1
  CACHE 20;

create table knowldge_resume(
  id number(10) not null,
  icon varchar2(50) not null,
  heading varchar2(50) not null,
  description varchar2(100) not null,
  constraint knowldge_resume_pk primary key(id)
  );

  /* Contact Detail API */
  CREATE SEQUENCE contact_detail_seq
  MINVALUE 1
  START WITH 1
  INCREMENT BY 1
  CACHE 20;

create table contact_detail(
  id number(10) not null,
  name varchar2(50) not null,
  email varchar2(50) not null,
  subject varchar2(50) not null,
  phone number(10) not null,
  message varchar2(100) not null,
  constraint contact_detail_pk primary key(id)
  );

  /* Contact Medium API */
  CREATE SEQUENCE contact_medium_seq
  MINVALUE 1
  START WITH 1
  INCREMENT BY 1
  CACHE 20;

create table contact_medium(
  id number(10) not null,
  icon varchar2(50) not null,
  heading varchar2(50) not null,
  description varchar2(100) not null,
  constraint contact_meidum_pk primary key(id)
  );

