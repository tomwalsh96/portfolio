# Pages of the Web App:
### portfolio
This webapp is intended to act as my digital digital resume. It will showcase me, my work and my thoughts.

It will include 3 main sections;

### Resume
Your first stop to learn about my professional journey, this is a fully digital resume complete with downloadable print version and a contact form.

### Projects
I will regularly update it with my completed projects.
Each project will describe the motivation, process and outcome.

### Blog
I plan on also including a personal blog, a tool I can use to track interesting thoughts and progress in lifelong learning.

# DevOps

### Local Dev servers
- ./backend: mvn spring-boot:run
- ./frontend: npm run start

### For deployment
- frontend and backend are dockerized
- docker-compose.yml
- using buildspec.yml and Dockerrun.aws.json for AWS CodePipline CI/CD
- code is built and pushed to elastic beanstalk