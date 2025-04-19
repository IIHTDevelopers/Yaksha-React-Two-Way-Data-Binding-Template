import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom/extend-expect'; // Importing jest-dom to use toBeInTheDocument

describe('boundary', () => {
    test('AppComponent boundary renders the Task List header', () => {
        render(<App />);
        const headerElement = screen.getByText('Task List');
        expect(headerElement).toBeInTheDocument();
    });

    test('AppComponent boundary renders the first task name and description', () => {
        render(<App />);
        const taskName = screen.getByDisplayValue('Task 1');
        const taskDescription = screen.getByDisplayValue('This is the first task');
        expect(taskName).toBeInTheDocument();
        expect(taskDescription).toBeInTheDocument();
    });

    test('AppComponent boundary renders the second task name and description', () => {
        render(<App />);
        const taskName = screen.getByDisplayValue('Task 2');
        const taskDescription = screen.getByDisplayValue('This is the second task');
        expect(taskName).toBeInTheDocument();
        expect(taskDescription).toBeInTheDocument();
    });

    test('AppComponent boundary renders the third task name and description', () => {
        render(<App />);
        const taskName = screen.getByDisplayValue('Task 3');
        const taskDescription = screen.getByDisplayValue('This is the third task');
        expect(taskName).toBeInTheDocument();
        expect(taskDescription).toBeInTheDocument();
    });

    test('AppComponent boundary renders the task statuses correctly', () => {
        render(<App />);
        const statusIncompleteElements = screen.getAllByText('Status: Incomplete');
        const statusCompletedElement = screen.getByText('Status: Completed');
        expect(statusIncompleteElements.length).toBe(2); // Two tasks are incomplete
        expect(statusCompletedElement).toBeInTheDocument(); // One task is completed
    });

    test('AppComponent boundary updates task name on input change', () => {
        render(<App />);
        
        // Find the input field for the first task's name
        const firstTaskNameInput = screen.getByDisplayValue('Task 1');
        fireEvent.change(firstTaskNameInput, { target: { value: 'Updated Task 1' } });

        // Check if the task name is updated
        const updatedTaskName = screen.getByDisplayValue('Updated Task 1');
        expect(updatedTaskName).toBeInTheDocument();
    });

    test('AppComponent boundary updates task description on input change', () => {
        render(<App />);
        
        // Find the input field for the first task's description
        const firstTaskDescriptionInput = screen.getByDisplayValue('This is the first task');
        fireEvent.change(firstTaskDescriptionInput, { target: { value: 'Updated description for Task 1' } });

        // Check if the task description is updated
        const updatedTaskDescription = screen.getByDisplayValue('Updated description for Task 1');
        expect(updatedTaskDescription).toBeInTheDocument();
    });
});
