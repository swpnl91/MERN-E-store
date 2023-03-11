import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";




const Products = () => {
  





  return (
    <Layout>
      
      <div className="row dashboard">
        
        <div className="col-md-3">
          <AdminMenu />
        </div>
        
        <div className="col-md-9 ">
          
          <h1 className="text-center">List of Products</h1>
          
          <div className="d-flex flex-wrap">
            
            {products?.map((p) => (
              
              <Link
                key={p._id}
                to={`/dashboard/admin/product/${p.slug}`}
                className="product-link"
              >
                
              </Link>

            ))}

          </div>

        </div>

      </div>

    </Layout>
  );
};

export default Products;