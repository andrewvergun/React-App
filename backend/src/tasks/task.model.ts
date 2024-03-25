export interface Task{
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    dueDate: string;
    priority: string;

}
export enum TaskStatus{
    TODO = 'TODO',
    PLANNED = 'PLANNED',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
}