import React from 'react';
import MetisMenu from 'react-metismenu';
import Logo from '../assets/logo.png'
import './SideNav.css';

const SideNav = () => {
  const content = [
    {
      "id": 1,
      "icon": "icon-class-name",
      "label": "Home",
      "to": "/Home"
    },
    {
      "id": 2,
      "parentId": 1,
      "icon": "icon-class-name",
      "label": "Home 1",
      "to": "/home"
    },
    {
      "id": 3,
      "parentId": 1,
      "icon": "icon-class-name",
      "label": "Home 2",
      "to": "/home2"
    },
    {
      "id": 4,
      "parentId": 1,
      "icon": "icon-class-name",
      "label": "Home 3",
      "to": "/home3"
    },
    {
      "id": 5,
      "icon": "icon-class-name",
      "label": "Student Registration"
    },
    {
      "id": 6,
      "parentId": 5,
      "icon": "icon-class-name",
      "label": "Student Registration 1",
      "to": "/registration"
    },
    {
      "id": 7,
      "parentId": 5,
      "icon": "icon-class-name",
      "label": "Student Registration 2",
      "to": "/registration2"
    },
    {
      "id": 8,
      "parentId": 5,
      "icon": "icon-class-name",
      "label": "Student Registration 3",
      "to": "/registration3"
    },
    {
      "id": 9,
      "icon": "icon-class-name",
      "label": "Course Applications",
      "to": "/course-applications"
    },
    {
      "id": 10,
      "icon": "icon-class-name",
      "label": "Payment Batch",
      "to": "/payment-batch"
    },
    {
      "id": 11,
      "icon": "icon-class-name",
      "label": "Student Accounts",
      "to": "/student-accounts"
    },
    {
      "id": 12,
      "icon": "icon-class-name",
      "label": "Assignments Data Entry",
      "to": "/"
    },
    {
      "id": 13,
      "icon": "icon-class-name",
      "label": "Course Grades",
      "to": "/"
    },
    {
      "id": 14,
      "icon": "icon-class-name",
      "label": "Printing of Transcripts",
      "to": "/"
    },
    {
      "id": 15,
      "icon": "icon-class-name",
      "label": "Printing of Certificates",
      "to": "/"
    },
    {
      "id": 16,
      "icon": "icon-class-name",
      "label": "Student ID Cards",
      "to": "/"
    },
    {
      "id": 17,
      "icon": "icon-class-name",
      "label": "Account General Entities",
      "to": "/"
    },
    {
      "id": 18,
      "icon": "icon-class-name",
      "label": "User Maintanance",
      "to": "/"
    },
    {
      "id": 19,
      "icon": "icon-class-name",
      "label": "Setting Up of Course Detail",
      "to": "/"
    },
    {
      "id": 20,
      "icon": "icon-class-name",
      "label": "Setting up Grades",
      "to": "/"
    },
  ]
  return (
    <div className="sidenav">
      <div className="sidenav__logosection">
        <img src={Logo} className="sidenav__logo" />
      </div>
      <MetisMenu content={content} activeLinkFromLocation />
    </div>
  )
}

export default SideNav;