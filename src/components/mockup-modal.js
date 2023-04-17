import React, { useEffect, useState } from "react";
import { css, Modal, Button, Text } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { Grid, Dropdown, Radio } from "@nextui-org/react";

export default function MockupModal({mockups, selectMockup}) {
  const [visible, setVisible] = React.useState(false);
  const [selected, setSelected] = useState(null);
  const [audience, setAudience] = useState(null);
  const [selectedColors, setSelectedColors] = useState([]);
  const [mockupDetails, setMockupDetails] = useState(null);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  const [selectedColor, setSelectedColor] = useState("default");
  const colors = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "error",
  ];

  const capitalize = (str) => {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
  };

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
        width="500px"
        closeButton
        preventClose
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        css={{fontFamily: '$algeria'}}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Create a new product design
          </Text>
        </Modal.Header>

        <Modal.Body css={{fontFamily: '$algeria'}}>
        <div className="bg-[#D9D9D9] w-11/12 overflow-hidden m-3 p-5 rounded-lg">
        <div className="my-2 font-bold">Audience
              <ul class="w-48 flex flex-wrap text-sm  font-medium text-black">
                  <li>
                      <div class="flex items-center pl-3">
                          <input id="list-radio-license" type="radio" value="Men" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" onChange={(e) => setAudience(e.target.value)}/>
                          <label for="list-radio-license" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Men</label>
                      </div>
                  </li>
                  <li>
                      <div class="flex items-center pl-3">
                          <input id="list-radio-id" type="radio" value="Women" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" onChange={(e) => setAudience(e.target.value)} />
                          <label for="list-radio-id" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Women</label>
                      </div>
                  </li>
                  <li >
                      <div class="flex items-center pl-3">
                          <input id="list-radio-license" type="radio" value="Kids" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" onChange={(e) => setAudience(e.target.value)} />
                          <label for="list-radio-license" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Kids</label>
                      </div>  
                  </li>
                  <li>
                      <div class="flex items-center pl-3">
                          <input id="list-radio-id" type="radio" value="Unisex" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" onChange={(e) => setAudience(e.target.value)} />
                          <label for="list-radio-id" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Unisex</label>
                      </div>
                  </li>
              </ul>
            </div>
          <div className="flex justify-around items-center">
          <Grid.Container gap={1.5} justify="flex-center">
            <Grid xs={200}>
              <Grid>
                <Dropdown css={{fontFamily: '$algeria'}}>
                  <Dropdown.Button color="error" shadow>
                    Mockup
                  </Dropdown.Button>
                  <Dropdown.Menu
                    color={selectedColor}
                    variant="shadow"
                    aria-label="Actions"
                    height="200"
                    css={{fontFamily: '$algeria'}}
                  >
                    { mockups &&
                      mockups.map((m) => {
                        return (
                          <Dropdown.Item key={m.id} textValue="" css={{fontFamily: '$algeria'}}>
                            <div onClick={() => {
                              setSelected(m.name);
                              setMockupDetails(m);
                              }
                            }>
                              {m.name}
                            </div>
                          </Dropdown.Item>
                        )
                      })
                    }
                  </Dropdown.Menu>
                </Dropdown>
                <h1>{selected && selected}</h1>
              </Grid>
            </Grid>
          </Grid.Container>
            {/* `````<Image src="/wake-up.png" width={100} height={40} />````` */}
            </div>
        </div>
        </Modal.Body>
      
        <Modal.Footer css={{fontFamily: '$algeria'}}>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          {
            mockupDetails && 
            <Link href={`/vendor/createproduct/${mockupDetails.id}?audience=${audience}`}>
          <Button auto 
          onPress={closeHandler}
          style={{
            background: "#A5153F",
          }}>
            Proceed
          </Button>
          </Link>}
        </Modal.Footer>
      </Modal>
    </div>
  );
}