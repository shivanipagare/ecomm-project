import './Sidebar.css';
import { FaHome, FaUser, FaUsers, FaWindows, FaWindowRestore, FaShoppingBag, FaGifts } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const Sidebar = () => {
  return (
    <div className="main-container col-2 p-0">


      <section className="routes" style={{ backgroundColor: "#000067", height: "110%" }}>



        <div className='sub-container' to="/dashboard" style={{ padding: "13px" }}>
          <Link className="icon"><FaHome /></Link>
          <Link className='link-text' to="/">Dashboard</Link><br />
        </div>

        <div className='sub-container'to="/user" style={{ padding: "13px" }}>
          <Link className="icon"><FaUser /></Link>
          <Link className='link-text' to="/user">User</Link><br />
        </div>


        <div className='sub-container' style={{ padding: "13px" }}>
          <Link className="icon"><FaUsers /></Link>
          <Link className='link-text' to="/roles">Roles</Link><br />
        </div>

        <div className='sub-container' style={{ padding: "13px" }}>
          <Link className="icon"><FaWindows /></Link>
          <Link className='link-text' to="/category">Category</Link><br />
        </div>

        <div className='sub-container' style={{ padding: "13px" }}>
          <Link className="icon"><FaWindowRestore /></Link>
          <Link className='link-text' to="/subcategory">Subcategory</Link><br />
        </div>

        <div className='sub-container' style={{ padding: "13px" }}>
          <Link className="icon"><FaUsers /></Link>
          <Link className='link-text' to="/retailers">Retailers</Link><br />
        </div>

        <div className='sub-container' style={{ padding: "13px" }}>
          <Link className="icon"><FaShoppingBag /></Link>
          <Link className='link-text' to="/customer">Customer</Link><br />
        </div>

        <div className='sub-container' style={{ padding: "13px" }}>

          <Link className="icon"><FaGifts /></Link>
          <Link className='link-text' to="/offer">Offer</Link>
        </div>

        <div className='sub-container' style={{ padding: "13px" }}>

          <Link className="icon"><FaGifts /></Link>
          <Link className='link-text' to="/thirdparty">Third Party</Link>
        </div>

      </section>
    </div>
  )
}
export default Sidebar;