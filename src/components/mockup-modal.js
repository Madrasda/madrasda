import React, { useEffect, useState } from "react";
import { css, Modal, Button, Text } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { Grid, Dropdown, Radio } from "@nextui-org/react";

export default function MockupModal({mockups, selectMockup}) {
  const [visible, setVisible] = React.useState(false);
  const [selected, setSelected] = useState(null);
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
      <Button
        className='z-0'
        auto
        onPress={handler}
        style={{
          background: "white",
          border: "white",
        }}>
        <Image src='/plus-icon.png' width={40} height={40} />
      </Button>
      <Modal
        width='500px'
        closeButton
        preventClose
        aria-labelledby='modal-title'
        open={visible}
        onClose={closeHandler}
        css={{ fontFamily: "$algeria" }}>
        <Modal.Header>
          <Text id='modal-title' size={18}>
            Create a new product design
          </Text>
        </Modal.Header>

        <Modal.Body css={{ fontFamily: "$algeria" }}>
          <div className='bg-[#D9D9D9] w-11/12 overflow-hidden m-3 p-5 rounded-lg'>
            <div className='flex justify-around items-center'>
              <Grid.Container gap={1.5} justify='flex-center'>
                <Grid xs={200}>
                  <Grid className='flex justify-between items-center w-full'>
                    <Dropdown css={{ fontFamily: "$algeria" }}>
                      <Dropdown.Button css={{ fontFamily: "$algeria" }}
                  style={{
                    background: "#FFA000",
                  }}>
                        Mockup
                      </Dropdown.Button>
                      <Dropdown.Menu
                        color={selectedColor}
                        variant='shadow'
                        aria-label='Actions'
                        height='200'
                        css={{ fontFamily: "$algeria" }}>
                        {mockups &&
                          mockups.map((m) => {
                            return (
                              <Dropdown.Item
                                key={m.id}
                                textValue=''
                                css={{ fontFamily: "$algeria" }}>
                                <div
                                  onClick={() => {
                                    setSelected(m.name);
                                    setMockupDetails(m);
                                  }}>
                                  {m.name}
                                </div>
                              </Dropdown.Item>
                            );
                          })}
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

        <Modal.Footer css={{ fontFamily: "$algeria" }}>
          {mockupDetails && (
            <Link href={`/vendor/createproduct/${mockupDetails.id}`}>
              <Button
                auto
                onPress={closeHandler}
                css={{ fontFamily: "$algeria" }}
                style={{
                  background:"linear-gradient(45deg, #ffa000 30%, #ffc107 90%)",
                  color:"white",
                }}>
                Proceed
              </Button>
            </Link>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}