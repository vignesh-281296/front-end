(function() { 
    let flag = 1;
    let list = [
        {
            id: "1",
            icon: "fa fa-sun",
            name: 'My Day'
        },
        {
            id: "2",
            icon: "fa fa-star",
            name: 'Important'
            
        },
        {
            id: "3",
            icon: "fa fa-calendar",
            name: 'Planned'
        },
        {
            id: "4",
            icon: "fa fa-user",
            name: 'Assign to you'
        },
        {
            id: "5",
            icon: "fa fa-home",
            name: 'Task'
        }
    ];
    let taskList = [];
    let stepList = [];
    let categoryId;
    let taskId;

    const categoryText = document.getElementById("add-task");
    const divElement = document.getElementById("element");
    const taskText = document.getElementsByClassName("assign-task")[0];
    const taskElement = document.getElementsByClassName("task-value")[0];
    const addStepTextBox = document.getElementsByClassName("step-text-box")[0];
    //const selectCheckbox = document.querySelector('.steps-checkbox');
    function init() { 
        document.getElementById("task-section").style.visibility = 'hidden';
        document.getElementsByClassName("step")[0].style.visibility = 'hidden';
        document.getElementsByClassName("step")[0].style.display = 'none';
        categoryList();
        categoryText.addEventListener("keypress", function(event){
            if ('Enter' === event.key) {
                addCategory();
            } 
        }); 

        divElement.addEventListener("click", function (event) {
            if ("SPAN" === event.target.tagName) {
                task(event);
            }
        });

        taskText.addEventListener("keypress", function(event){
            if ('Enter' === event.key) {
                addTask();
            } 
        }); 
        
        taskElement.addEventListener("click",function(event){
            if ("SPAN" === event.target.tagName) {
                step(event);
            }     
        });

        addStepTextBox.addEventListener("keypress",function(event){
            if ('Enter' === event.key) {
                addStep();
            }     
        });
          
        //selectCheckbox.addEventListener("click", checked);

    }
    
    function categoryList() {
        for (let i = 0; i < list.length; i++) {
            renderCategory(list[i]);
        }
    }

    /* 
     * category rendering
     * @param value
     */
    function renderCategory(value) {
        const ulItems = document.getElementsByClassName('list')[0];
        const item = document.createElement('li');
        item.className = "sub-list";
        const icon = document.createElement("i");
        icon.className = value.icon;
        icon.id = "icons";
        item.insertBefore(icon, item.firstChild);
        const span = document.createElement("span");
        span.className = "list-name";
        span.id = value.id;
        span.appendChild(item.appendChild(document.createTextNode(value.name)));
        item.insertBefore(span, icon.nextSibling);
        ulItems.appendChild(item);
        document.getElementById("element").appendChild(ulItems);
    }
    
    /*
     * adding category
     */
    function addCategory() {
        const addCategory = document.getElementById("add-task").value;
        let obj = {
            id: list.length + 1,
            icon: 'fa fa-list',
            name: addCategory
        }
        list.push(obj);
        renderCategory(obj);
        document.getElementById("add-task").value = "";

    }
    
    /*
     * task part
     */
    function task(event) {
        document.getElementById("task-section").style.visibility = 'visible';
        //document.getElementsByClassName("step")[0].style.visibility = 'hidden';
        document.getElementsByClassName("step")[0].style.display = 'none';
        console.log(event.target);
        categoryId = event.target.id;
        let heading = document.getElementsByClassName("title")[0];
        heading.innerHTML = document.getElementById(categoryId).innerHTML;
        const taskUl = document.getElementById('assigned-task');
        while (taskUl.firstChild) {
            taskUl.removeChild(taskUl.firstChild);
        }
        for (let i = 0; i < taskList.length; i++) {
            if (categoryId == taskList[i].id) {
                taskRender(taskList[i]);
            }
        }
        if (0 == flag) {
            let assignedTask = document.getElementsByClassName("task-part-1")[0];
            assignedTask.className = "task-part"
            
        }
    }

    /*
     * task render part
     * @param item
     */
    function taskRender(item) {
        const taskUl = document.getElementById('assigned-task');
        const taskLi = document.createElement("li");
        taskLi.className = "hr";
        const checkBoxButton = document.createElement("input");
        checkBoxButton.type = 'checkbox';
        checkBoxButton.name = 'tick';
        checkBoxButton.className = 'task-checkbox';
        taskLi.insertBefore(checkBoxButton, taskLi.firstChild);
        const span = document.createElement("span");
        span.className = "assigned-task-value";
        span.id = item.taskId;
        span.appendChild(taskLi.appendChild(document.createTextNode(item.name)));
        taskLi.insertBefore(span, checkBoxButton.nextSibling);
        const icon = document.createElement("i");
        icon.className = "far fa-star important";
        taskLi.insertBefore(icon, span.nextSibling);
        taskUl.appendChild(taskLi);
        document.getElementsByClassName("task-value")[0].appendChild(taskUl);
        console.log(item.name);
    }

    /*
     * adding task part
     */
    function addTask() {
        const addTaskValue = document.getElementsByClassName("assign-task")[0].value;
        let obj = {
            id: categoryId,
            taskId: taskList.length + 1,
            name: addTaskValue,
        }
        taskList.push(obj);
        taskRender(obj);
        document.getElementsByClassName("assign-task")[0].value = "";
    }

    /*
     * step part
     */
    function step(event) {
        flag = 0;
        taskId = event.target.id;
        document.getElementsByClassName("step")[0].style.visibility = 'visible';
        document.getElementsByClassName("step")[0].style.display = 'inline-block';
        console.log(event.target.firstChild);
        let taskValue = event.target.firstChild;
        let taskPart = document.getElementById("task-section");
        taskPart.className = 'task-part-1';
        let stepTitle = document.getElementsByClassName("step-title")[0];
        stepTitle.innerHTML = taskValue.textContent;
        const stepUl = document.getElementsByClassName('steps')[0];
        while (stepUl.firstChild) {
            stepUl.removeChild(stepUl.firstChild);
        }
        for (let i = 0; i < stepList.length; i++) {
            if (taskId == stepList[i].id) {
                stepRender(stepList[i]);
            }
        }
    }

     /*
     * adding step for task part
     */
     function addStep() {
        const addStepValue = document.getElementsByClassName("step-text-box")[0].value;
        let obj = {
            id: taskId,
            name: addStepValue
        }
        stepList.push(obj);
        stepRender(obj);
        document.getElementsByClassName("step-text-box")[0].value = "";
    }

     /*
     * step render part
     * @param item
     */
     function stepRender(item) {
        const stepUl = document.getElementsByClassName("steps")[0];
        const stepLi = document.createElement("li");
        stepLi.className = "steps-value";
        const checkBoxButton = document.createElement("input");
        checkBoxButton.type = 'checkbox';
        checkBoxButton.name = 'task-name';
        checkBoxButton.className = 'step-check-list';
        stepLi.insertBefore(checkBoxButton, stepLi.firstChild);
        const span = document.createElement("span");
        span.appendChild(stepLi.appendChild(document.createTextNode(item.name)));
        stepLi.insertBefore(span, checkBoxButton.firstChild);
        const icon = document.createElement("i");
        icon.className = "fa fa-times delete-icon";
        stepLi.insertBefore(icon, span.nextSibling);
        stepUl.appendChild(stepLi);
        document.getElementsByClassName("step-list")[0].appendChild(stepUl);
        console.log(item.name);
    }

    // function checked() {
    //     alert("clicked");   
    //     var checkboxes = document.getElementsByName('tick');
    //     for (var checkbox of checkboxes) {
    //         checkbox.checked = this.checked;
    //     }
    // }
  
    init();
    })();

    