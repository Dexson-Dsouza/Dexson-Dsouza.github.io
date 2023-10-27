import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects: any = []
  about2 = `Software Engineer with 3 years of experience .
  Expertise in Vue, Angular, React, Node JS, Javascript, Typescript, Linux, MYSQL and Postgres .
  Have good understanding of Python, Java, Scala, Spring Boot, GCP (Big Query, Dataproc, Cloud Storage) and AWS (EC2, S3)`

  about = "I'm a graduate student at State University of New York at Buffalo and looking for internships in Summer."
  resumeurl = "/assets/resume/resume.pdf"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 2+',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'NODE JS',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'JAVASCRIPT JQUERY',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'SQL , MYSQL,MONOGO, FIREBASE',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'REACT JS',
      'progress': '75%'
    },
    {
      'id': '6',
      'skill': 'PYTHON,JAVA',
      'progress': '70%'
    }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2015 - 2019',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Engineering',
      'info': `Aditya Silver Oak Institute is GTU Affiliated and ranks 7th in Gujurat
Completed B.E in Computer Engineering with 9.54 CGPA.  
Won the Best Student Award 3 times for excellent Academic records at College. 
Maintained above 9.1 spi in every semester of college academic .`,
      'institution': 'ADITYA SILVER OAK INSTITUTE OF TECHNOLOGY, AHMEDABAD'
    },
    {
      'id': '2',
      'from_to_year': '2013 - 2015',
      'education': 'Higher Secondary',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The High School was mainly focus on the bases of science, mathematics, and Chemistry
There was also a good base on physics, mathematics and chemistry.
Completed my high school with 78%.`
    },
    {
      'id': '3',
      'from_to_year': '2012 - 2013',
      'education': 'Secondary  School',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
Completed my Secondary school with 84%.`
    }
  ];
  exprienceData: any = [
    {
      id: 3,
      company: 'Healthcare Financial Inc',
      timeline: 'March 2023 to Present',
      role: 'Full Stack Developer',
      work: `Integrated and implemented Docusign APIs, empowering Member Associates (MAs) to efficiently send healthcare documents to around 10k customers every week . 
      Architected database schema in Postgres DB, 5 APIs in Node and frontend components in Vue to handle Outbound Faxes in MTrack Application . 
      Refactored 1000's of code blocks and created unit tests using Mocha and Chai and API tests with Supertest to ensure code functionality and maximize code coverage`
    },
    {
      id: 4,
      company: 'Walmart Inc',
      timeline: 'May 2022 to Aug 2022',
      role: 'Software Development Engineer Intern',
      work: `Engineered High Performance ETL pipeline using Kafka, Spark and Google Cloud Dataproc to extract changes from Cassandra Database efficiently every 30 minutes .
      Built Technical solution and scalable scripts leveraging Java to read data from 3 Kafka topics into the Google Cloud Storage `
    },
    {
      id: 5,
      company: 'Research Foundation for the State University of New York',
      timeline: 'Sept 2021 to May 2022',
      role: 'Research Aide',
      work: `Used Isomap technique to produce geodesic distances of alloy materials .
      Implemented a functionality to create relationship between elements and alloy properties .
      Generated correlations of elements with respect to Yield Strength and Ductility`

    },
    {
      id: 6,
      company: 'Infinite Computing Systems',
      timeline: 'July 2019 to July 2021',
      role: 'Software Developer',
      work: `Engaged in Full stack development of Alpha 365 product and integration with CRM application leveraging technologies such as Angular 8, Node 14, MySQL and Typescript . 
      Designed Database schema and RESTful APIs for 5 projects using Express, Node and MSSQL . 
      Introduced a new option to locate Work Orders (Bing Maps) reducing cost by 30 %`
    },

  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }
}
