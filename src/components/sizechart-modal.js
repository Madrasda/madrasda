import { Modal, useModal, Button, Text } from "@nextui-org/react";

export default function SizeChartModal() {
  const { setVisible, bindings } = useModal();
  return (
    <div>
      <Button auto light onPress={() => setVisible(true)}>
        Size Chart
      </Button>
      <Modal
        scroll
        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Modal with a lot of content
          </Text>
        </Modal.Header>
        <Modal.Body>
          size chart goes here
        </Modal.Body>
        <Modal.Footer>
          <Button auto css={{backgroundColor: "#FFA000"}} onPress={() => setVisible(false)}>
            Agree
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
