import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import Select from '../components/Select/Select.js';
import './Assignments.css';
import "react-datepicker/dist/react-datepicker.css";
import Button from '../components/Button/Button.js';

function Assignments() {
  const ProgrammeDropdown = ['Certificate Courses', 'CIB-Certificate in Business'];
  const CourseDropdown = ['CHRM - Certificate in Human Resourse Management', 'CIA - Certificate in Accounting'];
  const UnitsDropdown = ['1003 - Certificate in Business', '1002 - Business Communication', '1012 - Business Accounting'];
  const PeriodDropdown = ['Semester 1', 'Semester 2'];
  const [SelectedProgram, setProgrammes] = useState([]);
  const [SelectedCourse, setCourses] = useState([]);
  const [SelectedUnits, setUnits] = useState(['1003 - Certificate in Business']);
  const [SelectedPeriod, setPeriod] = useState([]);
  const [year, setYear] = useState('2015');
  const [examCode, setExamCode] = useState('');
  const [weight, setWeight] = useState('');
  const [totalMarks, setTotalMarks] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());

  function onSelectProgram(selectedValue) {
    setProgrammes(selectedValue);
  }

  function onRemoveProgram(selectedValue) {
    setProgrammes(selectedValue);
  }

  function onSelectCourse(selectedValue) {
    setCourses(selectedValue);
  }

  function onRemoveCourse(selectedValue) {
    setCourses(selectedValue);
  }

  function onSelectUnits(selectedValue) {
    setUnits(selectedValue);
  }

  function onRemoveUnits(selectedValue) {
    setUnits(selectedValue);
  }

  function onSelectPeriod(selectedValue) {
    setPeriod(selectedValue);
  }

  function onRemovePeriod(selectedValue) {
    setPeriod(selectedValue);
  }

  function onYearChange(e) {
    setYear(e.target.value);
  }
  function onExamCodeChange(e) {
    setExamCode(e.target.value);
  }
  function onWeightChange(e) {
    setWeight(e.target.value);
  }
  function onTotalMarksChange(e) {
    setTotalMarks(e.target.value);
  }

  function handleDateChange(value) {
    setDate(value);
  }

  function onDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function addNewRecord() {
    let data = {
      assessmentsId: 0,
      branchId: 0,
      code: examCode,
      description: description,
      dueDate: date,
      institution: 0,
      mode: "string",
      regoPeriod: SelectedPeriod,
      semsester: 0,
      totalMarks: totalMarks,
      unicode: SelectedUnits,
      weight: weight,
      year: year
    }

    console.log(data);
  }

  return (
    <div>
      <nav class="navbar bg-blue-clr navbar-top navbar-expand-md navbar-dark" id="navbar-main">
        <div class="container-fluid">
          <a class="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="./index.html">Assignments Setup</a>
          <form class="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <div class="form-group mb-0">
              <div class="input-group input-group-alternative">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fa fa-search"></i></span>
                </div>
                <input class="form-control" placeholder="Search" type="text"></input>
              </div>
            </div>
          </form>

          <ul class="navbar-nav align-items-center d-none d-md-flex">
            <li class="nav-item dropdown">
              <a class="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div class="media align-items-center">

                  <div class="media-body ml-2 d-none d-lg-block">
                    <span class="mb-0 text-sm  font-weight-bold">Ravi</span>
                  </div>
                </div>
              </a>
              <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                <div class=" dropdown-header noti-title">
                  <h6 class="text-overflow m-0">Welcome!</h6>
                </div>
                <a href="#" class="dropdown-item">
                  <i class="ni ni-single-02"></i>
                  <span>My profile</span>
                </a>

                <div class="dropdown-divider"></div>
                <a href="#!" class="dropdown-item">
                  <i class="ni ni-user-run"></i>
                  <span>Logout</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <div class="header bg-blue-clr pt-5">
        <div class="container-fluid">
          <div class="header-body">
          </div>
        </div>
      </div>
      <div class="container-fluid assignment-section">
        <div class="row">
          <div class="col-xl-12">
            <div class="card bg-secondary shadow ">
              <div class="card-header bg-transparent">
                <div class="row ">
                  <div class="col">
                    <h2 class="mb-1">Assignments Setup</h2>
                    <h6 class="text-uppercase text-muted ls-1 mb-0">Check for Assignments Setup</h6>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <form>
                  <div class="row">
                    <div class="col-lg-4 col-md-6">
                      <div class="form-group">
                        <label class="label-style">Select Programme</label>
                        <Select
                          options={ProgrammeDropdown}
                          onSelect={onSelectProgram}
                          selectedValues={SelectedProgram}
                          onRemove={onRemoveProgram}
                          className="form-control form-control-alternative"
                          placeholder="Select Programme"
                        />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="form-group">
                        <label class="label-style">Course List</label>
                        <Select
                          options={CourseDropdown}
                          onSelect={onSelectCourse}
                          onRemove={onRemoveCourse}
                          selectedValues={SelectedCourse}
                          className="form-control form-control-alternative"
                          placeholder="Select Course"
                        />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="form-group">
                        <label class="label-style">Units List</label>
                        <Select
                          options={UnitsDropdown}
                          onSelect={onSelectUnits}
                          selectedValues={SelectedUnits}
                          onRemove={onRemoveUnits}
                          className="form-control form-control-alternative"
                          placeholder="Select Units"
                        />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="form-group">
                        <label class="label-style">Rego Period</label>
                        <Select
                          options={PeriodDropdown}
                          onSelect={onSelectPeriod}
                          selectedValues={SelectedPeriod}
                          onRemove={onRemovePeriod}
                          className="form-control form-control-alternative"
                          placeholder="Select Rego Period"
                        />
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-6">
                      <label class="label-style">Year</label>
                      <input type="text" id="" name="" value={year} onChange={onYearChange} class="form-control form-control-alternative" placeholder=""></input>
                    </div>
                    <div class="col-lg-2 col-md-6">
                      <label class="label-style">Course</label>
                      <div class="mt-2">CIB</div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <label class="label-style">Unit Code</label>
                      <div class="mt-2">1003 - Miscrosoft Office training</div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <label class="label-style">Exam Code</label>
                      <input type="text" id="" name="" value={examCode} onChange={onExamCodeChange} class="form-control form-control-alternative" placeholder=""></input>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <label class="label-style">Weight</label>
                      <input type="text" id="" name="" value={weight} onChange={onWeightChange} class="form-control form-control-alternative" placeholder=""></input>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <label class="label-style">Total Marks</label>
                      <input type="text" id="" name="" value={totalMarks} onChange={onTotalMarksChange} class="form-control form-control-alternative" placeholder=""></input>
                    </div>
                    <div class="col-lg-3 col-md-6">
                      <div class="form-group">
                        <label class="label-style">Due Date</label>
                        <DatePicker
                          selected={date}
                          onChange={handleDateChange}
                          className="form-control form-control-alternative"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12">
                      <div class="form-group">
                        <label class="label-style">Description</label>
                        <textarea type="text" id="" name="" class="form-control form-control-alternative" value={description} onChange={onDescriptionChange} />
                      </div>
                    </div>
                  </div>
                  <div class="row justify-content-center  mt-3 mb-4">
                    <Button
                      buttonText="Add New"
                      handleSubmit={addNewRecord}
                    />
                  </div>
                </form>
                <div class="row">
                  <div class="col-lg-12 col-md-12 mt-3">
                    <div class="table-responsive">
                      <table class="table align-items-center table-flush">
                        <thead class="thead-light">
                          <tr>
                            <th scope="col">No:</th>
                            <th scope="col">Assignments</th>
                            <th scope="col">Weight</th>
                            <th scope="col">Marks</th>
                            <th scope="col">Due Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                          </tr>
                          <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                          </tr>
                          <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="row mt-3 justify-content-center">
                  <div class="col-lg-3 col-md-8">
                    <nav aria-label="Page navigation example">
                      <ul class="pagination justify-content-end">
                        <li class="page-item disabled">
                          <a class="page-link" href="#" tabindex="-1">
                            <i class="fa fa-angle-left"></i>
                            <span class="sr-only">Previous</span>
                          </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item active"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            <i class="fa fa-angle-right"></i>
                            <span class="sr-only">Next</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Assignments;
