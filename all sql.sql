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
  title varchar2(30) not null,
  percent number(3) not null,
  constraint skill_progress_pk primary key(id)
  );
  
  insert into skill_info values(1,'Java',90);
  insert into skill_info values(2,'Servlet & JSP',90);
  insert into skill_info values(3,'Spring framework',80);
  insert into skill_info values(4,'Oracle',60);
  insert into skill_info values(5,'Hibernate',90);
  insert into skill_info values(6,'Flutter',60);
  insert into skill_info values(7,'Dart',50);
  insert into skill_info values(8,'Html & CSS',90);
  insert into skill_info values(9,'React JS',70);
  insert into skill_info values(10,'Next JS',90);
  insert into skill_info values(11,'Microservices',90);
  insert into skill_info values(12,'Web Services',90);


  /* Awards API */

   CREATE SEQUENCE award_seq
  MINVALUE 1
  START WITH 1
  INCREMENT BY 1
  CACHE 20;

create table award_info(
  id number(10) not null,
  heading varchar2(50) not null,
  description varchar2(100) not null,
  constraint awards_pk primary key(id)
  );
  
  insert into award_info values(1,'NCIT CUP','I won NCIT cup with player of the tournament.');
  insert into award_info values(2,'IT Engineer','I recently graduates from the university as a software engineer.');
  insert into award_info values(3,'Social Activist','I recently worked on a digital nepal project.');
  insert into award_info values(4,'NMB Project','I recently worked on a digitization of NMB bank project.');

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
  location varchar2(50),
  description varchar2(1500),
  constraint blog_pk primary key(id)
  );
  
insert into blog_content values(1,'What is Java','img/testimonials/person1.jpg','31-DEC-2000','Baglung Nepal','Java is high level programming language.');
insert into blog_content values(2,'Explore Kathmandu','img/testimonials/person2.jpg',DATE '2021-10-01','Kathmandu, Nepal','Very good city');
insert into blog_content values(3,'Communication is art','img/testimonials/person3.jpg','08-JAN-2022','Washinton, USA','Every communication involves (at least) one sender, a message and a recipient. This may sound simple, but communication is actually a very complex subject.The transmission of the message from sender to recipient can be affected by a huge range of things. These include our emotions, the cultural situation, the medium used to communicate, and even our location. The complexity is why good communication skills are considered so desirable by employers around the world: accurate, effective and unambiguous communication is actually extremely hard.');
insert into blog_content values(4,'Flutter Design','img/testimonials/person4.jpg','16-MAR-2022','Munich, Germany','Flutter widgets are built using a modern framework that takes inspiration from React. The central idea is that you build your UI out of widgets. Widgets describe what their view should look like given their current configuration and state. When a widget’s state changes, the widget rebuilds its description, which the framework diffs against the previous description in order to determine the minimal changes needed in the underlying render tree to transition from one state to the next.The runApp() function takes the given Widget and makes it the root of the widget tree. In this example, the widget tree consists of two widgets, the Center widget and its child, the Text widget. The framework forces the root widget to cover the screen, which means the text “Hello, world” ends up centered on screen. The text direction needs to be specified in this instance; when the MaterialApp widget is used, this is taken care of for you, as demonstrated later.When writing an app, you’ll commonly author new widgets that are subclasses of either StatelessWidget or StatefulWidget, depending on whether your widget manages any state. A widget’s main job is to implement a build() function, which describes the widget in terms of other, lower-level widgets. The framework builds those widgets in turn until the process bottoms out in widgets that represent the underlying RenderObject, which computes and describes the geometry of the widget.');
insert into blog_content values(5,'Russia Tour','img/items/item4.png','22-FEB-2022','Kyiv, Russia','Russia is a tremendously vast nation with massive geographical extension that spans from Europe in the west to the far reaches of the east till Asia, and Arctic poles on the north. Firstly, you need to decide what places you want to cover, which any reputable travel agent like Yatra can guide you on that. That said, for most tourists, Moscow and St. Petersburg are the main attractions, and you need a week or so to see both cities.');
insert into blog_content values(6,'Paris Tower Travel','img/items/item2.png','25-OCT-2021','Paris,France','Gustave Eiffel company, that was located in Levallois Perret, very near Paris, France, also built the metal framework for another world-famous monument: the Statue of Liberty (New York, United States), designed by Auguste Bartholdi and offered to the United States as a gift from France to celebrate the 100th anniversary of the American Declaration of Independence in 1886');
insert into blog_content values(7,'Bayern Vs Frankfurt','img/items/item3.png','11-APR-2022','Frankfurt, Germany','The Bavarians kept pushing for the winner, and they finally got it in the 79th minute. Viviane Asseyi scored a long free kick from Lina Magull to put Bayern up 3-1. Then, in the dying moments of the match, Lohmann broke free after some impressive dribbling before playing Jovana Damnjanovic in behind the Frankfurt backline. The Serbian international finished her chance to seal the 4-2 victory for Bayern.');
insert into blog_content values(8,'Free Marijuana','img/items/item1.png','07-JUL-2021','Amstardam, Netherland','Amsterdam counts about 160 coffeeshops and most of them are located in the Red Light District. From psychedelic to hipster-ish but also from very local ones to more touristic places, each of Amsterdam coffeeshops has its own atmosphere. You can find some notable examples categorised at the bottom of this page.');
  
  

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

 create table project(
    projects_id number(10) not null,
    image_address varchar2(100),
    description varchar2(30) not null,
    title varchar2(20) not null,
    constraint projects_pk primary key(projects_id)
    );
    
insert into project values(1,'img/items/item1.png','Design','Great Gradients');
insert into project values(2,'img/items/item2.png','UI/UX','World Experience');
insert into project values(3,'img/items/item3.png','Photogrphy and Design','Vanishing');
insert into project values(4,'img/items/item4.png','Design','Gap INC');
insert into project values(5,'img/items/item5.png','Mobile UI Design','Face The Experience');
insert into project values(6,'img/items/item6.png','Design Concept','Bezier Curves');
insert into project values(7,'img/items/item7.png','Photogrphy','Dock Ponder');
insert into project values(8,'img/items/item8.png','Web Applications','Restaurant App');
insert into project values(9,'img/items/item9.png','Portfolio App','Portfolio');

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
    image_address varchar2(100),
    description varchar2(30) not null,
    title varchar2(20) not null,
    constraint project_pk primary key(project_id)
    );
    
    
insert into project values(1,'img/items/item1.png','Design','Great Gradients');
insert into project values(2,'img/items/item2.png','UI/UX','World Experience');
insert into project values(3,'img/items/item3.png','Photogrphy and Design','Vanishing');
insert into project values(4,'img/items/item4.png','Design','Gap INC');
insert into project values(5,'img/items/item5.png','Mobile UI Design','Face The Experience');
insert into project values(6,'img/items/item6.png','Design Concept','Bezier Curves');
insert into project values(7,'img/items/item7.png','Photogrphy','Dock Ponder');
insert into project values(8,'img/items/item8.png','Web Applications','Restaurant App');
insert into project values(9,'img/items/item9.png','Portfolio App','Portfolio');

  
  



