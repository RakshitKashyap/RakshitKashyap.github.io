// variables and initialization

let taskId_arr = [];
let create_arr = [];
let closed_arr = [];
let desc_arr = [];
let status_arr = [];

// check if there already exist key:value pairs

if( localStorage.getItem('tasksId') === null && localStorage.getItem('createdOn') === null &&  localStorage.getItem('closedBy') === null
    &&  localStorage.getItem('tasksDesc') === null &&  localStorage.getItem('status') === null ){

            localStorage.setItem('tasksId' , JSON.stringify(taskId_arr));
            localStorage.setItem('createdOn' , JSON.stringify(create_arr));
            localStorage.setItem('closedBy' , JSON.stringify(closed_arr));
            localStorage.setItem('tasksDesc' , JSON.stringify(desc_arr));
            localStorage.setItem('status' , JSON.stringify(status_arr));

    }

document.getElementById('taskId').value = ++(JSON.parse(localStorage.getItem('tasksId'))).length;
show('All');
// var now = new Date();
// var day = ("0" + now.getDate()).slice(-2);
// var month = ("0" + (now.getMonth() + 1)).slice(-2);
// var today =  (day)+ "-"+(month)+ "-"+now.getFullYear() ;


// event Listener
eventListeners();


function eventListeners(){
    // on clicking Save button
    document.getElementById("saveBtn").addEventListener("click",function(e){

        createdOn   =   document.getElementById('createdOn').value;
        taskId      =   document.getElementById('taskId').value;
        taskDesc    =   document.getElementById('taskDesc').value;
        closedBy    =   document.getElementById('closedBy').value;
        let status = "Pending";

        if(taskDesc == "") 
            alert('description can\'t be empty.')
        else{

            taskId_arr  = JSON.parse(localStorage.getItem('tasksId'));
            create_arr  = JSON.parse(localStorage.getItem('createdOn'));
            closed_arr  = JSON.parse(localStorage.getItem('closedBy'));
            desc_arr    = JSON.parse(localStorage.getItem('tasksDesc'));
            status_arr  = JSON.parse(localStorage.getItem('status'));

            taskId_arr.push(taskId);
            create_arr.push(createdOn);
            closed_arr.push(closedBy);
            desc_arr.push(taskDesc);
            status_arr.push(status);


            localStorage.setItem('tasksId'      , JSON.stringify( taskId_arr ));
            localStorage.setItem('createdOn'    , JSON.stringify( create_arr ));
            localStorage.setItem('closedBy'     , JSON.stringify( closed_arr ));
            localStorage.setItem('tasksDesc'    , JSON.stringify( desc_arr ));
            localStorage.setItem('status'       , JSON.stringify( status_arr ));
            alert('Task added successfully.');
            window.location.reload();
        }
    });
}

// functions

function checkFordupe(){ 

    createdOn   =   document.getElementById('createdOn').value;
    closedBy    =   document.getElementById('closedBy').value;

    if( createdOn <= closedBy )
        document.getElementById('alert').style.display = 'none';
    else
    document.getElementById('alert').style.display = 'block';
}

function createRows(records){
    let tbody = document.getElementById('showRows');

    for( i = tbody.rows.length-1 ; i >=0 ; i-- )
        tbody.deleteRow(i);
    
    if( records == 0 ){
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.setAttribute('colspan',2);
        td.classList.add('text-bold', 'text-primary')
        txt = document.createTextNode('No Task Available., Add some tasks');
        
        td.appendChild(txt);
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    else{

        len = records.length;

        for(let i = 0 ; i < len ; i++ ){
            let tr = document.createElement('tr');
            
            let td_1 = document.createElement('td');
            let td_2 = document.createElement('td');
            let td_3 = document.createElement('td');
            let td_4 = document.createElement('td');
            let td_5 = document.createElement('td');

            let txt_1 = document.createTextNode(records[i][0]);
            let txt_2 = document.createTextNode(records[i][3]);
            let txt_3 = document.createTextNode(records[i][1]);
            let txt_4 = document.createTextNode(records[i][2]);
            let txt_5 = document.createTextNode(records[i][4]);

            td_1.appendChild(txt_1);
            td_2.appendChild(txt_2);
            td_3.appendChild(txt_3);
            td_4.appendChild(txt_4);
            td_5.appendChild(txt_5);

            tr.appendChild(td_1);
            tr.appendChild(td_2);
            tr.appendChild(td_3);
            tr.appendChild(td_4);
            tr.appendChild(td_5);

            tbody.appendChild(tr);
        }
    }
}
function show(status){
    console.log(status);

    taskId_arr  = JSON.parse(localStorage.getItem('tasksId'));
    create_arr  = JSON.parse(localStorage.getItem('createdOn'));
    closed_arr  = JSON.parse(localStorage.getItem('closedBy'));
    desc_arr    = JSON.parse(localStorage.getItem('tasksDesc'));
    status_arr  = JSON.parse(localStorage.getItem('status'));

    if( (JSON.parse(localStorage.getItem('tasksId'))).length === 0 ){
        createRows(0);
    }
    else{
        sendRes = [];

        len = JSON.parse(localStorage.getItem('status')) .length;

        for(let i = 0 ; i < len ; i++ ){
            let ele = [];

            ele.push(taskId_arr[i]);
            ele.push(create_arr[i]);
            ele.push(closed_arr[i]);
            ele.push(desc_arr[i]);
            ele.push(status_arr[i]);

            if(status == 'All')
                sendRes.push(ele);
            else
                if(status === status_arr[i])
                    sendRes.push(ele);
        }
        createRows(sendRes);
    }


}