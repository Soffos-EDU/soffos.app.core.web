import { Box, Flex, Text, useDisclosure } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { IoIosArrowBack } from 'react-icons/io';
import ModalPromptAction from './ModalPromptAction';

const backButtonStyles = {
  cursor: 'pointer',
  maxWidth: '90px',
  position: 'relative',
};

const backButtonIconStyles = {
  position: 'relative',
  top: '2px',
};

const BackButton = ({
  path,
  inside,
  shouldPrompt,
  promptTitle,
  promptText,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const handleBackAction = () => {
    if (shouldPrompt) {
      onOpen();
    } else {
      router.push(path, undefined, { shallow: true });
    }
  };

  const handleLeave = () => {
    onClose();
    router.push(path, undefined, { shallow: true });
  };

  return (
    <>
      <Box
        {...backButtonStyles}
        top={inside ? '0' : { base: '30px', md: '50px' }}
        data-testid="back-button"
        onClick={handleBackAction}
      >
        <Flex>
          <Box {...backButtonIconStyles}>
            <IoIosArrowBack fontSize={18} />
          </Box>
          <Text ml={2}>Back</Text>
        </Flex>
      </Box>
      {shouldPrompt && (
        <ModalPromptAction
          isOpen={isOpen}
          onClose={() => {
            onClose();
          }}
          modalTitleText={promptTitle}
          modalBodyText={promptText}
          handleConfirmClick={handleLeave}
        />
      )}
    </>
  );
};

export default BackButton;
