import React from 'react';
import MetisMenu from 'react-metismenu';
import Logo from '../assets/logo.png'
import './SideNav.css';

const SideNav = () => {
  const content = [
    {
      "id": 1,
      "icon": "home",
      "label": "Home",
      "to": "/Home"
    },
    {
      "id": 2,
      "parentId": 1,
      "icon": "home",
      "label": "Home 1",
      "to": "/home"
    },
    {
      "id": 3,
      "parentId": 1,
      "icon": "home",
      "label": "Home 2",
      "to": "/home2"
    },
    {
      "id": 4,
      "parentId": 1,
      "icon": "home",
      "label": "Home 3",
      "to": "/home3"
    },
    {
      "id": 5,
      "icon": "user",
      "label": "Student Registration"
    },
    {
      "id": 6,
      "parentId": 5,
      "icon": "user",
      "label": "Student Registration 1",
      "to": "/registration"
    },
    {
      "id": 7,
      "parentId": 5,
      "icon": "user",
      "label": "Student Registration 2",
      "to": "/registration2"
    },
    {
      "id": 8,
      "parentId": 5,
      "icon": "user",
      "label": "Student Registration 3",
      "to": "/registration3"
    },
    {
      "id": 9,
      "icon": "mobile-phone",
      "label": "Course Applications",
      "to": "/course-applications"
    },
    {
      "id": 10,
      "icon": "money",
      "label": "Payment Batch",
      "to": "/payment-batch"
    },
    {
      "id": 11,
      "icon": "lock",
      "label": "Student Accounts",
      "to": "/student-accounts"
    },
    {
      "id": 12,
      "icon": "book",
      "label": "Assignments Data Entry",
      "to": "/assignments-data-entry"
    },
    {
      "id": 13,
      "icon": "percent",
      "label": "Course Grades",
      "to": "/course-grades"
    },
    {
      "id": 14,
      "icon": "print",
      "label": "Printing of Transcripts",
      "to": "/printing-transcripts"
    },
    {
      "id": 15,
      "icon": "print",
      "label": "Printing of Certificates",
      "to": "/printing-certificates"
    },
    {
      "id": 16,
      "icon": "id-card",
      "label": "Student ID Cards",
      "to": "/student-id-cards"
    },
    {
      "id": 17,
      "icon": "pencil",
      "label": "Account General Entities",
      "to": "/account-general-entities"
    },
    {
      "id": 18,
      "icon": "wrench",
      "label": "User Maintanance",
      "to": "/user-maintenance"
    },
    {
      "id": 19,
      "icon": "thumbs-up",
      "label": "Setting Up of Course Detail",
      "to": "/setting-up-course-detail"
    },
    {
      "id": 20,
      "icon": "pencil",
      "label": "Setting up Grades",
      "to": "/setting-up-grades"
    },
  ]
  return (
    <div className="sidenav">
      <div className="sidenav__logosection">
        <img src={Logo} alt="logo" className="sidenav__logo" />
      </div>
      <MetisMenu content={content} activeLinkFromLocation />
    </div>
  )
}

export default SideNav;