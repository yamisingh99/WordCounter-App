import React from 'react';

function Nav(props) {
  return (
    <>
      <div className="header">
        <h1>{props.title}</h1>
        <ul className='icons flex my-2'>
          <li>{props.home}</li>
          <li>Contact</li>
          <li>Menu</li>
          <li>Us</li>
        </ul>
      </div>
      {/* <div className="searchbox">
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
      <div className="container">
      <TextForm heading="enter data to write"/>
      </div> */}
    </>
  );
}
// Nav.propTypes={
//   title:PropTypes.string.isRequired,
//   home:propTypes.string.isRequired
// }
// Nav.defaultProps={
//   title:'set title here',
//   home:'about home here'
// }
export default Nav;
