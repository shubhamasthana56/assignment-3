import Header from "./component/header";
import CustomerInfo from "./component/customer-info";
import ProductInfo from "./component/product-info";
import OrderInfo from "./component/order-info";
const App = ()=> {
  const user = {
    name:"Alan Ford",
    userId:"00512163",
    appointment:"(:00 (23-06-2022)",
    email: "alan.ford@gmail.com",
    phone: "+919837465234",
    profileImage:"https://www.w3schools.com/howto/img_avatar.png",
    productName: "Boltart bosbesson",
    productDescription: "This is some random description about product",
    order: [{status: "", Door: "", Time: ""}]
  }
  return (
    <>
      <Header name={user.name} employeeId={user.userId}/>
      <CustomerInfo appointment={user.appointment} email={user.email} phone={user.phone}/>
      <OrderInfo order={user.order}/>
      <ProductInfo image={user.profileImage} name={user.productName} description={user.productDescription}/>
    </>
  )
}

export default App;
