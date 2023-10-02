import { Button, Modal } from "@nextui-org/react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ProfileModal({ onMessage }) {
  const [visible, setVisible] = useState(false);
  const [editMode, setEditMode] = useState(false); // State to manage edit mode
  const [password, setPassword] = useState({
    password: "",
    againPassword: "",
  });
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const getProfileDetails = () => {
    axios
      .get(
        "https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/client/myProfile",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token_client")}`,
          },
        }
      )
      .then((res) => {
        setData(res.data);
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updatePassword = () => {
    if (password.password !== password.againPassword) {
      onMessage("error", "Passwords Must Match");
      return;
    }
    axios
      .put(
        "https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/client/updatePassword",
        {
          password: password.password,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token_client"),
          },
        }
      )
      .then(() => {
        setVisible(false);
        onMessage("success", "Password Changed Successfully");
        setEditMode(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEditClick = () => {
    setEditMode(true);
  };
  const handler = () => {
    setVisible(true);
  };
  const handleCancelClick = () => {
    setEditMode(false);
  };

  const handleSaveClick = () => {
    updatePassword();
  };
  const closeHandler = () => {
    setVisible(false);
  };
  useEffect(() => {
    getProfileDetails();
  }, []);

  return (
    <>
      <Button onPress={handler} style={{ backgroundColor: "#FFA000" }}>
        My Profile
      </Button>
      <Modal
        scroll='false'
        width='100%'
        closeButton={false}
        open={visible}
        onClose={closeHandler}
        className='w-fit mx-auto'>
        <Modal.Header className='font-black'>My Profile</Modal.Header>
        <Modal.Body className='md:w-fit'>
          {editMode ? (
            // Render input fields in edit mode
            <div className='flex flex-col space-y-4'>
              <input
                type='password'
                className='border rounded-md px-4 py-2 focus:outline-none'
                placeholder='New Password'
                onChange={(e) =>
                  setPassword({ ...password, password: e.target.value })
                }
              />
              <input
                type='password'
                className='border rounded-md px-4 py-2 focus:outline-none'
                placeholder='Re-enter Password'
                onChange={(e) =>
                  setPassword({
                    ...password,
                    againPassword: e.target.value,
                  })
                }
              />
              <div className='flex space-x-6'>
                <Button
                  onClick={handleSaveClick}
                  style={{ color: "white", backgroundColor: "#FFA000" }}>
                  Save
                </Button>
                <Button
                  onClick={handleCancelClick}
                  style={{ color: "white", backgroundColor: "#FF0000" }}>
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            // Render profile data in view mode
            <div className='flex flex-col space-y-5 md:w-[800px] w-full'>
              <div>
                <p className='font-bold text-lg'>Name</p>
                <p>{data.name}</p>
              </div>
              <div>
                <p className='font-bold text-lg'>Email</p>
                <p>{data.email}</p>
              </div>
              <div>
                <p className='font-bold text-lg'>Phone Number</p>
                <p>{data.phone}</p>
              </div>
              <Button
                onClick={handleEditClick}
                style={{
                  color: "white",
                  backgroundColor: "#FFA000",
                  width: "30%",
                  margin: "0 auto",
                }}>
                Change Password
              </Button>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}
