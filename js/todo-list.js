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

    function init() { 
        $("#task-section").hide();
        $('.step').hide();
        $('.step').css('display', 'none');
        categoryRenderList();
        $('#add-task').keypress(addCategory);
        $('#category-element').click(displayTask);
        $('.assign-task').keypress(addTask);
        $('.task-value').click(subTask);
        $('.step-text-box').keypress(addSubTask);
    }
    
    function categoryRenderList() {
        for (let i = 0; i < list.length; i++) {
            categoryRender(list[i]);
        }
    }

    /* 
     * This method is used for render the category for given object
     * @param value category values
     */
    function categoryRender(value) {
        const categoryUl = $('.list');
        const categoryLi = $('<li/>')
        .addClass("sub-list");
        const icon = $('<i/>')
        .addClass(value.icon)
        .attr('id', 'icons')
        .appendTo(categoryLi);
        const span = $('<span/>')
        .addClass("list-name")
        .attr('id', value.id)
        .text(value.name)
        .appendTo(categoryLi);
        categoryLi.appendTo(categoryUl);
    }
    
    /*
     * This method is used to adding category
     */
    function addCategory(event) {
        if (event.key === 'Enter') {
            const addCategory = $("#add-task");
            let addCategoryValue;
            if (addCategory.val() == '') {
                addCategoryValue = "untitled";
            } else {
                addCategoryValue = addCategory.val();
            }
            let obj = {
                id: list.length + 1,
                icon: 'fa fa-list',
                name: addCategoryValue
            }
            list.push(obj);
            categoryRender(obj);
            addCategory.val("");
        }
    }
    
    /*
     * This method to display the task part
     */
    function displayTask(event) {
        let target = $(event.target);
        if (target.is("SPAN")) {
            $("#task-section").show();
            $(".step").css('diplay', 'none');
            console.log(target);
            categoryId = event.target.id;
            $('.title').text($('#' + categoryId).text());
            $('#assigned-task').text("");
            for (let i = 0; i < taskList.length; i++) {
                if (categoryId == taskList[i].id) {
                    renderTask(taskList[i]);
                }
            }
            if (0 == flag) {
                $('.task-part-1').addClass("task-part");
            }
        } 
    }

     /*
      * This method is used to render the task
      * @param item task item
      */
    function renderTask(item) {
        const taskUl = $('#assigned-task');
        const taskLi = $('<li/>')
        .addClass('hr');
        const checkBoxButton = $('<input type="checkbox"/>')
        .attr('name', 'tick')
        .addClass('task-checkbox')
        .appendTo(taskLi);
        const span = $('<span/>')
        .addClass('assigned-task-value')
        .attr('id', item.taskId)
        .text(item.name)
        .appendTo(taskLi);
        const icon = $('<i/>')
        .addClass('far fa-star important')
        .appendTo(taskLi);
        taskLi.appendTo(taskUl);
    }

    /*
     * This method used to adding task part to category
     */
    function addTask(event) {
        if (event.key === 'Enter') {
            const addTaskValue = $('.assign-task').val();
            let obj = {
                id: categoryId,
                taskId: "task" + taskList.length + 1,
                name: addTaskValue,
            }
            taskList.push(obj);
            renderTask(obj);
            $('.assign-task').val('');

        }
    }

    /*
     * This method is used to display sub task
     */
    function subTask(event) {
        let target = $(event.target);
        if (target.is('SPAN')) {
            flag = 0;
            taskId = event.target.id;
            $('.step').show();
            $('.step').css('display', 'inline-block');
            console.log(event.target.firstChild);
            let taskValue = event.target.firstChild;
            $('#task-section').addClass('task-part-1');
            $('.step-title').text(taskValue.textContent);
            $('.steps').text("");
            for (let i = 0; i < stepList.length; i++) {
                if (taskId == stepList[i].id) {
                    renderSubTask(stepList[i]);
                }
            }
        }   
    }

    /*
     * This is used to add sub tasks for task
     */
    function addSubTask(event) {
        if (event.key === 'Enter') {
            const addStepValue = $('.step-text-box').val();
            let obj = {
                id: taskId,
                name: addStepValue
            }
            stepList.push(obj);
            renderSubTask(obj);
            $('.step-text-box').val('');
        }
    }

    /*
     * This method is used to render sub task
     * @param item sub task object
     */
    function renderSubTask(item) {
        flag = 0;
        const stepUl = $('.steps');
        const stepLi = $('<li/>')
        .addClass('steps-value');
        const checkBoxButton = $('<input type="checkbox" class="step-check-list"/>')
        .attr("name","task-name")
        .addClass('step-check-list')
        .appendTo(stepLi);
        const span = $('<span/>')
        .text(item.name)
        .appendTo(stepLi);
        const icon = $('<i/>')
        .addClass("fa fa-times delete-icon")
        .appendTo(stepLi);
        stepLi.appendTo(stepUl);
    }

    init();
    })();

    