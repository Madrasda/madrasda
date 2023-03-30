import React from "react";
import { Modal, Button, Text } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { Grid, Dropdown, Radio } from "@nextui-org/react";

export default function MockupModal() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  const [selectedColor, setSelectedColor] = React.useState("default");
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
        closeButton
        preventClose
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Choose Category
          </Text>
        </Modal.Header>

        <Modal.Body>
        <div className="bg-[#D9D9D9] w-full overflow-hidden m-3 p-5 rounded-lg">
        <div className="my-2 font-bold">Category
              <ul class="w-48 flex flex-row text-sm  font-medium text-black">
                  <li class="w-full">
                      <div class="flex items-center pl-3">
                          <input id="list-radio-license" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                          <label for="list-radio-license" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Men</label>
                      </div>
                  </li>
                  <li class="w-full">
                      <div class="flex items-center pl-3">
                          <input id="list-radio-id" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                          <label for="list-radio-id" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Women</label>
                      </div>
                  </li>
                  <li class="w-full">
                      <div class="flex items-center pl-3">
                          <input id="list-radio-license" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                          <label for="list-radio-license" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Kids</label>
                      </div>
                  </li>
                  <li class="w-full">
                      <div class="flex items-center pl-3">
                          <input id="list-radio-id" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                          <label for="list-radio-id" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Accessories</label>
                      </div>
                  </li>
              </ul>
            </div>
          <div className="flex justify-around items-center">
          <Grid.Container gap={1.5} justify="flex-center">
            <Grid xs={200}>
              <Grid>
                <Dropdown>
                  <Dropdown.Button color="error" shadow>
                    Mockup
                  </Dropdown.Button>
                  <Dropdown.Menu
                    color={selectedColor}
                    variant="shadow"
                    aria-label="Actions"
                    height="200"
                  >
                    <Dropdown.Item key="tshirt">T-Shirt</Dropdown.Item>
                    <Dropdown.Item key="hoodie">Hoodie</Dropdown.Item>
                    <Dropdown.Item key="sweatshirt">SweatShirt</Dropdown.Item>
                    <Dropdown.Item key="bag">Bag</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Grid>
            </Grid>
          </Grid.Container>
            {/* `````<Image src="/wake-up.png" width={100} height={40} />````` */}
            </div>
        </div>
        </Modal.Body>
      
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          <Link href="/vendor/createtemplate">
          <Button auto 
          onPress={closeHandler}
          style={{
            background: "#A5153F",
          }}>
            Proceed
          </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
}