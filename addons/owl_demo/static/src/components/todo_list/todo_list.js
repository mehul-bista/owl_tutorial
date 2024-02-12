/** @odoo-module **/

import { registry } from '@web/core/registry';
const { Component, useState, onWillStart, useRef } = owl;
import { useService } from '@web/core/utils/hooks';

export class OwlTodoList extends Component {
    setup(){
        this.state = useState({
            // value : 1,
            // taskList : [
            //     { 'id' : 1, 'name' : "Task 1", color : "#FF0000" , completed : true },
            //     { 'id' : 2, 'name' : "Task 2", color : "#000000" , completed : true },
            //     { 'id' : 3, 'name' : "Task 3", color : "#FFFFFF" , completed : false },
            //     { 'id' : 4, 'name' : "Task 4", color : "#FF0000" , completed : true },
            // ]

            task : { name : "", color : "#FF0000", completed : false },
            taskList : [],
            isEdit : false,
            activeID : false,
        })

        this.orm = useService("orm")
        this.model = "odoo.todo.list"
        this.searchInput = useRef("search-input")

        onWillStart(async ()=> {
            // this.state.taskList = await this.orm.searchRead("odoo.todo.list", [], ["name", "color", "completed"])   
            await this.getAllTasks()         
        })
    }
    
    async getAllTasks(){
        this.state.taskList = await this.orm.searchRead(this.model, [], ["name", "color", "completed"]) 
    }

    addTask(){
        this.resetFrom()
        this.state.isEdit = false
        this.state.activeID = false
    }

    editTask(task){
        console.log(task)
        this.state.isEdit = true
        this.state.activeID = task.id

        // this.state.task = { name : task.name, color : task.color, completed : task.completed }
        this.state.task = {...task}
    }

    async saveTask(){
        // console.log(this.state.task)
        // await this.orm.create(this.model, [{ name : this.state.task.name, color : this.state.task.color, completed : this.state.task.completed }] )
        // await this.orm.create(this.model, [this.state.task] )

        if ( !this.state.activeID ){
            await this.orm.create(this.model, [this.state.task] )
        } else{
            this.orm.write(this.model, [this.state.activeID], this.state.task )
        }
        await this.getAllTasks()
    }

    resetFrom(){
        this.state.task = {name:"", color:"#FF0000", completed:false}
    }

    async deleteTask(task){
        await this.orm.unlink(this.model, [task.id] )
        await this.getAllTasks()
    }

    async searchTasks(){
        const text = this.searchInput.el.value
        console.log(text)

        this.state.taskList = await this.orm.searchRead(this.model, [['name', 'ilike', text]], ["name", "color", "completed"])
    }

    async toggleTask(e, task){
        await this.orm.write(this.model, [task.id], {completed : e.target.checked } )
        await this.getAllTasks()
    }

    async updateColor(e, task){
        await this.orm.write(this.model, [task.id], {color : e.target.value } )
        await this.getAllTasks()
    }
}

OwlTodoList.template = 'owl_demo.TodoList'
registry.category('actions').add('owl_demo.action_todo_list_js', OwlTodoList);
