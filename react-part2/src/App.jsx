import Counter from "./challenges/1"
import ParentCounterComponent from "./challenges/10"
import BoxResizer from "./challenges/11"
import ColorPicker from "./challenges/12"
import ProgressBar from "./challenges/13"
import AccordionWithStyle from "./challenges/14"
import DraggableSquare from "./challenges/15"
import TextInputMirror from "./challenges/2"
import ThemeToggler from "./challenges/3"
import FilterableList from "./challenges/4"
import LoginForm from "./challenges/5"
import CharacterCounter from "./challenges/6"
import TodoList from "./challenges/7"
import ImageGallery from "./challenges/8"
import Accordion from "./challenges/9"

function App() {

  return (
    <div>
    <Counter />
    <TextInputMirror/>
    <ThemeToggler/>
    <FilterableList/>
    <LoginForm/>
    <CharacterCounter/>
    <TodoList/>
    <ImageGallery/>
    <Accordion/>
    <ParentCounterComponent/>
    <BoxResizer/>
    <ColorPicker/>
    <ProgressBar/>
    <AccordionWithStyle/>
    {/* <DraggableSquare/> */}
    </div>
  )
}

export default App
