import { useState } from "react";
import "./App.css";
import { Button, Form } from "react-bootstrap";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LisItem = styled.li`
  cursor: pointer;
`;

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  console.log(todos);

  const addTodo = () => {
    setTodos([...todos, todoInput]);
    setTodoInput("");
  };

  return (
    <>
      <Wrapper>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Hedef</Form.Label>
            <Form.Control
              onChange={(e) => {
                setTodoInput(e.target.value);
              }}
              value={todoInput}
              type="text"
            />
          </Form.Group>
        </Form>
        <Button className="mt-3" onClick={addTodo} variant="success">
          Ekle
        </Button>
      </Wrapper>
      <ul>
        {todos.map((todo) => (
          <LisItem
            onClick={() =>
              setTodos(todos.filter((filterTodo) => filterTodo !== todo))
            }
            key={todo}
          >
            {todo}
          </LisItem>
        ))}
      </ul>
    </>
  );
}

export default App;
