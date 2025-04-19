// Task.test.js

import { render, screen, fireEvent } from '@testing-library/react';
import Task from '../Task';
import '@testing-library/jest-dom/extend-expect'; // Importing jest-dom to use toBeInTheDocument

describe('boundary', () => {
    const task = {
        name: 'Task 1',
        description: 'This is the first task',
        completed: false
    };

    const completedTask = {
        name: 'Task 2',
        description: 'This is the second task',
        completed: true
    };

    test('TaskComponent boundary renders the task name', () => {
        render(<Task task={task} index={0} onInputChange={() => {}} />);
        const taskName = screen.getByDisplayValue('Task 1');
        expect(taskName).toBeInTheDocument();
    });

    test('TaskComponent boundary renders the task description', () => {
        render(<Task task={task} index={0} onInputChange={() => {}} />);
        const taskDescription = screen.getByDisplayValue('This is the first task');
        expect(taskDescription).toBeInTheDocument();
    });

    test('TaskComponent boundary renders the task status as incomplete', () => {
        render(<Task task={task} index={0} onInputChange={() => {}} />);
        const statusElement = screen.getByText('Status: Incomplete');
        expect(statusElement).toBeInTheDocument();
    });

    test('TaskComponent boundary renders the task status as completed', () => {
        render(<Task task={completedTask} index={0} onInputChange={() => {}} />);
        const statusElement = screen.getByText('Status: Completed');
        expect(statusElement).toBeInTheDocument();
    });

    test('TaskComponent boundary renders the correct input values', () => {
        render(<Task task={completedTask} index={0} onInputChange={() => {}} />);
        const taskName = screen.getByDisplayValue('Task 2');
        const taskDescription = screen.getByDisplayValue('This is the second task');
        expect(taskName).toBeInTheDocument();
        expect(taskDescription).toBeInTheDocument();
    });

    test('TaskComponent boundary calls the onInputChange function when name input changes', () => {
        const mockOnInputChange = jest.fn();
        render(<Task task={task} index={0} onInputChange={mockOnInputChange} />);
        const taskNameInput = screen.getByDisplayValue('Task 1');
        fireEvent.change(taskNameInput, { target: { value: 'Updated Task 1' } });
        expect(mockOnInputChange).toHaveBeenCalledWith(0, 'name', 'Updated Task 1');
    });

    test('TaskComponent boundary calls the onInputChange function when description input changes', () => {
        const mockOnInputChange = jest.fn();
        render(<Task task={task} index={0} onInputChange={mockOnInputChange} />);
        const taskDescriptionInput = screen.getByDisplayValue('This is the first task');
        fireEvent.change(taskDescriptionInput, { target: { value: 'Updated description for Task 1' } });
        expect(mockOnInputChange).toHaveBeenCalledWith(0, 'description', 'Updated description for Task 1');
    });
});
