const products = [
  {
    title: "cabbage",
    isfruit: false,
    id: 1,
  },
  {
    title: "capsicum",
    isfruit: false,
    id: 2,
  },
  {
    title: "apple",
    isfruit: true,
    id: 3,
  },
];

export default function Shoppinglist(){
    const listitems=products.map((product)=>{
            return (
              <div>
                <h1>{product.title}</h1>
                <h1>{product.id}</h1>
              </div>
            );
    })
    return <ul>{listitems}</ul>;
}