function TaskStorage(){
		this.storage = window.localStorage;
	}
	TaskStorage.prototype.getAllTasks = function(){
		var tasks = [];
		for(var i=0;i<this.storage.length;i++){
			var key = this.storage.key(i);
			var taskName = this.storage.getItem(key);
			tasks.push({id : key, name : taskName});
		}
		return tasks;
	};
	TaskStorage.prototype.addNew = function(taskName){
		var newId = new Date().getTime().toString();
		this.storage.setItem(newId,taskName);
		return { id : newId, name : taskName};
	};
	TaskStorage.prototype.remove = function(id){
		this.storage.removeItem(id);
	}