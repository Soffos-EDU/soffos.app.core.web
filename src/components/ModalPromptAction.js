import {
  Flex,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';

const ModalPromptAction = ({
  isOpen,
  onClose,
  modalTitleText,
  modalBodyText,
  handleConfirmClick,
}) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent bg="bg.brand" m="20px">
        <ModalHeader>{modalTitleText}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>{modalBodyText}</Text>
        </ModalBody>
        <ModalFooter>
          <Flex justifyContent="space-between" w="full">
            <Button onClick={onClose} variant="outline">
              Cancel
            </Button>
            <Button onClick={handleConfirmClick}>Yes</Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalPromptAction;
