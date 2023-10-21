import React, { useState, useEffect } from "react";
import {useDispatch} from 'react-redux';
import {addCart} from '../redux/action';
import { Link, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton"; // Updated import
import { NavLink } from "react-router-dom";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product)=>{
    dispatch(addCart(product));
  }

  useEffect(() => {
    let componentMounted = true;

    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (componentMounted) {
        setProduct(await response.json());
        setLoading(false);
      }
    };

    getProduct();

    return () => {
      componentMounted = false;
    };
  }, [id]);

  const ShowProduct = () => (
    <>
      <div className="col-md-6">
        <img
          src={product.image}
          alt={product.title}
          height="400px"
          width="400px"
        />
      </div>
      <div className="col-md-6">
        <h4 className="text-uppercase text-black-50">{product.category}</h4>
        <h1 className="display-5">{product.title}</h1>
        <p className="lead fw-bolder">
          Rating {product.rating && product.rating.rate}
          <i className="fa fa-star"></i>
        </p>
        <h3 className="display-6 fw-bold my-4">${product.price}</h3>
        <p className="lead">{product.description}</p>
        <button className="btn btn-outline-dark px-4 py-2" onClick={()=> addProduct(product)}>Add to Cart</button>
        <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
          Go to Cart
        </NavLink>
      </div>
    </>
  );

  const Loading = () => (
    <>
      <div className="col-md-6">
        <Skeleton height={400} />
      </div>
      <div className="col-md-6" style={{ lineHeight: 2 }}>
        <Skeleton height={50} width={300} />
        <Skeleton height={75} />
        <Skeleton height={25} width={150} />
        <Skeleton height={50} />
        <Skeleton height={150} />
        <Skeleton height={50} width={100} />
        <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
      </div>
    </>
  );

  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
}

export default Product;

// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import { Skeleton } from "react-loading-skeleton";
// import { NavLink } from "react-router-dom";

// function Product() {
//   const { id } = useParams();
//   const [product, setProduct] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const getProduct = async () => {
//       setLoading(true);
//       const responce = await fetch(`https://fakestoreapi.com/products/${id}`);
//       if (componentMounted) {
//         setProduct(await responce.json());
//         setLoading(false);
//         console.log(filter);
//       }
//     };
//     getProduct();
//     return () => {
//       componentMounted = false;
//     };
//   }, [id]);

//   const ShowProduct = () => {
//     <>
//       <div className="col-md-6">
//         <img
//           src={product.image}
//           alt={product.title}
//           height="400px"
//           width="400px"
//         />
//       </div>
//       <div className="col-md-6">
//         <h4 className="text-uppercase text-balck-50">{product.category}</h4>
//         <h1 className="display-5">{product.title}</h1>
//         <p className="lead fw-bolder">
//           Rating {product.rating && product.rating.rate}
//           <i className="fa fa-star"></i>
//         </p>
//         <h3 className="display-6 fw-bold my-4">${product.price}</h3>
//         <p className="lead">{product.description}</p>
//         <buttton className="btn btn-outline-dark px-4 py-2">
//           Add to Cart
//         </buttton>
//         <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
//           Go to Cart
//         </NavLink>
//       </div>
//     </>;
//   };

//   const Loading = () => {
//     return (
//       <>
//         <div className="col-md-6">
//           <Skeleton height={400} />
//         </div>
//         <div className="col-md-6" style={{ lineHeight: 2 }}>
//           <Skeleton height={50} width={300} />
//           <Skeleton height={75} />
//           <Skeleton height={25} width={150} />
//           <Skeleton height={50} />
//           <Skeleton height={150} />
//           <Skeleton height={50} width={100} />
//           <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
//         </div>
//       </>
//     );
//   };
//   return (
//     <div>
//       <div className="container py-5">
//         <div className="row py-4">
//           (loading ? <Loading /> : <ShowProduct />)
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Product;
