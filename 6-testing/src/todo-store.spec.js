import { TodoStore } from './todo-store';

describe('TodoStore', function () {
    const store = new TodoStore();

    beforeEach(function () {
        store.clear();
    });

    describe('#addTodo()', function () {

        it('should be able to add a new todo', function () {
            store.addTodo('My new Todo task');

            const addedTodo = store.todos[0];

            expect(addedTodo).toBeDefined();
            expect(addedTodo.id).toBeDefined();
            expect(addedTodo.timeStamp).toBeDefined();
            expect(addedTodo.done).toBeDefined();
            expect(addedTodo.done).toBe(false);
        });

        it('should return the newly added task', function () {
            store.addTodo('My super task');
            expect(store.todos.length).toBe(1);
        });

    });

    describe('#setDone()', function () {

        it('should sort todos by status', function () {
            // Add 3 todos
            store.addTodo('todo1');
            store.addTodo('todo2');
            store.addTodo('todo3');

            // Set the second one to done
            store.setDone(1);

            // Verify that the second one is last in the list
            expect(store.todos[0].description).toEqual('todo1');
            expect(store.todos[1].description).toEqual('todo3');
            expect(store.todos[2].description).toEqual('todo2');
            // Verify that the last one is done
            expect(store.todos[0].done).toEqual(false);
            expect(store.todos[1].done).toEqual(false);
            expect(store.todos[2].done).toEqual(true);
        });

    });
});
