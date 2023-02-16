const TodosApp = {
    data() {
        return {
            isLoading: false,
            todos: [],
            enterTodoText: '',
            editedTodo: null
        };
    },
    methods: {
        async saveTodo(event) {
            event.preventDefault();

            if (this.editedTodoId) {
                const todoId = this.editedTodoId;

                const todoIndex = this.todos.findIndex(function(todoItem) {
                    return todoItem.id === todoId;
                });
                const updatedTodoItem = {
                    id: this.todos[todoIndex].id,
                    text: this.enterTodoText,
                };
                this.todos[todoIndex] = updatedTodoItem;
                this.editedTodoId = null;

                let response;

                try {
                    response = await fetch('http://localhost:3000/todos/' + todoId, {
                        method: 'PATCH',
                        body: JSON.stringify({
                            newText: this.enterTodoText,
                        }),
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                } catch (error) {
                    alert('Something went wrong!');
                    return;
                }

                if (!response.ok) {
                    alert('Something went wrong!');
                    return;
                }
            } else {
                let response;

                try {
                    response = await fetch('http://localhost:3000/todos', {
                        method: 'POST',
                        body: JSON.stringify({
                            text: this.enterTodoText,
                        }),
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                } catch (error) {
                    alert('Something went wrong!');
                    return;
                }

                if (!response.ok) {
                    alert('Something went wrong!');
                    return;
                }

                const responseData = await response.json();
                const todoId = responseData.createdTodo.id;
                const newTodo = {
                    text: this.enterTodoText,
                    id: responseData.createdTodo.id
                };
                this.todos.push(newTodo);
            }
            this.enterTodoText = ''
        },
        startEditTodo(todoId) {
            this.editedTodoId = todoId;
            const todo = this.todos.find(function(todoItem) {
                return todoItem.id = todoId;
            });
            this.enterTodoText = todo.text;
        },
        async deleteTodo(todoId) {
            this.todos = this.todos.filter(function(todoItem) {
                return todoItem.id !== todoId;
            });

            let response;

            try {
                response = await fetch('http://localhost:3000/todos/' + todoId, {
                    method: 'DELETE',
                });
            } catch (error) {
                alert('Something went wrong!');
                return;
            }

            if (!response.ok) {
                alert('Something went wrong!');
                return;
            }
        }
    },
    async created() {
        let response;
        this.isLoading = true;
        try {
            response = await fetch('http://localhost:3000/todos');
        } catch (error) {
            alert('Something went wrong!');
            this.isLoading = false;
            return;
        }

        this.isLoading = false;

        if (!response.ok) {
            alert('Something went wrong!');
            return;
        }

        const responseData = await response.json();
        this.todos = responseData.todos;
    }
};

Vue.createApp(TodosApp).mount('#todos-app');