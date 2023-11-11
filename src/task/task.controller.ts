import { Controller, Post, Get, Body, Param, Patch, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/CreateTaskDto';
import { UpdateTaskDto } from './dto/UpdateTaskDto';

@Controller('task')
export class TaskController {
    constructor(private taskService: TaskService){}

    @Post()
    async createTask(@Body() body: CreateTaskDto) {
        return await this.taskService.createTask(body);
    }

    @Get()
    async getAllTask() {
        return await this.taskService.getAllTask();
    }

    @Get(':id')
    async getTaskById(@Param('id') id) {
        return await this.taskService.getTaskById(id);
    }

    @Patch(':id')
    async updateTask(@Param('id') id, @Body() body: UpdateTaskDto) {
        return await this.taskService.updateTask(+id, body);
    }

    @Delete(':id')
    async deleteById(@Param('id') id) {
        return await this.taskService.deleteById(+id);
    }
}
