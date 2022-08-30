import Card from "./Card";
import Button from "./Button";

function ErrorModal(props) {
  return (
    <Card>
      <header>
        <h2>{props.title}</h2>
      </header>
      <div>
        <p>{props.message}</p>
      </div>
      <footer>
        <Button>Ok</Button>
      </footer>
    </Card>
  );
}

export default ErrorModal;
