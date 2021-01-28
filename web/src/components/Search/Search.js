const { Button, Form, FormGroup, Input } = require('reactstrap')
import './style.css'
const Search = () => {
  return (
    <div className="row align-items-center justify-content-center">
      <div className="col-12 align-items-center">
        <div className="text-center">
          <h1>Start Your Search Here</h1>
          <p>Search for properties, agents, open houses, and agent offices.</p>
        </div>
        <Form
          inline
          className="align-items-center justify-content-between w-100 sm-px-4"
        >
          <FormGroup className="pr-1 search_row">
            <Input
              size="lg"
              type="select"
              name="select"
              id="search_select_input"
              className="select-css"
            >
              <option>Properties</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
          <FormGroup className="flex-fill">
            <Input
              size="lg"
              type="search"
              name="search"
              id="search_input"
              placeholder="Search an MLS Area, Address, City, Zip, Community, MLS"
              className="w-100"
            />
          </FormGroup>
          <FormGroup className="pl-1 search_row">
            <Button size="lg" color="dark" className="search_button">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                width="32"
                height="32"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </FormGroup>
        </Form>
      </div>
    </div>
  )
}

export default Search
