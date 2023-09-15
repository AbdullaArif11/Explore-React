export default function Friend({friend}){
  const {name, email, id, phone, website} = friend;
  return(
    <div className="border2">
      <h3>Name: {name}</h3>
      <h4>Email: {email}</h4>
      <p>Id: {id} website: {website}</p>
      <h5>Phone: {phone}</h5>
    </div>
  )
}