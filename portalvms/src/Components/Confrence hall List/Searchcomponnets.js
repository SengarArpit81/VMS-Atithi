import { Row } from 'antd'
import React from 'react'
import "./confrencelist.css"


const Searchcomponnets = () => {


  return (
    <div>
        <div className=' bg-white ' id='searchComponent ' >
                <div className=' bg-white mb-2' >
                   
                        <div className='row' >
                            <div className='col input-group mt-2  Serach-Input-Box-Div'>
                                <input type="text" class="form-control" placeholder="Search for the Speaker or Seminar" 
                                // onChange={(e) => setSearch(e.target.value)} 
                                />
                                <a href="#" style={{ backgroundColor: "#F4F6F6" }}><img className='' height={40} src="/icons/eventSearchIngIcon.svg" /></a>
                            </div>
                        </div>
                    
                    <div className='row mt-2 d-flex align-items-center mb-2 mb-md-0' >
                        <div className='col-md-6 col-lg-6 col-sm-12 col Serach-Text-Div'>
                            <h3 class="title-tag title-taggs-H1">Upcoming Seminar Hall List</h3>
                        </div>

                        
                            <div className='col-md-6 col-lg-6 col-sm-12 d-flex justify-content-between '>
                                {/* <div className='row d-flex' > */}


                                    {/* <div className=' d-flex justify-content-around'> */}
                                        <div class=" d-flex gap-1  checkBox-text-Div checkBox-text-Div-Input" >
                                            <input type="checkbox" class="checkmark " name="priorityHigh" id="priorityHigh" 
                                            // onChange={checkboxfree} onClick={() => isCheckboxfree("checked")}
                                             />

                                            2 hours
                                        </div>
                                    {/* </div> */}
                                    {/* <div className=' d-flex justify-content-around '> */}
                                        <div class="d-flex gap-1 checkBox-text-Div" >
                                            <input type="checkbox" name="priorityLow" id="priorityLow"  
                                            // onChange={checkboxpaid} onClick={() => isCheckboxPaid("checked")}
                                             />
                                            3 hours
                                        </div>
                                    {/* </div> */}

                                    {/* <div className=' d-flex justify-content-around    '> */}
                                        <div class="  d-flex gap-1 checkBox-text-Div" >
                                            <input type="checkbox" name="priorityHigh1" id="priorityHigh1" 
                                            // onChange={checkboxdirect} onClick={() => isCheckboxDirect("checked")} 
                                            />
                                            4 hours
                                        </div>
                                    {/* </div> */}
                                    {/* <div className=' d-flex justify-content-around '> */}
                                        <div class="d-flex gap-1 checkBox-text-Div" >
                                            <input type="checkbox" name="priorityLow1" id="priorityLow1" 
                                            // onChange={checkboxwebinar} onClick={() => isCheckboxWebinar("checked")}
                                             />
                                            Whole Day
                                        </div>
                                    {/* </div> */}

                                    {/* <div className='col-4  mt-2 d-flex justify-content-around'>
                                        <div class="form-check  me-3 d-flex  align-items-center">
                                            <input class="form-check-input" type="checkbox" name="flexRadioDefault1" id="flexRadioDefault1" onChange={checkboxdirect} />
                                            <label class="form-check-label ms-1" for="flexRadioDefault1"> In-Person </label>
                                        </div>
                                    </div>
                                    <div className='col-3 d-flex justify-content-around ml-2 mt-2'>
                                        <div class="form-check d-flex  align-items-center gap-2">
                                            <input class="form-check-input" type="checkbox" name="flexRadioDefault1" id="flexRadioDefault1" onChange={checkboxwebinar} />
                                            <label class="form-check-label" for="flexRadioDefault1"> Webinar </label>
                                        </div>
                                    </div> */}

                                {/* </div> */}

                               

                            </div>
                        
                    </div>

                </div>
            </div>
    </div>
  )
}

export default Searchcomponnets