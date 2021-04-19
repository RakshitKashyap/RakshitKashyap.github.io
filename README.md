<html>
    <head>
        <title>To Do List</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- CSS only -->
        <link rel="stylesheet" href="assets/style.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">

        <!-- External BS 5 js -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
    </head>
    <body>
        <nav class="navbar navbar-secondary bg-secondary">
            <h5 class="text-white mx-5">To Do List</h5>
        </nav>

        <div class="d-flex align-items-start mt-2 mx-1">
            <div class="nav flex-column nav-pills me-3 border mx-1 shadow rounded my-5" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button class="nav-link text-left" id="v-pills-new-tab" data-bs-toggle="modal" data-bs-target="#newTaskModal" type="button" role="tab" aria-controls="newTaskModal" aria-selected="true">Add New</button>
                <button class="nav-link text-left active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true" onclick="show('All')">All</button>
                <button class="nav-link text-left" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false" onclick="show('Pending')">Pending</button>
                <button class="nav-link text-left" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false" onclick="show('Success')">Completed</button>
                <button class="nav-link text-left" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false" onclick="show('Failed')">Failed</button>
            </div>
            <div class="tab-content mt-3" id="v-pills-tabContent">

                <!-- common things to be specified here -->
                
                <table class="table" id="table">
                    <thead>
                        <tr>
                            <th>Task Id</th>
                            <th>Task</th>
                            <th>Created On</th>
                            <th>Closed By</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody id="showRows">

                    </tbody>
                </table>
            </div>
        </div>

        <div class="modal" tabindex="-1" aria-hidden="true" id="newTaskModal">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h6 class="modal-title">Add A New Task To Do...</h6>
                        <button class="btn btn-sm close" type="button" data-bs-dismiss="modal" aria-label="Close">X</button>
                    </div>
                    <div class="modal-body">
                        <!-- New task to be added Form -->
                        <div class="container">
                            <form id="form1">
                                <div class="row">
                                    <div class="col-sm col-md">
                                        <!-- flex for single inp like id & date -->
                                        <div class="d-flex flex-column">
                                            <div class="p-1 my-1">
                                                <div class="input-group">
                                                    <span class="input-group-text">Task Id</span>
                                                    <input id="taskId" type="number" class="form-control" placeholder="Task Id">
                                                </div>
                                            </div>
                                            <div class="p-1 my-1">
                                                <div class="input-group">
                                                    <span class="input-group-text">Created On</span>
                                                    <input id="createdOn" type="date" class="form-control">
                                                </div>
                                            </div>
                                            <div class="p-1 my-1">
                                                <div class="input-group">
                                                    <span class="input-group-text">Closed By</span>
                                                    <input id="closedBy" type="date" class="form-control" onchange="checkFordupe()">
                                                </div>
                                            </div>
                                            <div class="p-1" id="alert">
                                                <div class="alert alert-danger">
                                                    <p>Created on and Closed by  Date should be different</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm col-md">
                                        <!-- text area for task -->
                                        <div class="form-floating">
                                            <textarea class="form-control" id="taskDesc" cols="30" style="height: 100%;"></textarea>
                                            <label for="taskDesc">Task Description</label>
                                        </div>
                                    </div>
                                    
                                </div>
                            </form>
                        </div>


                    </div>
                    <div class="modal-footer">
                        <button type="submit" id="saveBtn" class="btn btn-sm btn-outline-primary">Save</button>
                        <button type="reset" form="form1" class="btn btn-sm btn-outline-warning">Reset</button>
                        <button class="btn btn-sm btn-outline-danger" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <script src="assets/app.js" type="text/javascript" charset="utf-8"></script>

    </body>
</html>
