// import { useState } from 'react';

// import PropTypes from 'prop-types';

// import * as S from './ImageGalleryItem.styled';
// import { Modal } from 'components/Modal/Modal';

// export function ImageGalleryItem(showModal) {
//   const [showModal, setShowModal] = useState(false);

//   const toggleModal = (showModal) => {
//       showModal===!showModal
//     };
//   };

//   setShowModal(showModal);
//   const { image } = this.props;

//   return (
//     <S.GalleryItem>
//       <S.GalleryImage
//         src={image.webformatURL}
//         alt={image.tags}
//         onClick={this.toggleModal}
//       />
//       {showModal && (
//         <Modal
//           largeImageURL={image.largeImageURL}
//           tags={image.tags}
//           onClose={this.toggleModal}
//         />
//       )}
//     </S.GalleryItem>
//   );
// }

import { useState } from 'react';

import PropTypes from 'prop-types';

import * as S from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export function ImageGalleryItem({ image }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  return (
    <S.GalleryItem>
      <S.GalleryImage
        src={image.webformatURL}
        alt={image.tags}
        onClick={toggleModal}
      />
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={image.largeImageURL} alt={image.tags} />
        </Modal>
      )}
    </S.GalleryItem>
  );
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};
