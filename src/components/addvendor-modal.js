import React from "react";
import { Modal, Button, Text } from "@nextui-org/react";
import Image from "next/image";
import WithdrawForm from "./withdraw-form";
import AddVendorForm from "./addvendor-form";
import axios from "axios";

export default function AddVendorModal() {
  const [data,setData] = React.useState({
    name : "",
    email : "",
    imgUrl : "",
    companyName : "",
    companyUrl : "",
    gstin : "",
    password : ""
  });
  
  

  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  };

  function handleSubmit(e){
    console.log("asdfghj");
    console.log(data);
    e.preventDefault();
    axios
      .post('http://localhost:8080/api/admin/addVendor', data)
      .then((response) => {
        console.log(response.data);
        if(response.status === 200) {
            console.log("success")
        }
      })
      .catch((err)=>{
        console.log(err);
      });
    closeHandler();
  }
  return (
    <div>
      <Button auto ghost onPress={handler}
        style={{
          background: "white",
          border: "white",
        }}
        >
        <Image src="/plus-icon.png" width={40} height={40}/>
        </Button>
      <Modal
        closeButton
        preventClose
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18} style={{
          color: "#A5153F",
        }}>
            Add Vendor
          </Text>
        </Modal.Header>
        <form onSubmit = {handleSubmit} >
          <Modal.Body>
            
            <label htmlFor="dropzone-file" className="flex items-center justify-center w-full h-fit bg-white">
                <div className="flex flex-col items-center justify-center px-4 relative group transition-all duration-300 ease-in-out">
                  {/* <h4 className="text-base">Upload</h4> */}
                  <div className="">
                  <Image src="/profile-logo.png" 
                      alt="ecommerce" 
                      height={60}
                      width={60} 
                      className="object-contain rounded-full cursor-pointer" />
                  </div>
                  <div className="absolute z-20 hidden group-hover:block">
                  <Image src="/hover profile logo.png" 
                      alt="ecommerce" 
                      height={60}
                      width={60} 
                      className="object-contain rounded-full cursor-pointer" />
                  </div>
                  {/* <h4 className="text-xs py-2">Upload</h4> */}
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
            </label>
                {/* <AddVendorForm/> */}

                <h2 className="ml-2  title-font font-medium text-sm">Vendor Display Name :</h2>
                <div className="mb-2 ml-2 ">
                    <input name="name"  type="text" className="bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5" placeholder="Enter your Display Name" onChange={handleChange}/>
                </div>
                <h2 className="ml-2  title-font font-medium text-sm">Company Name :</h2>
                <div className="mb-2 ml-2 ">
                    <input name="companyName" type="text" className="bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5" placeholder="Enter your Company Name" onChange={handleChange}/>
                </div>
                <h2 className="ml-2  title-font font-medium text-sm">Email :</h2>
                <div className="mb-2 ml-2 ">
                    <input name="email" type="email" className="bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5" placeholder="Enter your Email address" onChange={handleChange}/>
                </div>
                <h2 className="ml-2  title-font font-medium text-sm">Company URL :</h2>
                <div className="mb-2 ml-2">
                    <input name="companyUrl" type="text" className="bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5" placeholder="www.example.com" onChange={handleChange}/>
                </div>
                <h2 className="ml-2 title-font font-medium text-sm">GST IN :</h2>
                <div className="mb-2 ml-2">
                    <input name="gstin" type="text" className="bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5" placeholder="33XXXXXXXXXXXTN1X" onChange={handleChange}/>
                </div>
                <h2 className="ml-2 title-font font-medium text-sm">Default Password</h2>
                <div className="mb-2 ml-2">
                    <input name="password" type="text" className="bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5" placeholder="Password" onChange={handleChange}/>
                </div>
          </Modal.Body>
        
          <Modal.Footer>
            <Button auto flat color="error" onPress={closeHandler}>
              Close
            </Button>
            <Button auto
            type = "submit"
            style={{
              background: "#A5153F",
            }}>
              Add Vendor
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}