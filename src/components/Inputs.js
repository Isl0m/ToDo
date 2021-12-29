import {
  Form,
  FormControl,
  InputGroup,
  Button
} from "react-bootstrap";

const Inputs =({handleClick,name,score,setScore,setName})=>{
	return(<>
		<InputGroup>
        <FormControl
          placeholder="Write your task"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Form.Select value={score} onChange={(e) => setScore(e.target.value)}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
        </Form.Select>
        <Button variant="dark" onClick={handleClick}>
          Button
        </Button>
      </InputGroup></>
	)
}

export default Inputs;