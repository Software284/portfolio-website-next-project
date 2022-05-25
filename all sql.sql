/* specialize API */
CREATE SEQUENCE specialize_seq
  MINVALUE 1
  START WITH 1
  INCREMENT BY 1
  CACHE 20;

create table specialize(
  id number(10) not null,
  icon varchar2(20) not null,
  heading varchar2(15) not null,
  description varchar2(150) not null,
  constraint specialize_pk primary key(id)
  );

insert into specialize values(1,'faFile','Concepting','Concepting is the process of taking any idea, expanding on it and creating new and different versions and variations of it. This comes with the mind.');
insert into specialize values(2,'faDesktop','Visual Design','Visual design aims to improve a design’s product’s aesthetic appeal and usability with suitable images, typography, space, layout and color.');
insert into specialize values(3,'faObjectUngroup','UI/UX','User interface (UI) design is the process designers use to build interfaces in software & computerized devices,  focusing on looks or style of object.');
insert into specialize values(4,'faThumbsUp','Interactions','the direct effect that one kind of particle has on another, in particular, in inducing the emission or absorption of one particle by another.');
  
  
  /* Stats API */
  CREATE SEQUENCE stats_seq
  MINVALUE 1
  START WITH 1
  INCREMENT BY 1
  CACHE 20;

create table stats(
  id number(10) not null,
  icon varchar2(20) not null,
  heading varchar2(25) not null,
  description varchar2(10) not null,
  constraint stats_pk primary key(id)
  );
  insert into stats values(1,'faUsers','Clients','100');
  insert into stats values(2,'faAward','Award','3');
  insert into stats values(3,'faHourglassStart','Hours Worked','3500');
  insert into stats values(4,'faCodeBranch','Projects Completed','135');



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

  insert into creative_process values(1,'faFileAlt','1','Discuss The Project','A roadmap that will guide teams from creating a project plan throughout the project’s execution and closure phases is developed comprehensively during the planning stage.resources must be allotted.');
  insert into creative_process values(2,'faDesktop','6','Brainstorming ^ Concept','Brainstorming is a method of generating ideas and sharing knowledge to solve a particular commercial or technical problem, in which participants are encouraged to think without interruption in tasks.');
  insert into creative_process values(3,'faObjectUngroup','3','Interactions','From the old way of contain and deflect to a new way of engage and delight. it enhances the communication between the team member. the quality of the project development increases effectively.');
  insert into creative_process values(4,'faThumbsUp','5','UI/UX Planning','A UX/UI roadmap is a high-level overview of the plans and goals relating to a product’s user experience, user interface, and user research. Product teams use these roadmaps to success in project.');


  /* Knowldge Resume API */
  CREATE SEQUENCE knowldge_resume_seq
  MINVALUE 1
  START WITH 1
  INCREMENT BY 1
  CACHE 20;

