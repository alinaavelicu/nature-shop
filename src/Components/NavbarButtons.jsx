import { Link } from "react-router-dom";

export { NavbarButton };
function NavbarButton(props) {
  return (
    <Link to={props.url}>
      <div className="bg-[#04AB2A]/60 p-2 text-white text-xl font-bold m-2 rounded-xl border-2 border-[#20522B]/20">
        {props.text}
      </div>
    </Link>
  );
}
