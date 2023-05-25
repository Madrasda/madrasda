import { Modal, useModal, Button, Text } from "@nextui-org/react";

export default function PaymentStructureModal() {
  const { setVisible, bindings } = useModal();
  return (
    <div>
      <h1 className="text-logo cursor-pointer text-xs" onClick={() => setVisible(true)}>
        Payment Structure
      </h1>
      <Modal
        scroll
        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Payment Structure
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text id="modal-description">
          <div className='font-quest text-base text-black flex flex-wrap justify-start items-center text-justify px-3 w-full'>
            <p className='font-bold text-3xl text-left'>Payment Structure Terms & Conditions for Creators on Commission</p>
            <br /><br />
            Basis These terms and conditions ("Agreement") govern the payment
            structure for creators ("Creator") who sell their products through a
            commission-based model ("Commission Model") with Madras Da Owned By
            I Clothing. By accessing or using the Commission Model, Creators
            agree to be bound by this Agreement.
            <br /><br />
            <p className='italic'>Commission Basis</p> 
            <br />
            The Commission Model enables Creators to sell their
            products through the Company's platform, and receive payment for
            such products based on a commission structure. The commission
            percentage ("Commission Percentage") payable to Creators for their
            products sold through the Commission Model will be [Percentage],
            subject to change by the Company from time to time.
            <br /><br />
            <p className='italic'>Payment Structure</p>
            <br />
            Payment to Creators for their products sold
            through the Commission Model shall be made on a monthly basis,
            within 30 days after the end of the month in which the sale was
            made. Payment shall be made via the payment method selected by the
            Creator during registration, subject to the Company's payment
            policies.
            <br /><br />
            <p className='italic'>Calculation of Payment</p>
            <br />
            Payment to Creators for their products sold
            through the Commission Model shall be calculated based on the
            Commission Percentage and the net revenue ("Net Revenue") earned by
            the Company from the sale of such products. The Net Revenue is
            defined as the gross revenue received by the Company from the sale
            of the products, less any taxes, shipping, refunds, and chargebacks.
            <br /><br />
            <p className='italic'>Reporting</p>
            <br />
            The Company shall provide the Creator with regular reports
            on the sales of their products through the Commission Model,
            including the total sales revenue, the Commission Percentage, and
            the resulting commission payments due to the Creator.
            <br /><br />
            <p className='italic'>Taxes</p>
            <br />
            Creators shall be responsible for reporting and paying all
            applicable taxes on their commission payments, and shall indemnify
            and hold the Company harmless from any liability arising from such
            taxes.
            <br /><br />
            <p className='italic'>Termination</p>
            <br />
            The Company may terminate this Agreement and the
            Creator's use of the Commission Model at any time for any reason,
            with or without notice. Upon termination, the Creator shall be
            entitled to receive payment for any outstanding commission payments
            earned prior to the termination date.
            <br /><br />
            <p className='italic'>Governing Law</p>
            <br />
            This Agreement shall be governed by and construed in
            accordance with the laws of the State of Tamilnadu, without regard
            to its conflicts of laws principles.
            <br /><br />
            <p className='italic'>Entire Agreement</p>
            <br />
            This Agreement contains the entire agreement
            between the parties with respect to the subject matter hereof and
            supersedes all prior negotiations, understandings, and agreements
            between the parties, whether written or oral.
            <br /><br /><br />
            <p className='text-center font-bold w-full'>By accessing or using
            the Commission Model, Creators acknowledge that they have read and
            understand this Agreement and agree to be bound by its terms and
            conditions.</p>
          </div>
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat style={{
					background:"linear-gradient(112deg, #FF3366 10%, #EE4B2B 90%)",
					color:"white",
				}} onPress={() => setVisible(false)}>
            Close
          </Button>
          <Button auto style={{
              background:"linear-gradient(45deg, #ffa000 30%, #ffc107 90%)",
              color:"white",
            }} onPress={() => setVisible(false)}>
            Agree
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
