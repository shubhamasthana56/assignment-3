import "./customer-info.css";
const CustomerInfo = ({appointment, email, phone})=> {
    return (
        <>
            <div className="container">
                <div className="customer-info">
                    <div className="customer-info__appointment">
                        <span className="customer-info__label">Appointment:</span>
                        <span>{appointment}</span>
                    </div>
                    <div className="customer-info__email">
                        <span className="customer-info__label">Email:</span>
                        <span>{email}</span>
                    </div>
                    <div className="customer-info__phone">
                        <span className="customer-info__label">Phone:</span>
                        <span>{phone}</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CustomerInfo;