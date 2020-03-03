import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  StudentData = [{
    "Name": "Jeegar Bamaliya",
    "Email": "jbamaliya@rku.ac.in",
    "City": "Diu",
    "img":"https://img.icons8.com/officel/2x/user.png"
  },
  {
    "Name": "Dipak Bavaliya",
    "Email": "dbavaliya@rku.ac.in",
    "City": "rajkot",
    "img":"https://img.icons8.com/officel/2x/user.png"
  },
  {
    "Name": "Vishal Das",
    "Email": "vdas@rku.ac.in",
    "City": "rajkot",
    "img":"https://img.icons8.com/officel/2x/user.png"
  },
  {
    "Name": "Kaushik Sonagra",
    "Email": "ksonagra@rku.ac.in",
    "City": "jamnager",
    "img":"https://img.icons8.com/officel/2x/user.png"
  },
  {
    "Name": "keval sorathiya",
    "Email": "ksorathiya@rku.ac.in",
    "City": "amreli",
    "img":"https://img.icons8.com/officel/2x/user.png"
  },
  {
    "Name": "Nikunj Sorathiya",
    "Email": "nsorathiya@rku.ac.in",
    "City": "amreli",
    "img":"https://img.icons8.com/officel/2x/user.png"
  },
  {
    "Name": "Vikas Gajera",
    "Email": "vgajera@rku.ac.in",
    "City": "sardhar",
    "img":"https://img.icons8.com/officel/2x/user.png"
  },
  {
    "Name": "Maulik Jyani",
    "Email": "mjyani@rku.ac.in",
    "City": "savarkundla",
    "img":"https://img.icons8.com/officel/2x/user.png"
  },
  {
    "Name": "Amit Kachhadiya",
    "Email": "akachhadiya@rku.ac.in",
    "City": "amreli",
    "img":"https://img.icons8.com/officel/2x/user.png"
  },
  {
    "Name": "Harsh Vekariya",
    "Email": "hvekariya@rku.ac.in",
    "City": "jetpur",
    "img":"https://img.icons8.com/officel/2x/user.png"
  },
  {
    "Name": "Kaushal Karetiya",
    "Email": "kkaretiya@rku.ac.in",
    "City": "somnath",
    "img":"https://img.icons8.com/officel/2x/user.png"
  },
  {
    "Name": "Ravi Gol",
    "Email": "rgol@rku.ac.in",
    "City": "rajkot",
    "img":"https://img.icons8.com/officel/2x/user.png"
  },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  Share(s){
    alert("Student name is: "+s.Name);
  }

}
