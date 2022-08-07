import logo from "./logo.svg";
import { useNavigate } from "react-router-dom";
import "./App.css";
export default function App() {
  const navigate = useNavigate();
  return (
    <div>
      <ul>
        <li onClick={() => navigate("/weddle")}>Weddle</li>
      </ul>
    </div>
  );
}
