import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/CreateTaskDto';
import { UpdateTaskDto } from './dto/UpdateTaskDto';

@Injectable()
export class TaskService {
    async createTask(data: CreateTaskDto){
        return "Create Task"
    }

    async getAllTask(){
        return "Get all Task"
    }

    async getTaskById(id){
        return `Get Task by ID ${id}`
    }

    async updateTask(id, data: UpdateTaskDto) {
        return `Update Task by ID ${id}`
    }

    async deleteById(id){
        return `Delete Task by ID ${id}`
    }
}