create table knowldge_resume(
  id number(10) not null,
  icon varchar2(20) not null,
  heading varchar2(50) not null,
  description varchar2(300) not null,
  constraint knowldge_resume_pk primary key(id)
  );
  
  insert into knowldge_resume values(1,'faCircleChevronRight','2012: Programming in C','I started c programming during start of my it carrier. it helps me to develop my coding skills. i learned how to solve real world problem with c programming. c programming is a proceduarl oriented programming language. it enhance the functional programming. it is not a object oriented programming.');
  insert into knowldge_resume values(2,'faCircleChevronRight','2013: Programming in C++','Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi non error excepturi sapiente quam, vitae, atque, placeat autem nihil eos doloribus illo. Blanditiis, sunt, vitae dolorem asperiores aspernatur quos similique eius modi corrupti officiis fuga pariatur, iusto quis voluptatum architecto!');
  insert into knowldge_resume values(3,'faCircleChevronRight','2014: HTML and CSS','Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi non error excepturi sapiente quam, vitae, atque, placeat autem nihil eos doloribus illo. Blanditiis, sunt, vitae dolorem asperiores aspernatur quos similique eius modi corrupti officiis fuga pariatur, iusto quis voluptatum architecto!');
  insert into knowldge_resume values(4,'faCircleChevronRight','2015: Programming in Java','Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi non error excepturi sapiente quam, vitae, atque, placeat autem nihil eos doloribus illo. Blanditiis, sunt, vitae dolorem asperiores aspernatur quos similique eius modi corrupti officiis fuga pariatur, iusto quis voluptatum architecto!');
  insert into knowldge_resume values(5,'faCircleChevronRight','2016: Servlet and Jsp & JSTL','Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi non error excepturi sapiente quam, vitae, atque, placeat autem nihil eos doloribus illo. Blanditiis, sunt, vitae dolorem asperiores aspernatur quos similique eius modi corrupti officiis fuga pariatur, iusto quis voluptatum architecto!');
  insert into knowldge_resume values(6,'faCircleChevronRight','2017: Spring Framework','Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi non error excepturi sapiente quam, vitae, atque, placeat autem nihil eos doloribus illo. Blanditiis, sunt, vitae dolorem asperiores aspernatur quos similique eius modi corrupti officiis fuga pariatur, iusto quis voluptatum architecto!');
  insert into knowldge_resume values(7,'faCircleChevronRight','2018: Database Management System With Oracle','Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi non error excepturi sapiente quam, vitae, atque, placeat autem nihil eos doloribus illo. Blanditiis, sunt, vitae dolorem asperiores aspernatur quos similique eius modi corrupti officiis fuga pariatur, iusto quis voluptatum architecto!');
  insert into knowldge_resume values(8,'faCircleChevronRight','2019: Hibernate','Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi non error excepturi sapiente quam, vitae, atque, placeat autem nihil eos doloribus illo. Blanditiis, sunt, vitae dolorem asperiores aspernatur quos similique eius modi corrupti officiis fuga pariatur, iusto quis voluptatum architecto!');
  insert into knowldge_resume values(9,'faCircleChevronRight','2020: React Js & Web Services','Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi non error excepturi sapiente quam, vitae, atque, placeat autem nihil eos doloribus illo. Blanditiis, sunt, vitae dolorem asperiores aspernatur quos similique eius modi corrupti officiis fuga pariatur, iusto quis voluptatum architecto!');
  insert into knowldge_resume values(10,'faCircleChevronRight','2021: Microservices & Next Js','Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi non error excepturi sapiente quam, vitae, atque, placeat autem nihil eos doloribus illo. Blanditiis, sunt, vitae dolorem asperiores aspernatur quos similique eius modi corrupti officiis fuga pariatur, iusto quis voluptatum architecto!');
  insert into knowldge_resume values(11,'faCircleChevronRight','2022: Docker and Kubernates','Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi non error excepturi sapiente quam, vitae, atque, placeat autem nihil eos doloribus illo. Blanditiis, sunt, vitae dolorem asperiores aspernatur quos similique eius modi corrupti officiis fuga pariatur, iusto quis voluptatum architecto!');

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
  icon varchar2(25) not null,
  heading varchar2(15) not null,
  description varchar2(50) not null,
  constraint contact_meidum_pk primary key(id)
  );
  
  insert into contact_medium values(1,'faEnvelope','Email','maheshlamichhane048');
  insert into contact_medium values(2,'faPhone','Phone','(+977) 9818567284');
  insert into contact_medium values(3,'faAddressCard','Address','Narayansthan-8, Baglung, Nepal');

  /* Skill Progress Bar API */

   CREATE SEQUENCE skill_seq
  MINVALUE 1
  START WITH 1
  INCREMENT BY 1
  CACHE 20;

create table skill_info(
  id number(10) not null,
  title varchar2(50) not null,
  percent number(10) not null,
  constraint skill_progress_pk primary key(id)
  );


  /* Awards API */

   CREATE SEQUENCE award_seq
  MINVALUE 1
  START WITH 1
  INCREMENT BY 1
  CACHE 20;

create table award_info(
  id number(10) not null,
  icon varchar2(50) not null,
  heading varchar2(50) not null,
  description varchar2(100) not null,
  constraint awards_pk primary key(id)
  );

/* Blog API */
  CREATE SEQUENCE blog_seq
  MINVALUE 1
  START WITH 1
  INCREMENT BY 1
  CACHE 20;


create table blog_content(
  id number(10) not null,
  title varchar2(50) not null,
  image varchar2(100) not null,
  blogdate date not null,
  location varchar2(40),
  description varchar2(70),
  constraint blog_pk primary key(id)
  
  );

/* Testimonials API */
  CREATE SEQUENCE testimonials_seq
  MINVALUE 1
  START WITH 1
  INCREMENT BY 1
  CACHE 20;
  


create table testimonials(
  id number(10) not null,
  message varchar2(50) not null,
  image varchar2(100) not null,
  address varchar2(50) not null,
  constraint testimonials_pk primary key(id)
  );

  /* projects API */
    CREATE SEQUENCE projects_seq
  MINVALUE 1
  START WITH 1
  INCREMENT BY 1
  CACHE 20;

 create table projects(
    projects_id number(10) not null,
    description varchar2(100) not null,
    title varchar2(100) not null,
    constraint projects_pk primary key(projects_id)
    );

/* project image API */
CREATE SEQUENCE project_img_seq
  MINVALUE 1
  START WITH 1
  INCREMENT BY 1
  CACHE 20;
  

create table project_image(
 project_img_id number(10) not null,
 imageurl varchar2(60) not null,
 project_id number(10),
 constraint project_pk primary key(project_img_id),
 foreign key(project_id) references project(project_id)
 );

 /* project api */
   CREATE SEQUENCE project_seq
  MINVALUE 1
  START WITH 1
  INCREMENT BY 1
  CACHE 20;

 create table project(
    project_id number(10) not null,
    description varchar2(100) not null,
    title varchar2(100) not null,
    constraint projectaa_pk primary key(project_id)
    );
  

  
  



