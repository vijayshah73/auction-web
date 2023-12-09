

export default function AddAuction() {
    return (
      <>
        <button type="button" className="btn btn-info mb-1" data-toggle="modal" data-target="#scrollmodal">Add Auction</button>
<div className="modal fade" id="scrollmodal" tabindex="-1" role="dialog" aria-labelledby="scrollmodalLabel" aria-hidden="true">
             
             <div className="modal-dialog custom-modal-width" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="scrollmodalLabel">Add Auction Details</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    
                          <div className="card-body">
                                <div className="custom-tab">

                                    <nav>
                                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                            <a className="nav-item nav-link active" id="custom-nav-home-tab" data-toggle="tab" href="#custom-nav-home" role="tab" aria-controls="custom-nav-home" aria-selected="true">Master</a>
                                            <a className="nav-item nav-link" id="custom-nav-profile-tab" data-toggle="tab" href="#custom-nav-profile" role="tab" aria-controls="custom-nav-profile" aria-selected="false">Details</a>
                                            <a className="nav-item nav-link" id="custom-nav-contact-tab" data-toggle="tab" href="#custom-nav-contact" role="tab" aria-controls="custom-nav-contact" aria-selected="false">Stock File Upload</a>
                                        </div>
                                    </nav>
                                    <div className="tab-content pl-3 pt-2" id="nav-tabContent">
                                    {/* <!--tab master started--> */}
<div className="tab-pane fade show active" id="custom-nav-home" role="tabpanel" aria-labelledby="custom-nav-home-tab">
<div className="card">
<div className="card-body card-block">
    <div className="row">
        <div className="col-md-4">
            <div className="form-group">
                <label for="auctionname" className="form-control-label">Auction Name</label>
            </div>
        </div>
        <div className="col-md-4">
            <div className="form-group">
                <label for="auctioninventory" className="form-control-label">Auction Inventory</label>
            </div>
        </div>
        <div className="col-md-4">
            <div className="form-group">
                <label for="datepicker" className="form-control-label">Viewing Date</label>
            </div>
        </div>
        
    </div>
    <div className="row">
        <div className="col-md-4">
            <div className="form-group">
                <input type="text" id="auctionname" placeholder="Enter auction name" className="form-control" />
            </div>
        </div>
        <div className="col-md-4">
            <div className="form-group"> 
                <select  id="auctioninventory" className="form-control">
                                            <option value="0">Please select</option>
                                            <option value="1">Certificate</option>
                                            <option value="2">Option #2</option>
                                            <option value="3">Option #3</option>
                 </select>
            </div>
        </div>
        <div className="col-md-4">                               
            <div className="form-group">
                      <input type="text" id="datepicker" className="form-control" />
                </div>
        </div>
    </div>
    
     <div className="row">
        <div className="col-md-4">
            <div className="form-group">
                <label for="viewingtime" className="form-control-label">Viewing Time</label>
            </div>
        </div>
        <div className="col-md-4">
            <div className="form-group">
                <label for="startdate" className="form-control-label">Start Date</label>
            </div>
        </div>
        <div className="col-md-4">
            <div className="form-group">
                <label for="starttime" className="form-control-label">Start Time</label>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-md-4">
            <div className="form-group">
                     <input type="text" id="viewingtime" className="form-control" />
                </div>
        </div>
        <div className="col-md-4">
            <div className="form-group">
                      <input type="text" id="startdate" className="form-control" />
                </div>
        </div>
        <div className="col-md-4">                               
            <div className="form-group">
                      <input type="text" id="starttime" className="form-control" />
                </div>
        </div>
    </div>
    
    
     <div className="row">
        <div className="col-md-4">
            <div className="form-group">
                <label for="enddate" className="form-control-label">End Date</label>
            </div>
        </div>
        <div className="col-md-4">
            <div className="form-group">
                <label for="endtime" className="form-control-label">End Time</label>
            </div>
        </div>
        <div className="col-md-4">
            <div className="form-group">
                <label for="defaultincrement" className="form-control-label">Default Bid Increment By</label>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-md-4">
            <div className="form-group">
                     <input type="text" id="enddate" className="form-control" />
                </div>
        </div>
        <div className="col-md-4">
            <div className="form-group">
                      <input type="text" id="endtime" className="form-control" />
                </div>
        </div>
        <div className="col-md-4">                               
            <div className="form-group">
                      <input type="text" id="defaultincrement" className="form-control" />
                </div>
        </div>
    </div>
    
    <div className="row">
        <div className="col-md-4">
            <div className="form-group">
                <label for="aucresdate" className="form-control-label">Auction Result Date</label>
            </div>
        </div>
        <div className="col-md-4">
            <div className="form-group">
                
            </div>
        </div>
        <div className="col-md-4">
            <div className="form-group">
                
            </div>
        </div>
    </div>
   <div className="row">
<div className="col-md-4">
    <div className="form-group">
        <input type="text" id="aucresdate" className="form-control" />
    </div>
</div>
<div className="col-md-8">
    <div className="form-group">
        <div className="row">
            <div className="col">
                <div className="checkbox">
                    <label for="checkbox1" className="form-check-label">
                        <input type="checkbox" id="checkbox1" name="checkbox1" value="option1" className="form-check-input" />Hide Bulk Bid
                    </label>
                </div>
            </div>
            <div className="col">
                <div className="checkbox">
                    <label for="checkbox2" className="form-check-label">
                        <input type="checkbox" id="checkbox2" name="checkbox2" value="option2" className="form-check-input" />Allow Proxy Bid
                    </label>
                </div>
            </div>
            <div className="col">
                <div className="checkbox">
                    <label for="checkbox3" className="form-check-label">
                        <input type="checkbox" id="checkbox3" name="checkbox3" value="option3" className="form-check-input" />Allow PopCorn Bid
                    </label>
                </div>
            </div>
        </div>
    </div>
</div>
</div>


 <div className="row">
        <div className="col-md-4">
            <div className="form-group">
                <label for="seldeadlinetype" className="form-control-label">Extend Deadline within Type</label>
            </div>
        </div>
        <div className="col-md-4">
            <div className="form-group">
                <label for="exdeadlinevalue" className="form-control-label">Extend Deadline within Value</label>
            </div>
        </div>
        <div className="col-md-4">
            <div className="form-group">
                <label for="numberbidextend" className="form-control-label">No. of Times Bid Extend</label>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-md-4">
            <div className="form-group">                
                      <select  id="seldeadlinetype" className="form-control">
                                            <option value="0">Please select</option>
                                            <option value="1">Minutes</option>
                                            <option value="2">Option #2</option>
                                            <option value="3">Option #3</option>
                 </select>
                </div>
        </div>
        <div className="col-md-4">
            <div className="form-group">
                      <input type="text" id="exdeadlinevalue" className="form-control" />
                </div>
        </div>
        <div className="col-md-4">                               
            <div className="form-group">
                      <input type="text" id="numberbidextend" className="form-control" />
                </div>
        </div>
    </div>
    
    
 <div className="row">
<div className="col-md-2">
    <div className="form-group">
        <label for="auctionmode" className="form-control-label">Auction Mode</label>
        <select id="auctionmode" className="form-control">
            <option value="1">View</option>
            <option value="2">Option #2</option>
            <option value="3">Option #3</option>
        </select>
    </div>
</div>
<div className="col-md-2">
    <div className="form-group">
        <label for="recordstatus" className="form-control-label">Record Status</label>
        <select id="recordstatus" className="form-control">
            <option value="1">Active</option>
            <option value="2">Option #2</option>
            <option value="3">Option #3</option>
        </select>
    </div>
</div>
  <div className="col-md-8">
    <div className="form-group">
        <label for="recordstatus" className="form-control-label">Description</label>
        <textarea id="numberbidextend" className="form-control"></textarea>
    </div>
</div>
<div className="row">
<div className="col-md-12">
<div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-dismiss="modal">Submit</button> 
                    </div>
</div>
</div>
</div>

    {/* <!-- Add more rows for the remaining fields as needed --> */}
</div>
</div>                                                  
                                            
</div>
                                        {/* <!--tab master ends here--> */}
                                        
                      {/* <!--tab details starts here--> */}
 <div className="tab-pane fade" id="custom-nav-profile" role="tabpanel" aria-labelledby="custom-nav-profile-tab">
<div className="card">
<div className="card-body card-block">
              <div className="row">
              <div className="col-md-4">
              <div className="form-group">
               <label for="frmrange" className="form-control-label">From Range</label>
              </div>
              </div>
              <div className="col-md-4">
              <div className="form-group">
               <label for="torange" className="form-control-label">To Range</label>
              </div>
              </div>
              <div className="col-md-4">
              <div className="form-group">
               <label for="amtincrement" className="form-control-label">Increment Amount</label>
              </div>
              </div>
              </div>
              
              <div className="row">
              <div className="col-md-4">
              <div className="form-group">
                <input type="text" id="frmrange" className="form-control" />
              </div>
              </div>
              <div className="col-md-4">
              <div className="form-group">
              <input type="text" id="torange" className="form-control" />
              </div>
              </div>
              <div className="col-md-4">
              <div className="form-group">
                 <input type="text" id="amtincrement" className="form-control" />
              </div>
              </div>
              </div>
              
              
               <div className="row">
              <div className="col-md-3">
              <div className="form-group">
               <label for="incrtag1" className="form-control-label">Increment Tag 1</label>
              </div>
              </div>
              <div className="col-md-3">
              <div className="form-group">
               <label for="incrtag2" className="form-control-label">Increment Tag 1</label>
              </div>
              </div>
              <div className="col-md-3">
              <div className="form-group">
               <label for="incrtag3" className="form-control-label">Increment Tag 3</label>
              </div>
              </div>
              <div className="col-md-3">
              <div className="form-group">
               <label for="incrtag4" className="form-control-label">Increment Tag 4</label>
              </div>
              </div>
              </div>
              
              <div className="row">
              <div className="col-md-3">
              <div className="form-group">
                <input type="text" id="incrtag1" className="form-control" />
              </div>
              </div>
              <div className="col-md-3">
              <div className="form-group">
              <input type="text" id="incrtag2" className="form-control" />
              </div>
              </div>
              <div className="col-md-3">
              <div className="form-group">
                 <input type="text" id="incrtag3" className="form-control" />
              </div>
              </div>
               <div className="col-md-3">
              <div className="form-group">
                 <input type="text" id="incrtag4" className="form-control" />
              </div>
              </div>
              </div>
              
               <div className="row">
<div className="col-md-12">
<div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-dismiss="modal">Add/Update</button> 
                    </div>
                     
</div>
  </div>
  <div className="row">
  <div className="col-md-12">
  <div className="card">
                       
                        <div className="card-body">
                            <table id="bootstrap-data-table1" className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>From</th>
                                        <th>To</th> 
                                         <th>Incre.By</th>
                                        <th>Incre.Tag1</th>
                                        <th>Incre.Tag2</th>
                                         <th>Incre.Tag3</th>
                                        <th>Incre.Tag1</th>                                       
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    <tr>
                                        <td>74</td>
                                        <td>2001</td>
                                           <td>999999999</td>
                                    <td>100</td>
                                    <td>100</td>
                                        <td>200</td>
                                           <td>500</td>
                                    <td>1000</td>
                                        <td> <a href="#"><i className="fa fa-eye fa-2xs" aria-hidden="true"></i></a> <a href="#"><i className="fa fa-edit fa-2xs" aria-hidden="true"></i></a>  <a href="#"><i className="fa fa-trash fa-2xs" aria-hidden="true"></i></a> </td>
                                    </tr>
                                    
                                   <tr>
                                        <td>75</td>
                                        <td>1001</td>
                                           <td>20000</td>
                                    <td>50</td>
                                    <td>520</td>
                                        <td>100</td>
                                           <td>150</td>
                                    <td>200</td>
                                        <td>  <a href="#"><i className="fa fa-eye fa-2xs" aria-hidden="true"></i></a> <a href="#"><i className="fa fa-edit fa-2xs" aria-hidden="true"></i></a>  <a href="#"><i className="fa fa-trash fa-2xs" aria-hidden="true"></i></a> </td>
                                    </tr>
                                    
                                  <tr>
                                        <td>76</td>
                                        <td>501</td>
                                           <td>1000</td>
                                    <td>20</td>
                                    <td>20</td>
                                        <td>40</td>
                                           <td>60</td>
                                    <td>100</td>
                                        <td> <a href="#"><i className="fa fa-eye fa-2xs" aria-hidden="true"></i></a> <a href="#"><i className="fa fa-edit fa-2xs" aria-hidden="true"></i></a>  <a href="#"><i className="fa fa-trash fa-2xs" aria-hidden="true"></i></a> </td>
                                    </tr>
                                    
                                  <tr>
                                        <td>77</td>
                                        <td>1</td>
                                           <td>500</td>
                                    <td>10</td>
                                    <td>10</td>
                                        <td>20</td>
                                           <td>50</td>
                                    <td>100</td>
                                        <td> <a href="#"><i className="fa fa-eye fa-2xs" aria-hidden="true"></i></a> <a href="#"><i className="fa fa-edit fa-2xs" aria-hidden="true"></i></a>  <a href="#"><i className="fa fa-trash fa-2xs" aria-hidden="true"></i></a> </td>
                                    </tr>
                                    
                                   
                                    
                                   <tr>
                                        <td>78</td>
                                        <td>2001</td>
                                           <td>999999999</td>
                                    <td>100</td>
                                    <td>100</td>
                                        <td>200</td>
                                           <td>500</td>
                                    <td>1000</td>
                                        <td> <a href="#"><i className="fa fa-eye fa-2xs" aria-hidden="true"></i></a> <a href="#"><i className="fa fa-edit fa-2xs" aria-hidden="true"></i></a>  <a href="#"><i className="fa fa-trash fa-2xs" aria-hidden="true"></i></a> </td>
                                    </tr>
                                    
                                   <tr>
                                        <td>79</td>
                                        <td>2001</td>
                                           <td>999999999</td>
                                    <td>100</td>
                                    <td>100</td>
                                        <td>200</td>
                                           <td>500</td>
                                    <td>1000</td>
                                        <td>  <a href="#"><i className="fa fa-eye fa-2xs" aria-hidden="true"></i></a> <a href="#"><i className="fa fa-edit fa-2xs" aria-hidden="true"></i></a>  <a href="#"><i className="fa fa-trash fa-2xs" aria-hidden="true"></i></a> </td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
  </div>
  </div>
 </div>
      </div>
</div>
                          {/* <!--tab details ends here---> */}
                                        <div className="tab-pane fade" id="custom-nav-contact" role="tabpanel" aria-labelledby="custom-nav-contact-tab">
                                            <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, irure terry richardson ex sd. Alip placeat salvia cillum iphone. Seitan alip s cardigan american apparel, butcher voluptate nisi .</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>

</>
);
}

