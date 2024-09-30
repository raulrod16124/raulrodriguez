import { CloseButton, LargeImage, ModalContent, ModalOverlay } from './ImageModal.styled';
import { AiOutlineClose } from 'react-icons/ai'; 

interface IProps {
    imgSrc: string;
    onClose: () => void;
}

export const ImageModal = ({ imgSrc, onClose }: IProps) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}> {/* Evita cerrar cuando se hace clic en la imagen */}
        <CloseButton onClick={onClose}>
          <AiOutlineClose />
        </CloseButton>
        <LargeImage src={imgSrc} alt="Selected" />
      </ModalContent>
    </ModalOverlay>
  );
};
