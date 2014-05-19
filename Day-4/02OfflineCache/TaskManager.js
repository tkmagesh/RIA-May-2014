var $txtTask, $taskError, taskStorage;
		$(function(){
			$txtTask = $("#txtTask").on("keypress", onTxtTaskKeyPress);
	 		$("#btnAddTask").on("click", onBtnAddTaskClick);
			$("#btnRemoveCompleted").click(onBtnRemoveCompleted);
			$taskError = $("#taskError").hide();
			$("#ulTaskList").on("click","li",onTaskItemClick);
			taskStorage = new TaskStorage();
			loadTasksFromStorage();

			$(window.applicationCache).on("updateready",function(){
				$("#divUpdateStatus").show();
			});

			$("#btnYes").on("click",function(){
				window.location.reload();
			});

			$("#btnNo").on("click",function(){
				$("#divUpdateStatus").hide();
			})
			
		});
		function loadTasksFromStorage(){
			var tasks = taskStorage.getAllTasks();
			tasks.forEach(function(t){ addTaskToList(t);});
		}
		
		function onBtnRemoveCompleted(){
			$("#ulTaskList > li.completed").fadeOut(10000,function(){
				var id = $(this).attr("task-id");
				taskStorage.removeItem(id);
				$(this).remove();
			});
			displayMessage("Zero or more completed tasks are removed!!");
		}
		function onTxtTaskKeyPress(){
			$taskError.hide();
		}
		function onBtnAddTaskClick(){
			
			if ($txtTask.val() === "") {
				$taskError.show() 
			} else {
				var newTask = taskStorage.addNew($txtTask.val());
				addTaskToList(newTask);
			}
		}
		
		function addTaskToList(task){
			 $("<li></li>")
					.text(task.name)
					.attr("task-id",task.id)	
					.hide()	
					.appendTo("#ulTaskList")
					.slideDown('slow');
			displayMessage("A new task is added!");
		}
		function onTaskItemClick(){
			$(this).toggleClass("completed");
		}

		function displayMessage(msg){
			$("#divMessage").html(msg).hide().fadeIn().delay(3000).slideUp('fast');
		}