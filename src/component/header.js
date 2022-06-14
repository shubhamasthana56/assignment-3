import "./header.css";
const Header = ({name, employeeId})=> {
    const arrow = "<";
    return (
        <>
            <div className="header">
                <span>{arrow}</span>
                <div className="header-info">
                    <div className="header-info__name">{name}</div>
                    <div className="header-info__id">{employeeId}</div>
                </div>
                <button className="header-print">Print</button>
            </div>
        </>
    )
}
export default Header;
